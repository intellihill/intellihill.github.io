---
layout: post
tag: nodejs
---
***
<br>
[sourcecode](https://github.com/nodejs/node/blob/v21.5.0/lib/fs.js)  
[출처:노드공홈](https://nodejs.org/api/fs.html)
<br>

To use the callback and sync API
```
const fs = require('fs'); 
```
<br>
To make diretory
```
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath)
} else {
  console.log("success to make directory")
}
```
<br>

To make json file
```
fs.writeFile(pathTest, JSON.stringify(modifiedData), (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('success to make json');
    // 권한 부여(777)
    fs.chmod(pathTest, 0o777, (chmodErr) => {
      if (chmodErr) {
        console.error(chmodErr);
      } else {
        console.log('success to chmod');
      }
    });
  }
});
```


<!-- todo  
실시간 회원 엑셀 다운로드를 하기를 원하고있다.  
현재는 처음에 cms에서 회원 조회를 가면 조회되는 기본 전체 데이타를 그대로 가지고오고있다.
처음에 우리쪽 DB에 회원 조회를 하고, 두번째로 그 회원의 리스트를 뽑아서
통합 DB에 리스트로 API requset 회원 조회를 한다. 
여기서 리스트에 포함되어있지만 return되지 않는 회원 데이타는 탈퇴한 회원으로 간주된다.
정보는 우리쪽 DB와 통합 DB를 섞어줘야한다.  
그리고 가지고온 회원 정보로 또 아이들 정보를 따로 통합 DB에 request하고있다.
회원수가 1만명이라고하면 1만명 * 아이들 수 만큼 다시 따로 요청을 보내고있는 것이다.
일단 첫번째로 여기서 1차 문제가 생기고있고
우리쪽 DB에서(우리가 구조를 만든게 아닌...) 최근 로그인을 mysql에 쌓아놓고있는데
최신 로그인을 구하기위하여 100만건이 넘는 정보를 모두 조회해서 최근 로그인을 조회하고있는게 문제이다.


이 문제를 해겷기 위하여
회원 조회 기능과 엑셀 다운로드 기능을 따로 분리하였다.
그리고 prisma를 이용하여 상속관계를 가지고오던 기능을 제거하고
통 query로 엑셀용 쿼리를 새롭게 짯다.
그리고 엑셀 다운로드기능을 실행할때마다 조회를 하는것이 아닌 매일 batch를 돌려
전날 24시간치의 정보를 json형식으로 리눅스 서버에 저장한 후
데이타를 누적시켜서 전체 회원목록을 가지고올 수 있도록 정리하였다.

통합 DB에 request하고있는 정보는 리스트로 한번에 아이들 정보까지 모두가지고 오도록
정리하였다.



문제점  
1. 테이블 설계가 잘못 되었다.
2. 요구하는 데이타가 너무 많이 분산되어있다.
3. 서버에 너무 부담이되어 request timeout issue가 발생하고있다. -->
