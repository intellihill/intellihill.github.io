---
layout: post
tag: git
---
***
<br>

brew를 통하여 DB를 설치하고 실행시킨 후   
DBeaber와 연동하려고 했을 때 Local Client에 아무것도 안뜨는 경우가 있다.

![title](/assets/images/DBeaverConnect.png){: width="100%" height="100%"}

위의 스크린샷 처럼 Local Clent의 경로가 설정되어있지 않은 경우에는 
Path를 따로 설정해주면된다.  

하지만 파일찾기로 Homebrew안의 설치 경로의 bin폴더를 설정하려고해도 Finder에서는
기본적으로 root directory에 접근이 불가능하다.  

finder에서  
```
// finder에서 경로를 입력할 수 있도록 창을 띄움
shift + command + g 
```
<br>
![title](/assets/images/finder경로찾기.png){: width="100%" height="100%"}  
```
// 경로를 찾은다음에

/opt/homebrew/opt/mariadb@10.6/bin
finder에서 "shift + command + g" 단축키를 누르면
경로를 입력할 수 있다
```
<br>
이렇게하면 데이터베이스 홈을 설정할 수 있다