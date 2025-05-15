function fib(n) {
    //===	equal value and equal type
    if (n === 0) return 0; //Base case: Fibonacci(0)
    if (n === 1) return 1; //Base case: Fibonacci(1)

    return fib(n - 1) + fib(n - 2); //Recursive case
}

console.log(fib(1)); //Expected output: 1
console.log(fib(5)); //Expected output: 5
console.log(fib(7)); //Expected output: 13
console.log(fib(10)); //Expected output: 55
