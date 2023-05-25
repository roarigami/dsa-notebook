class Node { 

    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null; 
    }
    
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c; 
b.left = d;
b.right = e;
c.right = f;




//Depth first traversal (implemented with stacks)

//iterative solution 
const depthFirstValues = (root) => {

    const stack  = [ root ];

    while(stack.length > 0) {
        const current = stack.pop();
        console.log(current.val);

        if (current.right) stack.push(current.right); 
        if (current.left) stack.push(current.left);

    }

};

//Recursive solution
const depthFirstValues = (root) => {
    if(root == null) return [];
    const leftValues = depthFirstValues(root.left);
    const rightValues = depthFirstValues(root.right);
    return [ root.val ... leftValues, ... rightValues ] 
};



//Breadth first traversal (implemnted with queues)


//Iterative solution 
const breadthFirstValues = (root) => {
    if(root == null) return [];

    const values = [];
    const queue = [ root ];

    while(queue.length > 0) {
        const current = queue.shift();
        values.push(current.val);

        if(cuurent.left != null) queue.push(current.left);
        if(cuurent.right != null) queue.push(current.right);
    }

    return values;
};




//Tree Includes 

//Iterative breadth first solution 
const treeIncludes() = (root, target) => {

    if(root == null) return false;

    const queue = [ root ];
    while(queue.length > 0) {
        if(current.val == target) {
            return true;
        }

        if(cuurent.left) queue.push(current.left);
        if(cuurent.right) queue.push(current.right);
    }

    return false;

};


//Recursive Depth first
const treeIncludes() = (root, target) => {
    if(root == null) return false;
    if(root.val == target) return true;
    return treeIncludes(root.left, target) || treeIncludes(root.right, target); 
};



//Tree Sum 

//Breadth first Iterative
const treeSum = (root) => {
    if(root == null) return 0;
    let sumTotal = 0; 

    const queue = [ root ];
    while(queue.length > 0) {
        const current = queue.shift();
        sumTotal += current.val; 
        if(current.left != null) queue.push(current.left);
        if(current.right != null) queue.push(current.right);
    }
    return sumTotal;
};

//Depth First Recursive
const treeSum = (root) => {
    if(root == null) return 0;
    return root.val + treeSum(root.left) + treeSum(root.right);
};