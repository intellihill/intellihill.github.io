---
layout: post
tag: brew
---
***
<br>
# 설치 하기

```
brew install mariadb@10.6
```
<br>
```
// setting the PATH variable
echo 'export PATH="/opt/homebrew/opt/mariadb@10.6/bin:$PATH"' >> ~/.zshrc
```
<br>
macOS brew로mariaDB를 설치했을 경우에는 
brew services [명령어]로 실행한다.
<br>
```
// brew로 설치한 service 목록을 볼 수 있다.
brew services list
```
<br>
```
// mariadb 명령어를 실행하면 로컬에서 시작/정지를 할 수 있다.
brew services start mariadb@10.6
brew services stop mariadb@10.6
```

