const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const mergeSort = (array) => {
  if (array.length === 1) {return array}

  const length = array.length;
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle) 

  console.log('left', left)
  console.log('right', right)
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

const merge = (left, right) => {
 const results = []
let leftIndex = 0
let rightIndex = 0
while(leftIndex < left.length && rightIndex < right.length) {
  if(left[leftIndex] < right[rightIndex]) {
    results.push(left[leftIndex])
    leftIndex++
  } else {
    results.push(right[rightIndex])
    rightIndex++
  }
}
return results.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const answer = mergeSort(numbers)
console.log('SortedArray', answer)