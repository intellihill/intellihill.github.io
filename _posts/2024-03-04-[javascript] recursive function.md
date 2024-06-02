---
layout: post
tag: javascript
---
***

[출처링크-mdn](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)

# recursive function(재귀 함수)

- 재귀 함수는 반복되는 처리를 반복문 없이 구현한다.
- 탈출 조건을 반드시 만들어야한다.(그렇지 않으면 stack overflow error 발생)

```
const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
console.log(factorial(10));
// 3628800
```
<br>

```
const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
console.log(fibonacci(10));
// 55
```
<br>

```
const reduce = (fn, acc, [cur, ...rest]) =>
  cur === undefined ? acc : reduce(fn, fn(acc, cur), rest);
console.log(reduce((a, b) => a + b, 0, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
// 45
```
