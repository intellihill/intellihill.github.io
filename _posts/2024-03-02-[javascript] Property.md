---
layout: post
tag: javascript
---
***

## 정의

자바스크립트에서 프로퍼티(Property)는 객체(Object)의 속성(Attribute) 또는 특징을 나타낸다.
프로퍼티는 객체 내에 포함되며, 각각의 프로퍼티는 키(Key)와 값(Value)로 이루어져 있다. 
키는 항상 문자열이거나 Symbol이고, 값은 모든 타입이 가능함.

## Property 종류

데이터 프로퍼티(Data Property): 값(value)을 가지는 일반적인 프로퍼티이다
접근자 프로퍼티(Accessor Property): 값을 가져오거나 설정할 때 호출되는 함수로 정의. 접근자 프로퍼티는 getter와 setter 함수로 구성된다.

```
// 점 표기법(Dot Notation)

const obj = {};
obj.propertyName = 'value';
console.log(obj.propertyName); // 'value'
```
<br>

```
// 대괄호 표기법(Braket Notation)

const obj = {};
obj['propertyName'] = 'value';
console.log(obj['propertyName']); // 'value'
```
<br>

```
// 객체 리터럴(Object Literal)

const obj = {
    propertyName: 'value'
};
console.log(obj.propertyName); // 'value'
```
<br>

```
// Object.defineProperty 메소드 사용

const obj = {};
Object.defineProperty(obj, 'propertyName', {
    value: 'value', // 프로퍼티의 값.
    writable: true, // 값을 변경할 수 있는지 여부 (true 또는 false).
    enumerable: true, // 열거 가능 여부 (true 또는 false).
    configurable: true // 프로퍼티를 삭제하거나 속성을 변경할 수 있는지 여부 (true 또는 false).
});
console.log(obj.propertyName); // 'value'
```
