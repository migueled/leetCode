// Definición de un nodo
class ListNode {
  constructor(value) {
    this.value = value; // dato que guarda el nodo
    this.next = null;   // referencia al siguiente nodo
  }
}

// Definición de la Linked List
class LinkedList {
  constructor() {
    this.head = null; // primer nodo (cabeza)
    this.size = 0;    // tamaño de la lista
  }

  // Agregar al final
  append(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Agregar al inicio
  prepend(value) {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // Buscar un valor
  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    return null;
  }

  // Eliminar un nodo por valor
  remove(value) {
    if (!this.head) return null;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      this.size--;
    }
  }

  // Imprimir lista
  print() {
    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
}

module.exports = LinkedList;