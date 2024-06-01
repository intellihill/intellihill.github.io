---
layout: post
tag: nodejs
---
***

[출처](https://nodejs.org/docs/latest/api/readline.html)

# readline

## Class: InterfaceConstructor

### Event: 'close'

'readline' interface가 더 이상 사용되지 않음을 나타내는 event이다.
1. 'rl.close()' method가 호출
2. input stream이 'end' event를 받을 때(즉, 입력이 끝날 때)
3. 사용자가 Ctrl + D를 눌러서 End-Of-Transmission을 보낼 때
4. 사용자가 Ctrl + C를 눌렀을 때

```
// rl.close()를 이용한 예제
const readline = require('readline')

// readline interface 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Hello! what is your name? `, (answer) => {
  console.log('반갑습니다, ${answer}');
  rl.close();
})
```
<br>