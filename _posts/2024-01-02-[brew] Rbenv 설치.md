---
layout: post
tag: brew
---
***
<br>
# [설치 하기](https://formulae.brew.sh/formula/rbenv#default)
Rbenv는 Ruby의 버전을 관리하는 라이브러리이다.
<br>
맥의경우 몇가지 기능에서 기존 내장되어있는 ruby를 쓰고있음(system)
<br>
그래서 전역을 바꾸거나하면 꼬일 수 있다
<br>
<br>
```
// rbenv, ruby-build install
brew install rbenv ruby-build
```
<br>
```
// 설치 가능한 ruby version 확인
rbenv install -l
```
<br>
```
// lts 최신버전 설치
rbenv install [version]
```
<br>
```
// 내가 사용하고자 하는 폴더 디렉토리에서 명령어
// 해당 디렉토리에서는 해당 루비 버전을 사용한다
rbenv local [versions]
```
<br>
```
// 사용 가능하고 기본값으로 설정된 루비 버전 확인
rbenv versions
```
<br>

