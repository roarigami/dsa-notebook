//Linked list algorithms
class Node { 

    constructor(val) {
        this.val = val;
        this.next = null;
    }
    
}


const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

//algorithm to traverse through the linked list and print out every node
//iterative 
// const printLinkedList = (head) => {
//     let current = head;
//     while(current != null) {
//         console.log(current.val);
//         current = current.next;
//     }
// };

//recursive 
// const printLinkedList = (head) => {
//     if(head == null) return;
//     console.log(head.val);
//     printLinkedList(head.next);

// };

// printLinkedList(a);


//Linked List Values 
//Iterative 
const linkedListValues = (head) => {
    const values = [];
    let current = head; 
    while(current != null) {
         values.push(current.val);
        current = current.next;
    }
    return values;
};


//Recursive 
const linkedListValues = (head) => {
    const values = [];
    fillValues(head, values); 
    return values;
};

//Helper function we are using for recursive call
const fillValues = (head, values) => {
    if(head == null) return;
    values.push(head.val); 
    fillValues(head.next, values);
}



//Sum List Problem 

//Iterative solution
const sumList = (head) => {
    let sum = 0;
    let current = head;

    while(current != null) {

        sum += current.val;
        current = current.next;
    }

    return sum;
}


//Recursive solution 
const sumList = (head) => {
    if(head == null) return 0;
    return head.val + sumList(head.next)
}