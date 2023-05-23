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
    return head.val + sumList(head.next);
}


//Reverse Linked list 

//Iterative
const reverseList = (head) => {
    let prev = null;
    let current = head;
    while(current != null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;

};


//Recursive
const reverseList = (head, prev = null) => {
    if (head == null) return prev;

    const next = head.next;
    head.next = prev;
    reverseList(next, head);
}



//Zipper List 

//Iterative 
//Linear run time and constant space 

const zipperLists = (head1, head2) => {
    let tail = head1;
    let current1 = head1.next; 
    let current2 = head2; 
    let count = 0; 

    while(current1 != null && current2 != null) {
        if(count % 2 == 0) {
            tail.next = current2;
            current2 = current2.next;
        } else {
            tail.next = current1;
            current1 = current1.next;
        }

        tail = tail.next;
        count += 1;
    }

    if (current1 != null) tail.next = current1;
    if (current2 != null) tail.next = current2;


    return head1;
}


//Recursive
const zipperLists = (head1, head2) => {
    if(head1 == null && head2 == null) return null;
    if(head1 == null) return head2;
    if(head2 == null) return head1;

    const next1 = head1.next;
    const next2 = head2.next;
    head1.next = head2; 

    head2.next = zipperLists(next1, next2);


    return head1;
} 