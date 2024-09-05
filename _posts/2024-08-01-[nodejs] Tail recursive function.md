---
layout: post
tag: nodejs 
---
***
<br>

[출처 - Tail Call](https://webkit.org/blog/6240/ecmascript-6-proper-tail-calls-in-webkit/)

## TCO(Tail Call Optimization)
- Tail recursive function Optimization
- 함수의 재귀적 호출이 마지막 연산으로 이루어지는 경우
- node V8 engine에서는 지원을 하지 않는다.

<br>

## 일반 재귀함수
-  재귀 호출이 반복될 때마다 새로운 스택이 계속 생성된다.(스택오버플로우 발생 가능)

<br>

```
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1); // 재귀 호출 뒤에 곱셈 연산이 남음
}
```
<br>

## 꼬리 재귀함수
<br>

```
function tailFactorial(n, acc = 1) {
  if (n === 1) return acc;
  return tailFactorial(n - 1, n * acc); // 마지막 연산이 재귀 호출임
}
```
