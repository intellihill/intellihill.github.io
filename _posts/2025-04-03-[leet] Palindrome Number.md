---
layout: post
tag: leet
---
***

# Palindrome Number 
- Given an integer x, return true if x is a palindrome, and false otherwise.

# Follow up
- Could you solve it without converting the integer to a string?

## Javascript
<br>

```
var isPalindrome = function(num) {
    let reversed = 0;
    let x = num;
    while(num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return x == reversed;
};
```
<br>

마지막 나머지를 구해서 나머지를 한자리씩 올려주는 로직



