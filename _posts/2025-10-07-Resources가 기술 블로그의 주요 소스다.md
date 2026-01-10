---
layout: post
title: "Resources가 기술 블로그의 주요 소스다"
date: 2025-10-07
tags: [para, obsidian, memo]
image: /assets/images/obsidian.png
type: permanent
---

PARA 구조에서 기술 블로그 포스트로 가장 적합한 폴더는 **Resources**다.

## 폴더별 블로그 적합도

| 폴더 | 블로그 적합? | 이유 |
|------|-------------|------|
| **Inbox** | ❌ | 정리 안 된 임시 메모 |
| **Projects** | ⚠️ 완료 후 | 진행 중엔 미완성 |
| **Areas** | ❌ 대부분 | 개인적 (건강, 재정 등) |
| **Resources** | ✅ 최적 | 정리된 지식, 공유 가치 |
| **Archives** | ⚠️ 일부 | 완료된 프로젝트 회고 |

## 왜 Resources인가?

```
Resources = 정리된 지식의 모음
          = 다른 사람에게도 유용
          = 블로그 포스트의 원재료
```

## 블로그 글 작성 워크플로우

```
Resources에서 메모 작성 (원자적 메모들)
        │
        ▼
여러 메모가 쌓임
        │
        ▼
블로그 글로 발전시킬 주제 선정
        │
        ▼
Projects/에서 "블로그 글 작성" 프로젝트 생성
        │
        ▼
여러 Resources 메모 종합 → 블로그 글 완성
        │
        ▼
Jekyll 블로그에 발행
        │
        ▼
Projects → Archives로 이동
```

## 예시

```
3. Resources/cpp/
├── 포인터 선언 시 *는 타입 지정자다.md     ─┐
├── C++ 포인터와 참조의 차이.md            ─┼─► 블로그 글로 종합
└── 메모리 주소와 값의 구분.md             ─┘
                                            │
                                            ▼
                              "C++ 포인터 완벽 가이드" 블로그 포스트
```

## Areas에서 블로그 가능한 경우

개인적이지 않고 **공유 가치**가 있으면 OK:

```
❌ Areas/건강/내 운동 기록.md      → 개인적
❌ Areas/재정/월급 관리.md         → 개인적
✅ Areas/커리어/개발자 성장기.md   → 공유 가치 있음
✅ Areas/커리어/면접 회고.md       → 공유 가치 있음
```

## 정리

```
✅ Resources = 블로그의 주요 소스 (지식 공유)
✅ Projects = 글 작성 작업 공간 (완료 후 발행)
⚠️ Areas = 공유 가치 있는 것만
❌ Inbox = 블로그 부적합 (미정리)
```

## 관련 메모
- [[PARA 메모법은 정보를 행동 가능성으로 분류한다]] - PARA 구조
- [[PARA는 분류하고 제텔카스텐은 연결한다]] - 전체 시스템
- [[Projects만 완료되면 Archives로 이동한다]] - 프로젝트 흐름
