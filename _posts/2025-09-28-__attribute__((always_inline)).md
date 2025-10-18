---
layout: post
tags: [cpp, attribute, gcc, inline, optimization]
image: /assets/images/c++.png
---
# `__attribute__` 컴파일러 확장 기능

**생성일**: 2025-09-28
**태그**: #cpp #attribute #gcc #inline #optimization

## 핵심 내용
`__attribute((always_inline))`는 GCC에서 제공하는 attribute로, 
컴파일러에게 함수를 강제로 인라인화하도록 지시한다.

### 기본 문법
- 인라인 함수는 헤더에 정의 (템플릿 처럼)
- 인라인 함수는 컴파일 타임에 호출하는 곳에 코드가 직접 삽입되어야 하므로, 컴파일러가 정의를 볼 수 있어야 한다.
```cpp
static inline __attribute__((always_inline)) 
return_type function_name(parameter) {
	// 함수 본문
}
```

### 일반 `inline`과의 차이점
- `inline`: 컴파일러에게 인라인화를 제안
- `always_inline`: 컴파일러에게 인라인화를 강제

## 주의사항

### 코드 크기 증가
- 인라인화로 인한 코드 중복으로 바이너리 크기가 커질 수 있다.
### 재귀 함수 제한

```cpp
static inline __attribute__((always_inline)) 
int factorial(int n) { 
	return (n <= 1) ? 1 : n * factorial(n-1); // 무한 인라인 확장 
}
```

### 함수 포인터 사용 불가
```cpp
static inline __attribute__((always_inline)) 
void func() { 
	printf("Hello\n"); 
} 
// 오류: always_inline 함수는 함수 포인터로 사용 불가 void (*ptr)() = func; 
// 컴파일 오류
```
