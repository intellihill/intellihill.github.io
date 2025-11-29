---
layout: post
tags: [claude]
image: /assets/images/claude.png
---

# Claude Plan Mode

**생성일**: 2025-11-29
**태그**: #Cluade #PlanMode #CluadeCode

## 핵심 내용
`Plan Mode`는 코드 변경을 두 단계로 분리하는 안전 메커니즘이다.
코드를 실행하기 전에 연구와 분석을 분리하여 안전성을 향상시킨다.

일반 모드: `Claude`가 파일 수정, 명령 실행 등을 즉시 진행한다.
Plan Mode: 계획을 세우고 승인을 기다린다.

### 활성화 방법

- `Shift`+ `Tab`을 두 번 눌러서 Plan Mode를 active한다
- 코드를 분석하고 실행 계획을 요청 -> 응답하면 실행

### 주요 이점
- 안전성 `Claude`가 추가 확인을 요청하여 실행 전에 변경 사항을 검토하는 게이트 역할을 하므로 안전성이 확보된다.
- 성능 및 효율성 `Plan Mode`는 빠르게 작동하고 콤팩트한 계획이 생성되면 `Opus`같은 고급 모델을 사용할 때 토큰 사용을 아낄 수 있다.
