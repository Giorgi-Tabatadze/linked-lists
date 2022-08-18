const Node = function (value = null) {
  const next = null;

  return { value, next };
};

const LinkedList = function () {
  const head = null;
  let size = 0;

  const append = function (value) {
    if (this.head === null) {
      this.head = Node(value);
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = Node(value);
    }
    this.size = this.size + 1;
  };

  const prepend = function (value) {
    if (this.head === null) {
      this.head = Node(value);
    } else {
      let oldHead = this.head;
      this.head = Node(value);
      this.head.next = oldHead;
    }
    this.size = this.size + 1;
  };

  const tail = function () {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };
  const atIndex = function (index) {
    let nodeIndex = 0;
    let currentNode = this.head;
    while (nodeIndex !== index) {
      if (!currentNode.next) {
        return "list does not contain any value at selected index";
      }
      currentNode = currentNode.next;
      nodeIndex += 1;
    }
    return currentNode;
  };

  const pop = function () {
    if (this.head === null) {
      return "cannot perform pop on empty list";
    }
    if (this.head.next === null) {
      this.head = null;
    }
    let currentNode = this.head;
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
  };
  const contains = function (value) {
    if (this.head === null) {
      return false;
    }
    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  const find = function (value) {
    let nodeIndex = 0;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (currentNode.value === value) {
        return nodeIndex;
      }
      currentNode = currentNode.next;
      nodeIndex += 1;
    }
    return null;
  };

  const toString = function () {
    let currentNode = this.head;
    let string = "";
    while (currentNode.next !== null) {
      string = string + `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }
    string = string + `( ${currentNode.value} ) -> ` + null;

    return string;
  };

  const insertAt = function (value, index) {
    index = Number(index);
    const nodeToInsert = Node(value);
    let nodeIndex = 0;
    let currentNode = this.head;
    while (index - nodeIndex !== 1) {
      if (!currentNode.next) {
        return "list does not contain any value at selected index";
      }
      currentNode = currentNode.next;
      nodeIndex += 1;
    }
    const nodeToMove = currentNode.next;
    currentNode.next = nodeToInsert;
    nodeToInsert.next = nodeToMove;
  };

  const remove = function (index) {
    index = Number(index);
    let nodeIndex = 0;
    let currentNode = this.head;
    while (index - nodeIndex !== 1) {
      if (!currentNode.next) {
        return "list does not contain any value at selected index";
      }
      currentNode = currentNode.next;
      nodeIndex += 1;
    }
    if (currentNode.next === null) {
      return "list does not contain any value at selected index";
    }
    currentNode.next = currentNode.next.next;
  };

  return {
    head,
    size,
    append,
    prepend,
    tail,
    atIndex,
    pop,
    contains,
    find,
    toString,
    insertAt,
    remove,
  };
};

const list = LinkedList();

list.append("gela");

list.append("vaja");

list.append("2342");
list.prepend("hello");
list.pop();

console.log(list.head);
console.log(list.tail());
console.log(list.atIndex(1));
console.log(list.contains("gela"));
console.log(list.find("gela"));
console.log(list.toString());
list.insertAt("jasmin", 2);
console.log(list.toString());
list.remove(1);
console.log(list.toString());
