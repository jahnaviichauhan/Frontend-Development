function generateFibonacciSeries(n) {
  let fibonacciSeries = [];
  
  if (n >= 1) {
    fibonacciSeries.push(0);
  }
  if (n >= 2) {
    fibonacciSeries.push(1);
  }

  for (let i = 2; i < n; i++) {
    const nextFibonacci = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    fibonacciSeries.push(nextFibonacci);
  }

  return fibonacciSeries;
}

// Example: Generate the Fibonacci series up to the first 10 terms
const n = 10;
const fibonacciSeries = generateFibonacciSeries(n);
console.log(fibonacciSeries); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
