---
layout: post
tag: brew
---
***
<br>
# [설치 하기](https://formulae.brew.sh/formula/nvm#default)
NVM은 Node.js의 버전을 관리하는 라이브러리이다.
<br>
<br>
```
// nvm install
brew install nvm
```
<br>
```
// node 최신버전 설치
nvm install node

// lts 최신버전 설치
nvm install --lts
```
<br>
```
// 설치된 Node.js 목록 확인하기
nvm ls

// 설치할 수 있는 모든 node 버전 조회(너무 많이 나옴)
nvm ls-remote
```
<br>
```
// 특정 node version 사용하기
nvm use <version>

// 현재 사용중인 버전 확인하기
nvm current

// 필요없는 Node version 삭제하기
nvm uninstall <version>
```
<br>
```
// 설치되어 있는 가장 최신버전의 node를 디폴트로 사용하기
nvm alias defauilt node
```
<br>
`nvm ls` 명령어를 입력하면 밑의 내용이 출력된다.  
밑의 내용은 해당 버전에 명명된 이름이다.
<br>
```
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.24.1 (-> N/A)
lts/erbium -> v12.22.12 (-> N/A)
lts/fermium -> v14.21.3 (-> N/A)
lts/gallium -> v16.20.2 (-> N/A)
lts/hydrogen -> v18.19.0 (-> N/A)
```
<br>
밑의 명령어로 명명된 이름 버전을 설치할 수 있다.  
<br>
```
nvm install lts/boron
```

