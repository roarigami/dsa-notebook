
//Simple Code to and two integers

const addTwo = (num1, num2) => {
  let sum = num1 + num2;
  return sum;
}

console.log(addTwo(4,3))


//Simple code to check if a number is prime or not 
const isPrime = (num) => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if(num % i === 0) return false;
  }
  return num > 1;
}

console.log(isPrime(7));