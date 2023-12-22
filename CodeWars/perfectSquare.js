//Check if number is a perfect square 
//Super simple 


//Longer solution 
function isSquare(n) {
    if(n >= 0) {
        let ans = Math.sqrt(n);
        if(ans - Math.floor(ans) !== 0 ) {
          return false;
        }
        return ((ans * ans) == n);
      }
      return false; // fix me
}


//Short solution 
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}