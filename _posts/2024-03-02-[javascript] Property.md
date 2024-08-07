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

### 접근자 프로퍼티

```
const obj = {
    _property: 'initial value',
    get property() {
        return this._property;
    },
    set property(value) {
        this._property = value;
    }
};

console.log(obj.property); // 'initial value'
obj.property = 'new value';
console.log(obj.property); // 'new value'
```
<br>
접근자 프로퍼티는 get과 set 키워드를 사용하여 정의하며, 이를 통해 특정 프로퍼티를 읽거나 쓸 때 호출되는 함수를 지정할 수 있다.

프로퍼티 관련 메소드
Object.keys(obj): 객체의 열거 가능한 프로퍼티 키를 배열로 반환한다.
Object.values(obj): 객체의 열거 가능한 프로퍼티 값을 배열로 반환한다.
Object.entries(obj): 객체의 열거 가능한 프로퍼티 키-값 쌍을 배열로 반환한다.
프로퍼티는 자바스크립트에서 객체를 구성하는 기본적인 단위로, 객체의 상태나 동작을 정의하는 데 사용된다.


cf. 함수도 프로퍼티가 될 수 있다.