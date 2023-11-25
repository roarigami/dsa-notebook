//49. Group Anagrams 
//Difficulty: Medium 

//Tip: Two strings are anagrams if we sort them and get equivalent substrings 

let groupAnagrams = function(strs) {
    let res = {};

    for(wrd of strs) {
         let refined = wrd.split("").sort().join("");
    if (res[refined]) {
      res[refined].push(wrd);
    } else {
      res[refined] = [wrd];
    }
  }

return Object.values(res);

};
