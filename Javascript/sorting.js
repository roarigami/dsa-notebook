//Bubble sort 
const bubbleSort = (array) => {
    let n = array.length;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++){
            if(array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
let arr = [84,12,65,43,29,94,82,53,4];
console.log(bubbleSort(arr));


//Selection Sort 
const selectionSort = (array) => {
    let n = array.length;
    for(let i = 0; i < n; i++){
        let min = i;
        for(let j = i + 1; j < n; j++) {
            if(array[j] < array[min]) {
                min = j;
            }
        }
        if(min != i) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}

let arr2 = [1, 54, 32, 98, 2132, 09, 143, 1627, 735];
console.log(selectionSort(arr2));



//Insertion Sort
const insertionSort = (array) => {
    let n = array.length;
    for(let i = 1; i < n; i++) {
        let current = array[i];
        let j = i - 1;
        while(j > -1 && (current < array[j])) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }

return array;
}

let arr3 = [3, 4343, 9438, 19383, 8437, 1938403, 54, 0];
console.log(insertionSort(arr3));



//Merge sort 

const merge = (left, right) => {
    let arr = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift)
        }
    }
    return [...arr, ...left, ...right];
};

const mergeSort = (array) => {
    const half = array.length / 2;

    if(array.length < 2) {
        return array;
    }

    const left = array.splice(0, half);
    return merge(mergeSort(left), mergeSort(array));
};



let arr4 = [42342434, 7687687, 124234234, 3453, 5675, 2355, 576, 87, 5, 0];
console.log(mergeSort(arr4));


//Quick Sort
const partition = (arr, start, end) => {
    const pivotValue = arr[end];
    let pivotIndex = start;
    for(let i = start; i < end; i++) {
        if(arr[i] < pivotValue) {
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            pivotIndex++;
        }
    }
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    return pivotIndex;
};


//Recursive 
const quickSortRec = (arr, start, end) => {
    if(start >= end) {
        return;
    }

    let index = partition(arr, start, end);

    quickSortRec(arr, start, index - 1);
    quickSortRec(arr, index + 1, end);
};


//Iterative 
const quickSortItr = (arr) => {
    stack = [];

    stack.push(0);
    stack.push(arr.length - 1);

    while(stack[stack.length - 1] >= 0) {
        end = stack.pop();
        start = stack.pop();

        pivotIndex = partition(arr, start, end);

        if(pivotIndex - 1 > start ) {
            stack.push(start);
            stack.push(pivotIndex - 1);
        }

        if(pivotIndex + 1 > end ) {
            stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }
};


let arr5 = [-3442, 46456, -756, 2, 54323243, -1, 156, 0, 1927637, 4637, 83];
//console.log(quickSort(arr5, 0, arr5.length - 1));
console.log(quickSortItr(arr5));