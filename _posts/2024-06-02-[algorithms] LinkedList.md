---
layout: post
tag: algorithms
---
***

# javascript-algorithms git 
[알고리즘 공부를위한 git](https://github.com/trekhleb/javascript-algorithms.git)

## LinkedList

- LinkedList is a linear collection of data elements.
- each element points to the next.
<br>

### Source
<br>

```
export default class LinkedListNode {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
```