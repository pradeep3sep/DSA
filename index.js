// Try to make the object because creation of object is much faster then arrays and strings.

//! Example 1
//* Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be same. Some accepted answer are below
//* same([1,2,3], [4,1,9])  true
//* same([1,2,3], [1,9])  false
//* same([1,2,3], [4,4,1])  false (must be of same frequency)

//solution naive approach( O(n^2) because of Array.indexOf makes it nested loop  )
// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(let i = 0; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex === -1) {
//             return false;
//         }
//         console.log(arr2);
//         arr2.splice(correctIndex,1)
//     }
//     return true;
// }
// same([1,2,3,2], [9,1,4,4])

//solution refactored approach approach
// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     let frequencyCounter1 = {}
//     let frequencyCounter2 = {}
//     for(let val of arr1){
//         // console.log(val)
//         // console.log("frequencyCounter1 before",frequencyCounter1,"--",frequencyCounter1[val])
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//         // console.log("frequencyCounter1 after",frequencyCounter1,"--",frequencyCounter1[val])
//     }
//     for(let val of arr2){
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
//     }
//     console.log(frequencyCounter1);
//     console.log(frequencyCounter2);
//     for(let key in frequencyCounter1){
//         // console.log("key",key,"--",key ** 2 in frequencyCounter2)
//         if(!(key ** 2 in frequencyCounter2)){
//             // 'in oprator' jo use hua h object me, its good thing to know returns either true or false
//             return false
//         }
//         if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
//             return false
//         }
//     }
//     return true
// }

// same([1,2,3,2,5], [9,1,4,4,11])

//! Example 2 (Anagrams)
//* Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name forward by rearranging the letters of another, such as cinema, formed from iceman.
//* validAnagram('', '')  true
//* validAnagram('aaz', 'zza')  false
//* validAnagram('anagram', 'nagaram')  true
//* validAnagram('rat', 'car')  false

// function validAnagram(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   }

//   const lookup = {};

//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i];
//     // if letter exists, increment, otherwise set to 1
//     lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
//   }
//   console.log(lookup);

//   for (let i = 0; i < second.length; i++) {
//     let letter = second[i];
//     // can't find letter or letter is zero then it's not an anagram
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }

//   return true;
// }

// // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
// validAnagram("anagrams", "nagaramm");

//! Example 3 (Anagrams)
//* Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
//* sumZero([-3,-2,-1,0,1,2,3])      [-3,3]
//* sumZero([-2,0,1,3])      undefined
//* sumZero([1,2,3])      undefined

//solution naive approach( O(n^2)
// function sumZero(inte) {
//   for (let i = 0; i < inte.length; i++) {
//     for (let j = i + 1; j < inte.length; j++) {
//       if (inte[i] + inte[j] === 0) {
//         return [inte[i], inte[j]];
//       }
//       // console.log(inte[i] + inte[j])
//     }
//   }
//   return undefined;
// }
// console.log(sumZero([-3, -12, -1, 0, 11, 2]));

//solution refactored approach approach
// function sumZero(inte){
//     let first = 0
//     let last = inte.length -1
//     while (first < last) {
//         if (inte[first] + inte[last] === 0) {
//             return [inte[first] , inte[last]]
//         } else if(inte[first] + inte[last] > 0){
//             last--
//         } else {
//             first++
//         }
//     }
// }
// console.log(sumZero([-3,-2,-1,0,1,2,3]))

//! Example 4 (countUniqueValues)
//* Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
//* countUniqueValues([1,1,1,2])      2
//* countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])      7
//* countUniqueValues([])      0
//* countUniqueValues([-2,-1,-1,0,1])      4
// function hi(arr){
//     const data = new Set(arr)
//     let test = [...data]
//     return test.length
// }
// console.log(hi([1,1,1,2,4]))
//* standard approach
// function countUniqueValues(arr){
//     if(arr.length === 0) return 0;
//     var i = 0;
//     for(var j = 1; j < arr.length; j++){
//         if(arr[i] !== arr[j]){
//             i++;
//             arr[i] = arr[j]
//         }
//     }
//     return i + 1;
// }
// countUniqueValues([1,2,2,5,7,7,99])

//! Example 5 (slidingWindows)
//* Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array
//* maxSubarraySum([1,2,5,2,8,1,5],2)     10
//* maxSubarraySum([1,2,5,2,8,1,5],4)     17
//* maxSubarraySum([4,2,1,6],1)           6
//* maxSubarraySum([4,2,1,6,2],4)         13
//* maxSubarraySum([],4)                  null

//*solution naive approach( O(n^2) )
// function maxSubarraySum(array, num) {
//   if (num > array.length) {
//     return null;
//   }
//   let max = -Infinity;
//   for (let i = 0; i < array.length - num + 1; i++) {
//     let temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp = temp + array[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
//* standard approach
// function maxSubarraySum(arr, num) {
//   let maxSum = 0;
//   let tempSum = 0;
//   if (arr.length < num) return null;
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   tempSum = maxSum;
//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return maxSum;
// }
// console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

//! Example 6 (divide and conquer pattern)
//* Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.
//* search([1,2,3,4,5,6],4)   3
//* search([1,2,3,4,5,6],6)   5
//* search([1,2,3,4,5,6],11)  -1

//*solution naive approach( O(n) )
// function search(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(search([1, 2, 3, 4, 5, 6], 14));
//* standard approach (logN)
// function search(array,val){
//     let min = 0;
//     let max = array.length -1;
//     while (min <= max) {
//         let middle = Math.floor((min + max) / 2)
//         let currentElement = array[middle]

//         if (array[middle] < val) {
//             min = middle + 1
//         } else if(array[middle] > val){
//             max = middle - 1
//         } else {
//             return middle
//         }
//     }
//     return -1
// }
// console.log(search([1, 2, 3, 4, 5, 6], 4));

// ------------------------------------------------------------------------------------------------------------ //
// Recursion ==  A process (a function in our case) that calls itself
