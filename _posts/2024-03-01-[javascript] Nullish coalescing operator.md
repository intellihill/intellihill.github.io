---
layout: post
tag: javascript
---
***

[mdn-docs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)

- The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand 
  when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
- 좌항의 피연산자가 false로 평가되는 falsy(false, undefined, null, 0, -0, NaN, '')이라도 null, undefined가 아니면
  좌항의 피연사자를 그대로 반환한다.

```
const foo = null ?? 'default string'

console.log(foo);
// Expected output: "default string"
```
<br>

```
const baz = 0 ?? 42;

console.log(baz);
// Expected output: 0
```
