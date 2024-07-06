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
    const newNode = new LinkedListNode(value, this.head);
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
<br>

```
append(value) {
  // 새로운 노드를 생성한다.
  const newNode = new LinkedListNode(value)

  // head가 없으면 생성한 노드로 head, tail을 할당한다.
  if(!this.head) {
    this.head = newNode;
    this.tail = newNode;

    return this
  }

  // tail의 다음 값(null)을 새 노드로 할당한다.
  // tail의 값을 새 노드로 할당한다. 
  this.tail.next = newNode;
  this.tail = newNode;

  return this;
}
``` 
<br>

```
insert(value, rawindex) {
  const index = rawIndex < 0 ? 0 : rawIndex;
  if(index === 0) {
    this.prepend(value);
  } else {
    let count = 1;
    let currentNode = this.head;
    const newNode = new LinkedListNode(value);
    while (currentNode) {
      if(count === index) break;
      currentNode = currentNode.next;
      count += 1;
    }
    if (currentNode) {
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        this.head = newNode;
        this.tail = newNode;
      }
    }
  }
  return this;
}
```
<br>

```
delete(value) {
  if(!this.head) {
    return null;
  }

  let deleteNode = null;

  while(this.head && this.compare.equal(this.head.value, value)) {
    deleteNode = this.head;
    this.head = this.head.next;
  }

  let currentNode = this.head;

  if(currentNode !== null) {
    while(currentNode.next) {
      if(this.compare.equal(currentNode.next.value, value)) {
        deleteNode = currentNode.next;
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next
      }
    }
  }

  if(ths.compare.equal(this.tail.value, value)) {
    this.tail = currentNode;
  }

  return deleteNode
}
```
<br>

```
find({ value = undefined, callback = undefined }) {
  if(!this.head) {
    return null;
  }

  let currentNode = this.head;

  while (currentNode) {
    if(callback && callback(currentNode.value)) {
      return currentNode;
    }

    if(value !== undefined && this.compare.equal(currentNode.value, value)) {
      return currentNode;
    }

    currentNode = currentNode.next;
  }

  return null;
}
```
<br>

```
deleteTail() {
  const deletedTail = this.tail;

  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;

    return deletedTail;
  }

  let currentNode = this.head;
  while (currentNode.next) {
    if (!currentNode.next.next) {
      currentNode.next = null;
    } else {
      currentNode = currentNode.next;
    }
  }
  this.tail = currentNode;

  return deletedTail;
}
```

