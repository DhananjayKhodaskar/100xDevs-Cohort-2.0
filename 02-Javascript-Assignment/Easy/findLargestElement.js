/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largest = -Infinity;

    for (i = 0; i < numbers.length ; i+=1){
        if (numbers[i] > largest){
            largest = numbers[i]
        }
    }
    return  largest != -Infinity ? largest : undefined

}

module.exports = findLargestElement;