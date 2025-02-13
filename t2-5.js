
function getNumbersBetween(num1, num2) {

    num1 = Number(num1);
    num2 = Number(num2);

    if (isNaN(num1) || isNaN(num2)) {
        return "Invalid input! Please enter valid numbers.";
    }


    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);


    let primes = [];
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
            
        }
        
        return true;
    }


    for (let i = start + 1; i < end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;

}

let num1 = prompt("Please enter the first number:");
let num2 = prompt("Please enter the second number:");
alert(getNumbersBetween(num1, num2));