---
layout: post
tag: nodejs
---
***

[출처](https://nodejs.org/en/learn/asynchronous-work/javascript-asynchronous-programming-and-callbacks)
<br>


### Asynchronicity in Programming Languages

컴퓨터는 비동기적으로 디자인되어있다.  

비동기는 주 프로그램 흐름에서 독립적으로 발생할 수 있다는걸 의미한다.  

현재 소비자 컴퓨터들의 모든 프로그램은 특정 지점을 위해 돌아가고 그때 다른 프로그램이 실행을 계속할 수 있도록 실행을 멈춘다.

이것은 알아채지 못할정도로 빠른 싸이클로 돌아간다. 우리는 우리의 컴퓨터가 많은 프로그램을 동시에 실행한다고 생각하지만 이것은 환상이다.  
<br>

프로그램은 interrputs를 사용하여 signal이 system의 관심을 얻도록 processor에 제출한다.  

program이 network request를 기다릴 때, request가 끝날 떄 까지 processor을 정지할 수 없다.

많은 동기적으로 만들어진 언어들은 비동기 관리 방식의 라이브러리를 제공한다.  
 
#### Javescript

Javascript는 기본적으로 동기적이고 single theread이다. 이것은 code가 새로운 thread를 만들수 없고 평행적으로 실행된다는걸 의미한다.  

for example>

<br>
```
// Javascript
const a = 1;
const b = 2;
const c = a * b;
console.log(c);
doSomething();
```
<br>
하지만 Javascript는 browser에서 탄생했다, onClick, onMouseOver, onChange, onSubmit같은 사용자 actions의 응답할 것 이다.  
어떻게 동기적인 프로그램모델에서 이것을 할 수있을까?

대답은 환경이었다. browser는 제공한다 그것을 할 수 있는 방법을 제공한다 이러한 종류의 기능을 다룰 수 있는 APIs를 제공함으로서.

더 최근에는 Node.js는 이런 개념의 확장적인 환경인(file access, network call and so on...) non-blocking I/O 환경을 소개했다.

#### Callbacks









