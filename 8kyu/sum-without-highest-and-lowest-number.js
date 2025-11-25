// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index!).
//
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
//
//     Mind the input validation.
//
//     Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
// Solution:
function sumArray(array) {

    if (array === null){
       array = 0}

    let lowNum = array[0]
    for (let i = 0; i < array.length; ++i){
        if (array[i] < lowNum){
            lowNum = array[i]
        }
    }

    let highNum = array[0]
    for (let i = 0; i < array.length; ++i){
        if (array[i] > highNum){
            highNum = array[i]
        }
    }

    total = 0
    for (let i = 0; i < array.length; i++){
        total += array[i];
    }
    if (highNum === lowNum) {
        return 0
    }else {
        return total - highNum - lowNum
    }
}


