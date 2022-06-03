class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const NEW_NODE = new Node(val);
    if (!this.head) {
      this.head = NEW_NODE;
      this.tail = this.head;
    } else {
      this.tail.next = NEW_NODE;
      this.tail = NEW_NODE;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    //let current = this.head;
    // let newTail = this.head;
    while (this.head.next) {
      this.head = this.head;
      this.head = this.head.next;
    }
    this.tail = this.head;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    // let currentHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return this.head;
  }
  unshift(val) {
    let NEW_NODE = new Node(val);
    if (!this.head) {
      this.head = NEW_NODE;
      this.tail = this.head;
    }
    NEW_NODE.next = this.head;
    this.head = NEW_NODE;
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    // let current = this.head;
    while (counter !== index) {
      this.head = this.head.next;
      counter++;
    }
    return this.head;
  }
  set(index, val) {
    // let foundNode = this.get(index);
    if (this.get(index)) {
      this.get(index).val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let NEW_NODE = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = NEW_NODE;
    NEW_NODE.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let prev = this.get(index - 1);
    // let removed = prev.next;
    prev.next = prev.next.next;
    this.length--;
    return prev.next;
  }
}

var list = new SinglyLinkedList();

list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(512);
//list.remove(1);
//list.insert(1,480);
//list.insert(1,777);
console.log(list.get(1));
//console.log(list)
