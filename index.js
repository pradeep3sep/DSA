//! Example 1
//* Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be same. Some accepted answer are below
//* same([1,2,3], [4,1,9])  true
//* same([1,2,3], [1,9])  false
//* same([1,2,3], [4,4,1])  false (must be of same frequency)

//solution naive approach
// function same(arr1, arr2){
//     if(arr1.length !== arr2.length) return false
//     for (let i = 0; i < arr1.length; i++) {
//         let element = arr2.indexOf(arr1[i] ** 2);
//         if(element === -1){
//             return false
//         }
//         arr2.splice(arr2.indexOf(arr2[element]),1)
//         // console.log("arr2",arr2)
//     }
//     return true
// }
// console.log(same([1,2,3], [4,1,9]))
