//217. Contains Dupolicate 
//Difficulty: Easy 

let containsDuplicate = function(nums) {
    hashset = new Set();
    numSize = nums.length;

    for(let i = 0; i <= numSize; i++) {
        if(hashset.has(nums[i])){
            return true;
        }
        hashset.add(nums[i]);
    }

    return false;
};