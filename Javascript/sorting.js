//Bubble sort 



const bubbleSort = (array) => {
    let arrLength = array.length;
    for(let i = 0; i < arrLength; i++) {
        for(let j = 0; j < arrLength; j++){
            if(array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

}
let arr = [84,12,65,43,29,94,82,53,4];
bubbleSort(arr);

console.log(arr);