/* Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only 
two divisors, one and itself. For example, 2 is a prime number because 
it's only divisible by one and two.

The provided number may not be a prime.
 */

function sumPrimes(num) {

    var numbers = [];
    var notPrime = [];

    // Add all numbers from 1 to num in an array
    for (let i = 2; i <= num; i++) {
        numbers.push(i);
    }

 //   console.log(numbers);

    // Find non prime numbers
    var makeNotPrimeArray = function(arr, primeArr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] !== numbers[j] && arr[i] > numbers[j]) {

                    if (arr[i] % arr[j] === 0 && arr[j] !== 1) {
                    primeArr.push(arr[i]);
                    }
                }
            }
        }
    }

    makeNotPrimeArray(numbers, notPrime);
    

    // Remove non primes from  number

    var numbers2 = [...numbers];

    var removeNonPrimes = function(arr, nPrimes) {
        for (let i = 0; i < nPrimes.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (nPrimes[i] === arr[j]) {
                    arr[j] = 0;
                }
            }
        }
    }
    
    removeNonPrimes(numbers2, notPrime);


    // Take the sum of all primes
        var priming = numbers2.reduce(function(acc, currentValue) {
            return acc + currentValue;
        });

    return priming;
    
  }


// console.log(sumPrimes(10)); //should return a number.
console.log(sumPrimes(10)); //should return 17.
console.log(sumPrimes(977)); //should return 73156.
