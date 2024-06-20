---
layout: post
tag: javascript
---
***

# this
this는 객체 자신의 프로퍼티나 메서드를 참조하기 위한 자기참조변수이다.

this가 가리키는 값(this binding)은 함수 호출 방식에 따라 동적으로 결정된다.

<br>

## 동적 결정

cf. JAVA, C++ 같은 클래스 기반 언어에서 this는 언제나 클래스가 생성하는 인스턴스를 가리킨다. 하지만 Javascript는 함수가 호출되는 방식에 따라 this가 동적으로 결정된다.


### 객체 리터럴 

- 객체 리터럴의 메서드 내부에서 this는 메서드를 호출한 객체, 즉 circle을 가리킨다.

```
const circle = {
  radius: 5,
  getDiameter() {
    // this는 메서드를 호출한 객체를 가리킨다.
    return 2 * this.radius;
  }
};

console.log(circle.getDiameter()) // 10
```

### 생성자 함수
- 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.

```
function Circle(radius) {
  // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
}

Circle.prototype.getDiameter = function() {
  // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  return 2 * this.radius;
}

// 인스턴스 생성
const circle = new Circle(5);
console.log(circle.getDiameter()); // 10
```



일반 함수로서 호출 : 전역 객체

메서드로서 호출 : 메서드를 호출한 객체(마침표 앞의 객체)

생성자 함수로서 호출 : 생성자 함수가 (미래에) 생성할 인스턴스



