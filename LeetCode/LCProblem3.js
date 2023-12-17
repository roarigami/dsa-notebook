//128. Longest Consecutive Sequence 
//Incomplete

const longestConsecutive = (nums) => {
    let numSet = new Set(nums);
    let nsLength = numSet.length;
    longest = 0;

    for(let i = 0; i < nums.length; i++) {

        if(!numSet.has(i - 1)) {
            length = 0;
            while(numSet.has(i + length)) {
                ++length;
            }
            longest = Math.max(length, longest);
        }
    }

    return longest;

};