---
layout: post
tag: nodejs
---
***
<br>
[sourcecode](https://github.com/nodejs/node/blob/v21.5.0/lib/fs.js)  
[출처:노드공홈](https://nodejs.org/en/learn/asynchronous-work/understanding-processnexttick)
<br>

#### Understanding process.nextTick()

nodejs event loop를 이해할 때 process.nextTick()은 중요한 부분중에 하나다.  

event loop가 full trip할 때 우리는 그걸 tick이라고 부른다.  

우리가 process.nextTick()에 function을 넘겼을 때, 우리는 current operation의 end에 

다음 event loop tick 전에 this function을 부르기위해 engine에게 지시한다.  

한마디로, process.nextTick()를 사용하면 현재 작업이 완료된 직후에 주어진 콜백 함수를 호출할 수 있다.  
이는 이벤트 루프의 다음 반복이 시작되기 전에 실행되는 콜백 함수를 예약한다.  

```
// 간단한 예제
console.log('Start of the script')

process.nextTick(() => {
  console.log("Inside process.nextTick callback")
})

console.log("End of the script")

// Start of the script
// End of the script
// Inside process.nextTick callback
```
<br>

```
console.log("test1")
setTimeout(() => {
  console.log("test2")
})
process.nextTick(() => {
  console.log("test3")
})
setTimeout(() => {
  console.log("test4")
})
console.log("test5")
console.log("test6")

//test1
//test5
//test6
//test3
//test2
//test4
```
<br>

Calling setTimeout(() => {}, 0) will execute the function at the end of next tick, 
much later than when using nextTick() which prioritizes the call and executes 
it just before the beginning of the next tick.

Use nextTick() when you want to make sure that in the next event loop iteration that code is already executed.

