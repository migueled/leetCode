const LinkedList = require("./linkedList");
const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.prepend(5);

console.log("Lista actual:");
list.print();

console.log("Buscar 20:", list.find(20));

list.remove(10);
console.log("Después de eliminar 10:");
list.print();