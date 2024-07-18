const exampleArr = [5, 3, 8, 4, 2, 1, 9, 7, 6]

const insertionSort = (array) => {
  const length = array.length
    for (let i = 0; i < array.length; i++) {
        if(array[i] < array[0]) { // if the current number is less than the first number
            const tempArray = array.splice(i,1)
            console.log('tempArray', tempArray) 
            const temp = tempArray[0] 
            console.log('temp', temp)
            array.unshift(temp) 
            console.log('array', array)
        } else {  // 
            for(let j = 1; j < i; j++) {
                if(array[i] > array[j-1] && array[i] < array[j]) {
                    array.splice(j,0,array.splice(i,1)[0])
                }
            }
        }
    }
}

insertionSort(exampleArr)

console.log(exampleArr)