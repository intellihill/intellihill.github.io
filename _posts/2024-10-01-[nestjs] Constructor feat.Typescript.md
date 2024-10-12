---
layout: post
tag: nodejs 
---
***
<br>


[NestJs-Docs](https://docs.nestjs.com/providers)

## 생성자(Constructor)
<br>

NestJs Docs를 보다보면 예제의 대부분이 TypeScript로 되어있다.

위의 링크의 `cats.controller.ts`부분을 보면

<br>

```
...
export class CatsController {
	constructor(private catsService: CatsService) {}
	...
}
```

<br>

이런식으로 생성자를 선언하는 부분이 존재한다.

일반적으로, 클래스의 생성자를 정의할 때, 생성자의 파라미터와 클래스의 멤버 변수를 동시에 선언하는 방식이다.

`private catsServce: CatsService`는 생성자 파라미터이자, 클래스 멤버 변수를 한 번에 선언하는 축약 문법이다.

`Typescript의` 기능으로서, 생성자 파라미터에 접근 지정자(public, private, protected)를 붙이면 해당 파라미터는 자동으로

클래스의 속성으로 설정된다.

- 생성자는 함수로서 파라미터를 받아야 한다.
- 클래스 내부에서 속성을 선언할 때 `constructor` 밖에서 해야한다.

<br>

```
class SomeClass {
	private catsService: CatsService;

	constructor(catsService: CatsService) {
		this.catsService = catsService;
	}
}
```

