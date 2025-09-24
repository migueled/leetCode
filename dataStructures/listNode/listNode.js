// Definición de un nodo de lista
class ListNode {
  constructor(value) {
    this.value = value;   // dato del nodo
    this.next = null;     // referencia al siguiente nodo
  }
}

// Crear nodos manualmente
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);
const node6 = new ListNode(6);
const node7 = new ListNode(7);
const node8 = new ListNode(8);
const node9 = new ListNode(9);
const node10 = new ListNode(10);

// Enlazar nodos
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node9;
node9.next = node10;

// Ahora node1 → node2 → node3 ..
console.log(node1); 

//recorrer el listnode
let current = node1;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}