---
layout: post
title: "Fleeting에서 Permanent로 메모를 발전시킨다"
date: 2025-10-02
tags: [zettelkasten, memo, obsidian]
image: /assets/images/obsidian.png
type: permanent
---

제텔카스텐에서 메모는 3단계로 발전한다: Fleeting → Literature → Permanent

## 메모 유형

| 유형 | 위치 | 수명 | 목적 |
|------|------|------|------|
| **Fleeting** | Inbox | 1-2일 | 빠른 캡처 |
| **Literature** | Resources | 영구 | 출처 기반 정리 |
| **Permanent** | Areas/Resources | 영구 | 내 생각으로 발전 |

## 발전 과정

```
1. Fleeting Note (Inbox)
   "포인터에서 *가 헷갈림. 왜 역참조 아니지?"

        ↓ 일일 리뷰

2. Literature Note (선택적)
   "C++ Primer에서 포인터 선언 설명..."
   + 원문 인용
   + 내 해석

        ↓ 내 것으로 소화

3. Permanent Note
   "포인터 선언 시 *는 역참조가 아니라 타입 지정자다"
   + 완전히 내 언어
   + 다른 메모와 연결
```

## Fleeting Note 예시

```markdown
---
type: fleeting
---

int *p = &x; 에서 *가 역참조 아닌가?
선언문이랑 표현식이랑 다른 건가?
→ 나중에 정리
```

## Permanent Note 예시

```markdown
---
type: permanent
---

# 포인터 선언 시 *는 역참조가 아니라 타입 지정자다

선언문에서 *는 "포인터 타입"을 나타낸다.
표현식에서 *는 "역참조 연산자"다.

## 관련 메모
- [[C++ 포인터와 참조의 차이]]
```

## 핵심 질문

Fleeting을 Permanent로 발전시킬 때:

1. **발전시킬 가치가 있는가?**
   - 없으면 삭제

2. **내 언어로 설명할 수 있는가?**
   - 없으면 더 공부 필요

3. **연결할 메모가 있는가?**
   - 없으면 고아 메모 주의

## 관련 메모
- [[PARA 메모법은 정보를 행동 가능성으로 분류한다]] - 분류 위치
- [[제텔카스텐은 메모를 연결하여 지식을 창출한다]] - 연결 원칙
