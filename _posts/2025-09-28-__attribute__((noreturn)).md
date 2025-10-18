---
layout: post
tags: [cpp, optimization, attribute]
image: /assets/images/c++.png
---
# `__attribute__` 컴파일러 확장 기능

**생성일**: 2025-09-28
**태그**: #cpp #attribute #gcc #inline #optimization

## 핵심 내용
`__attribute((noreturn))`은 함수가 절대 반환되지 않음을 컴파일러에게 알려주는 속성이다.
함수가 프로그램을 종료하거나 무한루프에 빠지거나 다른 곳으로 제어를 넘겨줄 때 사용된다.
- 컴파일러 최적화 향상
- 코드 의도 명확화
- 정적 분석 도구의 정확성 증대
### 기본 문법

```cpp
// 헤더에서 정의
void __attribute__((noreturn)) function_name(parameters);
// 또는 함수 정의에서
void __attribute__((noreturn)) terminate_program(void) {
	exit(1);
}
```

### 기본개념


## 주의사항

### 실제로 반환하면 미정의 동작
```cpp
// 잘못된 사용 - 실제로는 반환됨

```

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
