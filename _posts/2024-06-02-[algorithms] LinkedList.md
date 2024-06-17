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
<br>

```
export default class LinkedList {
  constructor(comparaorFunction) {
    this.head = null;
    this.tail = null;

    this.compare = new Comparator(comparatorFunction)
  }

  prepend(value) {
    // 새로운 노드를 생성하고, 현재 head를 next로 설정한다.
    const newNode = new LinkedLisNode(value, this.head);
    // head에 newNode를 할당한다.
    this.head = newNode;

    // tail이 없다면, tail에 newNode를 할당한다.
    if(!this.tail) {
      this.tail = newNode;
    }
    // 현재 인스턴스를 반환하여 method chaining
    return this;
  }
}
```