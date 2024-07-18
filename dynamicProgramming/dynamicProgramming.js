function addto90(n) {
  console.log('long time')
  return n + 80
}
function memoizedAddTo80() {
  let cache = {}
  return function (n) {
    if (n in cache) return cache[n]
    console.log('long time')
    cache[n] = n + 80;
    return cache[n]
  }
}

// const memoized = memoizedAddTo80()
// console.log('1',memoized(5))
// console.log('2',memoized(5))

function fibonacciMaster() {
  let cache = {}
  return function fib(n) {
    if (n in cache) {
      console.log('Get memoized!')
      return cache[n]
    } else {
      
      if (n < 2){ 

        return n
      }
      cache[n] = fib(n - 1) + fib(n - 2)
      return cache[n]
    }
  }
}

const fibonacciFun = fibonacciMaster()

console.log(fibonacciFun(5))
console.log(fibonacciFun(12))
console.log(fibonacciFun(15))

const rob = function (nums) {
  const memo = {};
     function helper(index) {
         if (index >= nums.length) return 0;
         if (index in memo) return memo[index];
         const include = nums[index] + helper(index + 2);
         const exclude = helper(index + 1);
         memo[index] = Math.max(include, exclude);
         return memo[index];
     }
     return helper(0);
 };