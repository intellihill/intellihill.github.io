---
layout: post
tag: swift
---
***
<br>
컴파일러에게 함수나 메서드의 본문을 해당 함수가 호출되는 곳에 직접 삽입하도록 한다.  
이는 함수 호출의 오버헤드를 줄이고, 실행 속도를 향상시키는 데 도움이 된다.

```
@inlineable
func addTwoNumbers(_ a: Int, _ b: Int) -> Int {
    return a + b
}

// 이 코드는 컴파일러에 의하여 addtwoNumber의 본문이 직접 삽입된다.
// 실제로는 let result = 3 + 4 의 코드로 대체될 것이다.
let result = addTwoNumbers(3, 4)
```