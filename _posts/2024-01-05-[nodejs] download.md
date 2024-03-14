---
layout: post
tag: nodejs
---
***
<br>
[sourcecode](https://github.com/nodejs/node/blob/v21.5.0/lib/fs.js)  
<br>

## DB data 경로에 저장하기

<!-- ### 이슈 
- 회원 전체 다운로드를 할 경우 서버가 다운된다...(-_-)
- 다운로드 된 데이타가 DB상의 데이타와 다르다.

### 문제 파악
- 우리쪽DB와 통합DB가 따로따로 회원관리가 들어간다.
- 회원가입 탈퇴 등이 양방향이 아닌 단방향으로 응답에 대한 처리가 존재하지 않는다.
- 통합DB로의 전체회원 API가 존재하지 않는다.
- 필요한 데이타가 각각 다른 DB에 분리되어있고 분리 된 Data를 가지고오려면 또 상대편 DB에서 조회해야함

### 로직 문제
- 엑셀다운로드에 대한 로직처리를 회원조회와 함께 쓰고있다.
- 우리쪽 DB의 전체 회원데이타의 Seq를 리스트화해서 통합 DB에 리스트로 조회한다.
  - 1망명의 회원이면 1만개의 리스트로 조회를 시도함..
- 1만명의 Seq 리스트로 조회한 결과값에서 각각 아이에 대한 정보를 또 통합DB에 조회를 한다.
 -->
<br>
```
const currentData = yesterdayStart.subtract(1, 'day').format('YYYYMMDD')
const folderPath = path.join(baseDirectory, yesterdayStart.format('YYYYMM'))

if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath)
} else {
  console.log("Test")
}

const pathTest = path.join(folderPath, `${currentData}.json`)

fs.writeFile(pathTest, JSON.stringify(modifiedData), (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('파일 쓰기 완료');
    // 권한 부여(777)
    fs.chmod(pathTest, 0o777, (chmodErr) => {
      if (chmodErr) {
        console.error(chmodErr);
      } else {
        console.log('chmod 성공');
      }
    });
  }
});
```
<br>


