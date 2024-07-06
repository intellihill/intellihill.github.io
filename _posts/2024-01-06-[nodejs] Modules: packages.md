---
layout: post
tag: nodejs
---
***
<br>
[출처:노드공홈](https://nodejs.org/docs/latest/api/packages.html)
<br>

# Modules: Packages
<br>
## Introduction
 javascript algorithms의 소스를 구현하여 흐름과 내용을 
 파악하기위해서 VScode에서 Debugging을 찍어야 했다.

 Javascript로 LinkedList의 소스를 구현하는고 
 node로 JS파일을 실행하니 error메시지가 떳다.

 그 이유는 Javascript모듈 시스템은 CommonJS(CSM)와 ECMAScript(ESM) 모듈  
 두 방식으로 모둘을 정의하고 가지고오고 있는 것 이었다.

 그렇기 때문에 어떤 모듈을 사용하는지 명시적으로 설정을 해줘야하고
 그 방식 두가지를 소개하겠다.
 Node.js has two systems for resolving a specifier and loading modules.

## Determining module
<br>
### ECMAScript
 - import, export를 이용한 Module
 - Files with an .mjs extension
 - Files with a .js extension when the nearest parent package.json file contains atop-level "type" field with a value of "module".
<br>
### CommonJS
 - require를 이용한 Module
 - Files with a .cjs extension.
 - Files with a .js extension when the nearest parent package.json file contains a top-level field "type" with a value of "commonjs"

## resolving
 두가지 모듈 방식은 각자의 특성이 있다.(자세한 내용은 공식 홈페이지 참조)
 rootdirectory에서 package.json을 생성한 후
<br>

```
{
  "type": "module"
}
```
<br>
VScode에서 debugging을 하기 위해선 node.js의 configuration 말고도
VSCode의 configuration도 필요하다.

.vscode 파일 안의 launch.json에서 디버깅 대상을 잡아주면 된다.
자세한건 vscode에서 설명하겠다.

