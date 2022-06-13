class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // inster first node
  insertHead(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert Last
  insertLast(data) {
    let node = new Node(data);

    if (!this.head) this.head = node;

    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.size++;
  }

  // Insert at index

  // Get at index

  // Print all data
  printData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new Linkedlist();
ll.insertHead(100);
ll.insertHead(300);
ll.insertHead(500);
ll.insertLast(700);

ll.printData();

console.log(ll.size);
