---
layout: post
title: "Resources 메모를 종합하여 Projects에서 블로그 글을 완성한다"
date: 2025-10-06
tags: [para, memo, obsidian]
image: /assets/images/obsidian.png
type: permanent
---

블로그 글은 Resources의 원자적 메모들을 Projects에서 종합하여 완성한다.

## 워크플로우

```
1. 프로젝트 생성
   Projects/C++ 포인터 블로그 글 작성/

2. 공부하면서 Resources에 원자적 메모 축적
   Resources/cpp/
   ├── 포인터 선언 시 *는 타입 지정자다.md
   ├── C++ 포인터와 참조의 차이.md
   └── 메모리 주소와 값의 구분.md

3. 프로젝트에서 메모들 종합 → 블로그 글 작성
   Projects/C++ 포인터 블로그 글 작성/
   └── C++ 포인터 완벽 가이드.md

4. 블로그에 발행

5. 프로젝트 완료 → Archives로 이동
   Archives/2025/C++ 포인터 블로그 글 작성/
```

## 각 위치의 역할

| 위치 | 역할 | 완료 후 |
|------|------|---------|
| **Resources** | 원자적 메모들 | 계속 유지 |
| **Projects** | 글 작성 작업 공간 | Archives로 이동 |
| **블로그** | 최종 발행물 | 공개 |

## 시각화

```
Resources/cpp/          Projects/블로그 글/
┌─────────────┐        ┌─────────────────┐
│ 메모 A      │───┐    │                 │
├─────────────┤   │    │  종합된 글      │───► Jekyll 블로그
│ 메모 B      │───┼───►│  (A+B+C 결합)   │     발행!
├─────────────┤   │    │                 │
│ 메모 C      │───┘    └────────┬────────┘
└─────────────┘                 │
  (계속 유지)                   ▼
                         Archives/2025/
                         (프로젝트 완료)
```

## 핵심 포인트

```
✅ Resources 메모는 삭제 안 함 (계속 참고용)
✅ Projects의 종합 글만 Archives로 이동
✅ 블로그엔 종합된 글 발행
```

## 프로젝트 완료 기준

```
목표: "C++ 포인터에 대해 정리하기"

완료 조건:
- [ ] 관련 메모 충분히 축적
- [ ] 메모들 종합하여 글 작성
- [ ] 블로그에 발행
- [ ] 완료! → Archives
```

## 관련 메모
- [[Resources가 기술 블로그의 주요 소스다]] - Resources 역할
- [[Projects만 완료되면 Archives로 이동한다]] - Projects 흐름
- [[PARA는 분류하고 제텔카스텐은 연결한다]] - 전체 시스템
