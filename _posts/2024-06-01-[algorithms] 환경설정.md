---
layout: post
tag: algorithms
---
***

# javascript-algorithms git 
[알고리즘 공부를위한 git](https://github.com/trekhleb/javascript-algorithms.git)

- 위의 링크로 git clone 후 원하는 알고리즘을 분석한다.
- 이미 만들어져있는 알고리즘에 __test__ 폴더에 있는 test케이스를 jest를 통해 debugging할 수 있다.
<br>

```
$ npm test -- '테스트케이스이름'
```

- 명령어가 실행되는데 문제는 없지만 eslint에 의해 실행된 테스트 소스가 빨강줄이 쫙쫙 그어진다

```
// error 내용
Expected linebreaks to be 'LF' but 'CRLF',eslintlinebreak-style
```
<br>

- 해당 이슈를 해결하기 위해서느 root폴더에 .eslintrc 파일에서

하단의 옵션을 추가해주면 된다.
<br>
```
"rules": {
  "linebreak-style": 0
}
```