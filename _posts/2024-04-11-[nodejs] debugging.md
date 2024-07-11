---
layout: post
tag: nodejs
---
***

[node 공홈 - Package](nodejs.org/docs/latest/api/packages.html)

<br>

## node.js디버깅

class를 import하는 방식에는 ECMAScript 모듈 방식, CommonJS 모듈 방식 두가지가 존재한다

ECMAScript방식은 import로 모듈을 불러오고 CommonJS방식은 require을 통해서 모듈을 불러온다.

ECMAScript방식으로 모듈이 연결된 경우

Node.js command로 JS파일을 실행하고 싶을 때

명시적으로 어떤 방식으로 모듈을 연결할지 알려줘야한다.

import를 이용하는 ECMAScript의 경우에 2가지 방식으로 명시적방법이있다. 

<br>

1.  extension을 ECMAScript : .mjs / CommonJS: .cjs 로 만든다 (import에 포함된 경로또한 .mjs로)
2.  package.json에 type을 설정한다.

<br>

```
// package.json
{
	"type": "module" // ECMAScript 방식
	“type": "commonJS" // CommonJS 방식
}
```
<br>

## VisualCode Debugging

[VisualCode공홈 - debugging](code.visualstudio.com/docs/editor/debugging)

- root directory에 .vscode 폴더가 있다 

<br>

- .vscode 안에 launch.json 파일 안에 configuration을 작성한다.
<br>
	1. 왼쪽 Navigator에서 debug를 선택
	2. Add config
	3. launch.json에 Add Configuration (Node : Attach Process)

<br>

```
{
	"version": "0.2.0",
	"configurations": [
	{
		"name": "Attach by Process ID",
		"processId": "${command:PickProcess}"
		...
		"type": "node"
	},
	{
		"type": "node",
		"request": "launch",
		"name": "test",
		"skipFiles": [
			"<node_internals>/**"
		],
		"program"L: "${workspaceFolder}\\경로\\파일.js"
	}
	]
}
```
<br>

설정 완료되면 위에 설정된 파일.js를 디버깅모드로 실행할 수 있다.


