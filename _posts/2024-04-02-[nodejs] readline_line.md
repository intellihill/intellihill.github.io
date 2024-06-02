---
layout: post
tag: nodejs
---
***

[출처](https://nodejs.org/docs/latest/api/readline.html)

# readline

## Class: InterfaceConstructor

### Event: 'line'

- The 'line' event is emitted whenever the input stream receives an end-of-line input (\n, \r, or \r\n). 

```
const readline = require('readline');

// readline 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 'line' 이벤트 리스너 등록
rl.on('line', (input) => {
  console.log(`입력받은 내용: ${input}`);
  
  // 'exit' 입력 시 프로그램 종료
  if (input.trim() === 'exit') {
    rl.close();
  }
});

// 'close' 이벤트 리스너 등록 (프로그램 종료 시 메시지 출력)
rl.on('close', () => {
  console.log('프로그램을 종료합니다.');
  process.exit(0);
});

console.log('입력해주세요 (종료하려면 "exit" 입력):');
```
<br>