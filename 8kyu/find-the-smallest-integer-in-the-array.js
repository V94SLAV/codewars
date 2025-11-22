// Given an array of integers your solution should find the smallest integer.
//For example:
//Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// SOLUTION:
function findSmallestInt(arr) {
    let lowInt = arr[0]
    for (let i = 0; i < arr.length; ++i){
        if (arr[i] < lowInt){
            lowInt = arr[i]
        }
    }
    return lowInt;
}

console.log(findSmallestInt([78,56,232,412,228]))