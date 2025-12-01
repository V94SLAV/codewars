// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
//
// P.S. Each array includes only integer numbers. Output is a number too.

//Solution

function arrayPlusArray(arr1, arr2) {
    let sumArr1 = 0
    let sumArr2 = 0
    for (let i = 0; i < arr1.length; i++) {
        const score_1 =arr1[i]
        sumArr1 += score_1
    }
    for (let i = 0; i < arr2.length; i++) {
        const score_2 =arr2[i]
        sumArr2 += score_2
    }
    return sumArr1 + sumArr2
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]))
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]))
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]))