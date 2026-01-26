---
layout: post
tags: [telegram]
image: /assets/images/telegram.png
---

# Telegram Error Notification 설정 가이드

백엔드에서 서버 에러 발생 시 텔레그램으로 알림을 받는 기능입니다.

## 1. 텔레그램 봇 생성

### 1.1 BotFather에서 봇 생성
1. 텔레그램에서 **@BotFather** 검색 후 대화 시작
2. `/newbot` 명령어 입력
3. 봇 이름 입력 (예: `WhiskyWatch Error Notifier`)
4. 봇 username 입력 (예: `whiskywatch_err_bot`)
5. 생성 완료 시 **Bot Token** 복사
   ```
   HTTP API: 1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
   ```

### 1.2 Chat ID 획득
1. 생성한 봇에게 텔레그램에서 아무 메시지나 전송
2. 브라우저에서 아래 URL 접속 (토큰 부분 교체):
   ```
   https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
   ```
3. 응답에서 `"chat":{"id": 123456789}` 부분의 숫자가 **Chat ID**

## 2. 환경변수 설정

`.env` 파일에 다음 항목 추가:

```env
# Telegram Error Notifications
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

## 3. 프로젝트 구조

```
backend/src/
├── modules/
│   └── telegram/
│       ├── telegram.module.ts    # 글로벌 모듈
│       └── telegram.service.ts   # 텔레그램 API 서비스
├── common/
│   └── filters/
│       └── http-exception.filter.ts  # 예외 필터 (텔레그램 연동)
├── app.module.ts                 # TelegramModule 임포트
└── main.ts                       # 글로벌 필터 등록
```

## 4. 알림 동작 방식

| 에러 유형 | 알림 여부 | 설명 |
|----------|----------|------|
| 5xx 서버 에러 | O | Internal Server Error 등 |
| 4xx 클라이언트 에러 | X | Bad Request, Not Found 등 (스팸 방지) |
| Unhandled Exception | O | 처리되지 않은 모든 예외 |

## 5. 알림 메시지 형식

```
🚨 Server Error Alert

Environment: development
Server: WhiskyWatch
Time: 2024-01-03T12:00:00.000Z

📍 Request:
• Method: POST
• Path: /api/v1/whisky

❌ Error:
• Status: 500
• Message: Internal server error

📋 Stack Trace:
Error: Something went wrong
    at WhiskyService.create (whisky.service.ts:45:11)
    ...
```

## 6. 테스트 방법

### 6.1 직접 메시지 전송 테스트
```bash
curl "https://api.telegram.org/bot<TOKEN>/sendMessage?chat_id=<CHAT_ID>&text=테스트 메시지"
```

### 6.2 서버 에러 테스트
서버 실행 후 의도적으로 500 에러를 발생시켜 알림 수신 확인

## 7. 주의사항

- **Bot Token**은 절대 공개 저장소에 커밋하지 마세요
- `.env` 파일은 `.gitignore`에 포함되어 있는지 확인
- 프로덕션 환경에서는 별도의 봇을 생성하여 사용 권장
- 알림이 너무 많이 오면 `telegram.service.ts`에서 조건 추가 가능

## 8. 트러블슈팅

### Chat ID를 찾을 수 없는 경우
1. 봇에게 먼저 메시지를 보냈는지 확인
2. `/getUpdates` 응답이 빈 배열이면 봇과 대화를 시작하지 않은 것
3. Webhook이 설정되어 있으면 `/deleteWebhook` 호출 후 재시도

### 알림이 오지 않는 경우
1. 환경변수가 올바르게 설정되었는지 확인
2. 서버 로그에서 `Telegram notifications disabled` 메시지 확인
3. 4xx 에러는 알림이 가지 않음 (의도된 동작)
