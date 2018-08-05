/* Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only 
two divisors, one and itself. For example, 2 is a prime number because 
it's only divisible by one and two.

The provided number may not be a prime.
 */

function sumPrimes(num) {

    var notPrime = [];
    var notPrimeDeDuped = [];
    var primes = [];

    arr = [];

    for (let i = 2; i <= num; i++) {
        arr.push(i);
    }

    var extractNonPrimes = function(arr) {
       for (let i = 0; i < arr.length; i++) {
           for (let j = 0; j < arr.length && arr[j] < arr[i]; j++) {
                if (arr[i] % arr[j] === 0) {
                    notPrime.push(arr[i]);
                }
            }
        }
    }

    extractNonPrimes(arr);

    var deduped = notPrime.filter(function(item, index) {
        return notPrime[index] !== notPrime[index + 1];
    });


    arr.forEach(function(number, index) {

        var bool = deduped.some(function(number2, index2) {
            return number2 === number;
        });

        if (bool === false) {
            primes.push(arr[index]);
        }
        
    });


    var sum = primes.reduce(function(acc, value) {
        return acc + value;
    });


    return sum;
  }


console.log(sumPrimes(10)); //should return 17.
console.log(sumPrimes(977)); //should return 73156.