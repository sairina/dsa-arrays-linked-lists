/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    //if the LL is empty, set head and tail to point to newNode
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      //else set the tail to point to newNode and set tail to be newNode
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    //with newNode, set its 'next' to the current head
    newNode.next = this.head;
    //then set new head to be newNode
    this.head = newNode;

    if (this.tail === null) this.tail = newNode;

    this.length++;
    return this;
  }

  /** pop(): return & remove last item. */

  pop() {
    let current = this.head;
    let newTail = current;

    //if no nodes, return udnefined
    if (!this.head) return undefined;

    //loop through list until we reach the end
    while (current.next) {
      newTail = current; //newTail is always lagging
      current = current.next;
    }

    //when we reach the end, set tail to newTail to sever ties with old tail
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    //special case where there is one node
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    let removed = this.head.val;
    let current = this.head;

    //if no nodes, return undefined
    if (!this.head) return undefined;

    //set head property to be current head's next property
    this.head = current.next;

    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return removed;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    //if index is less than zero or greater than or equal to length of list, return null
    if (idx < 0 || idx >= this.length) return null;

    let counter = 0;
    let current = this.head;

    //loop through list until you reach index and return node at the specific index (counter)
    while (counter !== idx) {
      current = current.next;
      counter++;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

    //basically calls getAt, but without the value
    if (idx < 0 || idx >= this.length) return null;

    let current = this.head;
    let counter = 0;

    while (counter !== idx) {
      current = current.next;
      counter++;
    }
    current.val = val;
    return true;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) throw new Error('index is invalid');

    let newNode = new Node(val);

    if (idx === this.length) return this.push(val);

    if (idx === 0) {
      return this.unshift(val);
    } else {
      if (idx < 0 || idx >= this.length) return null;

      let current = this.head;
      let counter = 0;
      let previousIdx = idx - 1;

      while (counter !== previousIdx) {
        current = current.next;
        counter++;
      }

      let temp = current.next;
      current.next = newNode;
      newNode.next = temp;
      this.length++;
      return;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx > this.length) throw new Error('index is invalid');

   
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;
    let total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }
    return total / this.length;
  }
}

module.exports = LinkedList;
