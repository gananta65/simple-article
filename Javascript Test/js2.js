/**
 * Direction:
 * - combine the data between numbersOne and numberTwo and get the deleted data between originalData and the result of merge
 * - divide the data between total value of numbersOne and numbersTwo that already merge, and total value of deletedData
 *
 * Expected Result:
 * 2.21
 */

let originalData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let numbersOne = [3, 4, 5, 7, 9];
let numbersTwo = [1, 2, 3, 5, 9]

function result(originalData, numbersOne, numbersTwo) {
    mergedNumbers = [...new Set([...numbersOne ,...numbersTwo])]; // [1,2,3,4,5,7,9]
    for(let i = 0; i < mergedNumbers.length; i++){ 
       for(let j = 0; j<originalData.length;j++){
           if(mergedNumbers[i] == originalData[j]){
               originalData.splice(j, 1); // [6,8,10]
           }
        }
    }
    sumDeletedData = originalData.reduce((a, b) => a + b, 0)
    sumMergedNumbers = mergedNumbers.reduce((a,b) => a + b, 0)
    return sumMergedNumbers/sumDeletedData // 1.2916
}


console.log(result(originalData, numbersOne, numbersTwo));