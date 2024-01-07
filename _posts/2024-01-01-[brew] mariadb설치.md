---
layout: post
tag: brew
---
***
<br>
# 설치 하기

terminal command
```
brew install mariadb@10.6
```
brew install  
<br>
terminal command
```
echo 'export PATH="/opt/homebrew/opt/mariadb@10.6/bin:$PATH"' >> ~/.zshrc
```
setting the PATH variable
<br>
macOS brew로mariaDB를 설치했을 경우에는 
brew services [명령어]로 실행한다.
<br>
<br>
terminal command
```
brew services list
```
brew로 설치한 service 목록을 볼 수 있다.
<br>
<br>
terminal command
```
brew services start mariadb@10.6
brew services stop mariadb@10.6
```
mariadb 명령어를 실행하면 로컬에서 시작/정지를 할 수 있다.

