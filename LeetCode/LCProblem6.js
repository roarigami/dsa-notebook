//22. Generate Parentheses 
// Difficulty: Medium 

const generateParentheses = (n) => {
    const res = [];
    
    function backtrack(stack, openN, closedN) {
      if (openN === n && closedN === n) {
        res.push(stack);
        return;
      }
      if (openN < n) {
        backtrack(stack + "(", openN + 1, closedN);
      }
      if (openN > closedN) {
        backtrack(stack + ")", openN, closedN + 1);
      }
    }

    backtrack("", 0, 0);
    return res;
    
  }
