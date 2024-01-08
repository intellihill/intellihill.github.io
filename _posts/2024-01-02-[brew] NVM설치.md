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
