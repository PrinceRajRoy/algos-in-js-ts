class LinkedList {
  constructor(value) {
    this.next = null;
    this.value = value;
    this.head = this;
    this.tail = this;
  }
  add(value) {
    const node = new LinkedList(value);
    this.tail.next = node;
    this.tail = node;
  }
  prepend(value) {
    const node = new LinkedList(value);
    node.next = this.head;
    this.head = node;
  }
  search(value) {
    let n = this.head;
    while (n !== null) {
      if (value === n.value)
        return true;
      n = n.next;
    }
    return false;
  }
  remove(value) {
    let n = this.head;
    while (n !== null) {
      if (n.next !== null && value === n.next.value) {
        n.next = n.next.next;
      }
      n = n.next;
    }
  }
  traverse() {
    let n = this.head;
    while (n !== null) {
      console.log(n.value);
      n = n.next;
    }
  }
}

const list = new LinkedList(10);
list.add(20)
list.add(30)
list.add(40)
list.add(50)
list.traverse();

console.log(list.search(40));

list.prepend(0);
list.traverse();

list.remove(40);
list.traverse();