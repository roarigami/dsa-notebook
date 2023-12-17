//My Solution 
function findNextSquare(sq) {
    // Return the perfect square if sq is a perfect square, -1 otherwise 
    let sq1 = Math.sqrt(sq);
    if(sq1 % 1 === 0) {
        sq1 += 1;
        //sq++
        return sq1 * sq1;
    }
    return -1;
    
}