/* Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only 
two divisors, one and itself. For example, 2 is a prime number because 
it's only divisible by one and two.

The provided number may not be a prime.
 */

function sumPrimes(num) {

    var factors = [];
    var notPrimeDeDuped = [];
    var primes = [];

    arr = [];

    // Add all numbers less the num to an array to find the factors
    for (let i = 2; i <= num; i++) {
        arr.push(i);
    }

    // Find the factors add add them to an array called factors
    var findFactors = function(arr, factors) {
       for (let i = 0; i < arr.length; i++) {
           for (let j = 0; j < arr.length && arr[j] < arr[i]; j++) {
                if (arr[i] % arr[j] === 0) {
                    factors.push(arr[i]);
                }
            }
        }
    }

    findFactors(arr, factors);
    console.log(factors);
    // Remove the duplicate factors and store them in a variable called dedupedFactors
    var removeDuplicates = function(arr) {
        return arr.filter(function(item, index) {
            return arr[index] !== arr[index + 1];
        });
    }

    var dedupedFactors = removeDuplicates(factors);


    // Remove the factors from the array of numbers less than num and add them to an array called primes
        
        function addPrimes(arr, factors, primeArr) {

            arr.forEach(function(number, index) {

                var bool = factors.some(function(number2, index2) {
                    return number2 === number;
                });
    
                if (bool === false) {
                    primeArr.push(arr[index]);
                }
            });
        }

        addPrimes(arr, dedupedFactors, primes);
        

    //Add all of the prime numbers in the array
    var sum = primes.reduce(function(acc, value) {
        return acc + value;
    });


    return sum;
  }


console.log(sumPrimes(10)); //should return 17.
console.log(sumPrimes(977)); //should return 73156.