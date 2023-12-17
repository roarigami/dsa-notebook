//Check if number is prime 
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % 1 === 0) return false;
    }
    return num > 1;
    
}