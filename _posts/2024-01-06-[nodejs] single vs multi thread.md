---
layout: post
tag: nodejs
---
***

<br>
## single thread & multi thread


```
// single thread
function singleThreadedOperation() {
  console.log("Single-threaded operation started")

  setTimeout(function() {
    console.log("Single-threaded operation completed")
  }, 2000)
}

singleThreadedOperation();
console.log("End of single-threaded code")
```
<br>

```
// Single-threaded operation started
// End of single-threaded code
// SIngle-threaded operation completed
```


```
//multi thread
const { Wokrer, isMainThread, parentPort } = require('worker_threads')

if (isMainThread) {
  console.log("Main thread started")

  // 멀티스레드 워커 생성
  const worker = new Worker(__filename)

  // 메인 스레드에서의 작업
  console.log("Main thread operation")

  // 워커로부터 메시지 수신
  worker.on('message', (message) => {
    console.log(`Main thread received: ${message}`)
    console.log("End of multi-threaded code")
  })
} else {
  // 워커 스레드에서의 작업
  parentPort.once('message', (message) => {
    console.log(`Worker thread received: ${message}`)

    // 비동기 작업 시뮬레이션
    setTimeout(function() {
      parentPort.postMessage("Multi-threaded operation completed")
    }, 2000)
  })

}
```
<br>

```
Main thread started
Main thread operation
Worker thread received: Start multi-threaded operation
Multi-threaded operation completed
Main thread revceived: Multi-threaded operation completed
End of multi-threaded code
```


