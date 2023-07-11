//Longest Substring without repeating characters 

const lengthOfLongestSubstring = (s) => {
    charList = new Set();
    left = 0;
    ans = 0;

    for(let i = 0; i < s.length;i++) {
        while(charList.has(s[i])) {
            charList.delete(s[left]);
            ++left;
        }
        charList.add(s[i]);
        ans = Math.max(ans, i - left + 1)
    }

    return ans;
};