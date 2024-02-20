---
layout: post
tag: nodejs
---
***
<br>
[sourcecode](https://github.com/nodejs/node/blob/v21.5.0/lib/fs.js)  
[출처:노드공홈](https://nodejs.org/en/learn/asynchronous-work/the-nodejs-event-emitter)
<br>

### How to read environment variables from Node.js

- Node.js는 process가 시작된 순간에 set된 모든 environment variables를 호스팅하는 `env`Property를 제공한다

```
// app.js
console.log(USER_ID)
console.log(USER_KEY)

// terminal 수동 입력
~USER_ID=12345 USER_KEY=test node app.js

// 12345
// test
```
<br>
이런 식으로 node를 실행하기전에 변수를 주입시킬 수 있다.


