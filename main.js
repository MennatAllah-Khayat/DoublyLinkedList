const DoublyLinkedList = require('./DoublyLinkedList');


const list = new DoublyLinkedList();
list.push(10);
list.push(20);
list.push(30);

console.log('List after pushing 10, 20, 30:', list);

list.pop();
console.log('List after popping:', list);

list.unshift(0);
console.log('List after unshifting 0:', list);

list.shift();
console.log('List after shifting:', list);

list.set(1, 25);
console.log('List after setting index 1 to 25:', list);

list.insert(1, 15);
console.log('List after inserting 15 at index 1:', list);

list.remove(1);
console.log('List after removing index 1:', list);

console.log('Get value at index 1:', list.get(1));
