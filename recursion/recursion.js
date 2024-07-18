// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
if(number == 2) return number
return number * findFactorialRecursive(number-1)
}
// base case number == 1
// iterative case number > 1

function findFactorialIterative(number) {
    let result = 1;
    for(let i = number; i > 0; i--) {
        result *= i;
    }
    return result;
}

// findFactorialIterative(5);

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8


function fibonacciIterative(n){
    let arr = [0,1];
    for (i=2 ; i <= n; i++) {
      arr.push(arr[i-2] + arr[i-1])
    }
    return arr[n]
}


function fibonacciRecursive(n) {
if(n< 2) return n

return fibonacciRecursive(n-2) + fibonacciRecursive(n-1)
}
function reverseStringIterative(str) {
  for(i=0; i<str.length; i++) {
    str = str.charAt(i) + str
  } 
  return str.slice(i, str.length)
}


function reverseStringRecursive(str) {
  if(str == '') return str;
  return reverseStringRecursive(str.substr(1)) + str.charAt(0)
}


console.log(reverseStringRecursive("yoyo master"));