---
layout: post
tag: programmers
---
***

# 카운트 업
<br>

## 문제 설명
정수 start_num와 end_num가 주어질 때, start_num부터 end_num까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

<br>


## 입출력 예
start_num : 3

end_num : 10

result : [3, 4, 5, 6, 7, 8, 9, 10] 

<br>

## 풀이

```
function solution(start_num, end_num) {
    const arr = [];
    
    for (var i = start_num; i <= end_num; i++) {
        arr.push(i);
    }
    return arr
}
```
<br>

