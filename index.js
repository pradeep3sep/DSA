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

//* Quiz questions
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:
// Time: O(N)
// Space: O(1)

// Sample Input:
// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

//* solutions
// function averagePair(arr, num) {
//   if (arr.length < 2) {
//     return false;
//   }

//   var num1 = 0;
//   var num2 = 1;
//   var sum = "";
//   while (num1 < arr.length - 1) {
//     console.log(num1, num2, sum);
//     sum = (arr[num1] + arr[num2]) / 2;
//     if (sum === num) {
//       return true;
//     }
//     if (num2 == arr.length - 1) {
//       num1++;
//       num2 = num1;
//     }
//     num2++;
//   }
//   return false;
// }
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));

//* another solution
// function averagePair(arr, num){
//   let start = 0
//   let end = arr.length-1;
//   while(start < end){
//     let avg = (arr[start]+arr[end]) / 2
//     if(avg === num) return true;
//     else if(avg < num) start++
//     else end--
//   }
//   return false;
// }

//* Quiz questions
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
//* sloutions(himanshu)
// function isSubsequence(str1,str2) {
//       let i = 0
//     let str3=''

//     for(let j of str2){
//         if(str1[i] === j){
//             str3 += j
//             i++
//         }
//         if(str3 === str1){
//             return true
//         }
//     }
//     return false
// }
//* solution pradeep
// function isSubsequence(st1,st2){
//   if(st2.length < st1.length) return false
//   let string = ''
//   let first = 0
//   let second = 0
//   while(first <= st1.length -1){
//     if(st1[first] === st2[second]){
//       string = string + st1[first]
//       if(string === st1) return true
//       first++
//       second = first
//     }else if(second == st2.length -1){
//       first++
//       second = first
//     }else {
//       second++
//     }
//   }
//   return false
// }
//* Instructor solutions
// function isSubsequence(str1, str2) {
//   var i = 0;
//   var j = 0;
//   if (!str1) return true;
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;
//     j++;
//   }
//   return false;
// }

//! ------------------------------------------------------------------------------------------------------------ //
// Recursion ==  A process (a function in our case) that calls itself
// base code in recursion : A situation when the recursion ends. basically jha hum recursion stop kar de ie return of function
// Used location are:
// JSON.parse / JSON.stringfy
// document.getElementById and DOM traversal alogorithms
// sometimes cleaner alternative of iterations
// basic example is
//* Recursive Version
// function countDown(num){
//     if(num <= 0) {
//         console.log("All done!");
//         return;
//     }
//     console.log(num);
//     num--;
//     countDown(num);
// }
// countDown(3)

//* Iterative Version
// function countDown(num){
//     for(var i = num; i > 0; i--){
//         console.log(i);
//     }
//     console.log("All done!")
// }

//* little bit advance version
// function sumRange(num) {
//   if (num === 1) return 1; // Here is the return which ends recursion not the below return which end recursion
//   return num + sumRange(num - 1);
// }
//  sumRange(4)

//* factorial with normal loop
// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 1; i--) {
//     total *= i;
//   }
//   return total;
// }
// console.log(factorial(5));

//* factorial with recursion
// function factorial(num){
//     if(num === 1) return 1;
//     return num * factorial(num-1);
// }
// console.log(factorial(5))

//* Helper method recursion: It is ouside function having the recusrion function inside it. In this a variable is placed outside the recursive function so that variable we can update inside the recurive function and variable do not get restted. Helper method is long but easy to understand while the pure recursion are short but sometimes becomes complicated to undersatnd.

//* Helper method
// function collectOddValues(arr) {
//   let result = [];

//   function helper(helperInput) {
//     if (helperInput.length === 0) {
//       return;
//     }

//     if (helperInput[0] % 2 !== 0) {
//       result.push(helperInput[0]);
//     }

//     helper(helperInput.slice(1));
//   }

//   helper(arr);

//   return result;
// }
// collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//* pure recursion
// function collectOddValues(arr) {
//   let newArr = [];

//   if (arr.length === 0) {
//     return newArr;
//   }

//   if (arr[0] % 2 !== 0) {
//     newArr.push(arr[0]);
//   }

//   newArr = newArr.concat(collectOddValues(arr.slice(1)));
//   return newArr;
// }

// collectOddValues([1, 2, 3, 4, 5]);
//* Pure Recursion Tips
// For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
// Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
// To make copies of objects use Object.assign, or the spread operator

//! Just the code of test of udemy
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// Examples:
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

// Solution of above question
// function areThereDuplicates(...values) {
//   let object = {};
//   for (let i = 0; i < values.length; i++) {
//     object[values[i]] = object[values[i]] + 1 || 1;
//     if(object[values[i]] > 1) return true
//   }
//   return false
// }
// console.log(areThereDuplicates("a", "b", "c", "a"));

//* udemy quiz
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
// function productOfArray(arr) {
//   if (arr.length === 0) return 1;
//   return arr[0] * productOfArray(arr.slice(1));
// }

//* udemy quiz
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

// self solution
// function fib(num){
//     let arr = [1,1]

//     function helper(num){
//         if(num < arr.length && num < 1) return
//         arr.push(arr[arr.length -1] + arr[arr.length -2])
//         helper(num-1)
//     }
//     helper(num)
// console.log(arr)
//     return arr[num -1]
// }
// console.log(fib(35))

//&udemy wale ka solution
// function fib(n){
//     if (n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }

//* Udemy quiz
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.
// function reverse(str){
//     if(!str.length) return ''
//     return str[str.length -1] + reverse(str.slice(0,-1))
// }
// console.log(reverse('test'))

//* udemy quiz isPalindrome

// Self solution
// function isPalindrome(text){
//     let value = ''
//     function reverse(str){
//         if(!str.length) return ''
//         return str[str.length -1] + reverse(str.slice(0,-1))
//     }
//     value = reverse(text)
//     if (value === text) {
//         return true
//     }
//     return false
// }
// console.log(isPalindrome('awesome'))

// Instructor Solution
// function isPalindrome(str){
//     if(str.length === 1) return true;
//     if(str.length === 2) return str[0] === str[1];
//     if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
//     return false;
// }

//* udemy quiz

// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

// const isOdd = val => val % 2 !== 0;
// function someRecursive(list, func){
//     if(list.length === 0) return false
//     if(func(list[0])) {
//         return true
//     }else {
//        return someRecursive(list.slice(1),func)
//     }
// }
// console.log(someRecursive([4,6,8], isOdd))

//* udemy quiz

// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
// function flatten(mainarr) {
//   let data = [];
//   function subdeflat(arr) {
//     for (let unit of arr) {
//       typeof unit == "number" ? data.push(unit) : subdeflat(unit);
//     }
//   }
//   subdeflat(mainarr);
//   return data;
// }
// console.log(flatten([1, [2, [3, 4], [[5]]]]));

//* Udemy Quiz
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
// function capitalizeFirst(arr) {
//   if (!arr.length) return '';
//   return [arr[0][0].toUpperCase() + arr[0].slice(1), ...capitalizeFirst(arr.slice(1))];
// }
// console.log(capitalizeFirst(["car", "taco", "banana"]));

//* Udemy Quiz
// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
// function capitalizedWords(arr) {
//   if (!arr.length) return [];
//   return [arr[0].toUpperCase(), ...capitalizedWords(arr.slice(1))];
// }
// console.log(capitalizedWords(['i', 'am', 'learning', 'recursion']));

//* Udemy Quiz
// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

// const obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }
// function collectStrings(data){
//     let sample = {}

//     function destrc(data){
//         for(let unit in data){
//             typeof data[unit] === 'string' ? sample[data[unit]] = data[unit] : destrc(data[unit])
//         }
//     }
//     destrc(data)

//     return Object.values(sample)
// }

// console.log(collectStrings(obj))

//* Udemy Quiz
// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

// var obj2 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };

// function nestedEvenSum(data) {
//   let sample = 0;

//   function destrc(data) {
//     for (let unit in data) {
//       if (typeof data[unit] === "number" && data[unit] % 2 === 0) {
//         sample = sample + data[unit];
//       }
//       if (typeof data[unit] === "object") {
//         destrc(data[unit]);
//       }
//     }
//   }
//   destrc(data);

//   return sample;
// }

// console.log(nestedEvenSum(obj2));

//* Udemy Quiz
// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!
// let obj = {
//   num: 1,
//   test: [],
//   data: {
//       val: 4,
//       info: {
//           isRight: true,
//           random: 66
//       }
//   }
// }

// function stringifyNumbers(obj) {
//   var newObj = {};
//   for (var key in obj) {
//     if (typeof obj[key] === 'number') {
//       newObj[key] = obj[key].toString();
//     } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//       newObj[key] = stringifyNumbers(obj[key]);
//     } else {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }
// stringifyNumbers(obj)

//! ------------------------------------------ Searching Alogrithms ------------------------------------- //
//* Linear Search O(n): We visit one item at a time starting at the beginning moving forward or moving at a set interval one item at a time checking every single thing.

//* udemy Quiz
// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.
// Don't use indexOf to implement this function!

// function linearSearch(arr,val){
//   for(let i=0; i<arr.length; i++){
//     if(arr[i] === val){
//       return i
//     } 
//   }
//   return -1
// }
// console.log(linearSearch([10, 15, 20, 25, 30], 15))


//* Binary Search O(log n):
//Binary search is a much faster form of search
//Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
//Binary search only works on //!sorted arrays!

// method refer divide and conquer pattern standard process or use below pattern //* log(N) becuse we find the solution in log(n) steps
// Original Solution
// function binarySearch(arr, elem) {
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = Math.floor((start + end) / 2);
//     while(arr[middle] !== elem && start <= end) {
//         if(elem < arr[middle]){
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }
//         middle = Math.floor((start + end) / 2);
//     }
//     if(arr[middle] === elem){
//         return middle;
//     }
//     return -1;
// }

// Refactored Version
// function binarySearch(arr, elem) {
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = Math.floor((start + end) / 2);
//     while(arr[middle] !== elem && start <= end) {
//         if(elem < arr[middle]) end = middle - 1;
//         else start = middle + 1;
//         middle = Math.floor((start + end) / 2);
//     }
//     return arr[middle] === elem ? middle : -1;
// }

// binarySearch([2,5,6,9,13,15,28,30], 103)

// self for the quiz
// function binarySearch(arr, val){
//   let start = 0,
//   end = arr.length -1,
//   middle =Math.round((start + end)/2)
//   while(start < end && arr[middle] !== val){
//     console.log("yha",arr[start], arr[end],arr[middle],val)
//     if (val < arr[middle]) {
//       end = middle -1
//     } else {
//       start = middle + 1
//     }
//     middle = Math.floor((start + end) / 2);
//   }
//   if (val === arr[middle]) {
//     return middle
//   } else {

//     return -1
//   }
// }

// console.log(binarySearch([1,2,3,4,5], 2))

//! ----------------------------  Sorting ----------------------------------- //
// Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.
// Examples
// Sorting numbers from smallest to largest
// Sorting names alphabetically
// Sorting movies based on release year
// Sorting movies based on revenue

//* Bubble sort : A sorting algorithm where the largest values bubble up to the top or end! It is good for the data which is nearly  sorted then O(1) otherwise it is O(n^2).

// for swaping the number
// ES5
// function swap(arr, idx1, idx2) {
//   var temp = arr[idx1];
//   arr[idx1] = arr[idx2];
//   arr[idx2] = temp;
// }

// ES2015
// const swap = (arr, idx1, idx2) => {
//   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// };

// or simply
// let a = 3;
// let b = 4;
// [b,a] = [a,b]
// console.log({a, b})
//& UNOPTIMIZED VERSION OF BUBBLE SORT
// function bubbleSort(arr){
//     for(var i = arr.length; i > 0; i--){
//       for(var j = 0; j < i - 1; j++){
//         console.log(arr, arr[j], arr[j+1]);
//         if(arr[j] > arr[j+1]){
//           var temp = arr[j];
//           arr[j] = arr[j+1];
//           arr[j+1] = temp;
//         }
//       }
//     }
//     return arr;
//   }

// ES2015 Version
//   function bubbleSort(arr) {
//     const swap = (arr, idx1, idx2) => {
//       [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     };

//     for (let i = arr.length; i > 0; i--) {
//       for (let j = 0; j < i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           swap(arr, j, j + 1);
//         }
//       }
//     }
//     return arr;
//   }

//   bubbleSort([8,1,2,3,4,5,6,7]);

//& Optimized BubbleSort with noSwaps
// function bubbleSort(arr){
//     var noSwaps;
//     for(var i = arr.length; i > 0; i--){
//       noSwaps = true;
//       for(var j = 0; j < i - 1; j++){
//         if(arr[j] > arr[j+1]){
//           var temp = arr[j];
//           arr[j] = arr[j+1];
//           arr[j+1] = temp;
//           noSwaps = false;
//         }
//       }
//       if(noSwaps) break;
//     }
//     return arr;
//   }

//   bubbleSort([8,1,2,3,4,5,6,7]);

//* Selection sort : Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position. Is O(n^2) it is good only when you want to minimize the number of swaps that you are making. Like in bubble sort we are swaping in each comparison but here we are swaping when on loop ends

//& LEGACY VERSION (non ES2015 syntax)
// function sselectionSort(arr){
//   for(var i = 0; i < arr.length; i++){
//       var lowest = i;
//       for(var j = i+1; j < arr.length; j++){
//           if(arr[j] < arr[lowest]){
//               lowest = j;
//           }
//       }
//       if(i !== lowest){
//           //SWAP!
//           var temp = arr[i];
//           arr[i] = arr[lowest];
//           arr[lowest] = temp;
//       }
//   }
//   return arr;
// }

//& ES2015 VERSION
// function selectionSort(arr) {
// const swap = (arr, idx1, idx2) =>
//   ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

// for (let i = 0; i < arr.length; i++) {
//   let lowest = i;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[lowest] > arr[j]) {
//       lowest = j;
//     }
//   }
//   if (i !== lowest) swap(arr, i, lowest);
// }

// return arr;
// }

// selectionSort([0,2,34,22,10,19,17]);

//* Insertion sort : algorithm is to consider the list to be divided into two parts: a sorted part, which is built up from left to right, and an unsorted part. The algorithm repeatedly removes an element from the unsorted part of the list, finds the location within the sorted part where that element belongs, and inserts it there. This continues until there are no more elements in the unsorted part. The advantage of insertion sort is that it is very efficient for small lists and partially sorted lists.
//insertion sort is good when we have the sorted array and the new numes comes in and we have to add it in the ends

//& https://www.toptal.com/developers/sorting-algorithms    sorting animation website

// function insertionSort(arr){
// 	var currentVal;
//     for(var i = 1; i < arr.length; i++){
//         currentVal = arr[i];
//         for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = currentVal;
//     }
//     return arr;
// }

// insertionSort([2,1,9,76,4])

//! --------------------------------------------- Merge Sort --------------------------//
//Below is the code to merge two sorted arrays
//* Merges two already sorted arrays
// function merge(arr1, arr2) {
//   let results = [];
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr2[j] > arr1[i]) {
//       results.push(arr1[i]);
//       i++;
//     } else {
//       results.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     results.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     results.push(arr2[j]);
//     j++;
//   }
//   return results;
// }
// merge([100, 200], [1, 2, 3, 5, 6]);

//! To generate the random 100000 number below is the code
// var data = Array.apply(null, {length: 100000}).map(Function.call, Math.random)
// console.log(data)

//! full merge sort
// Merge function from earlier
// function merge(arr1, arr2) {
//   let results = [];
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr2[j] > arr1[i]) {
//       results.push(arr1[i]);
//       i++;
//     } else {
//       results.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     results.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     results.push(arr2[j]);
//     j++;
//   }
//   return results;
// }

// Recrusive Merge Sort
// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   return merge(left, sright);
// }

// mergeSort([10, 24, 76, 73]);

//! --------------------------------------------- Quick Sort --------------------------//

//& Below is code to find the pivot point which helps further sort
//* First Version
// function pivot(arr, start = 0, end = arr.length + 1) {
//   function swap(array, i, j) {
//     var temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }

//   var pivot = arr[start];
//   var swapIdx = start;

//   for (var i = start + 1; i < arr.length; i++) {
//     if (pivot > arr[i]) {
//       swapIdx++;
//       swap(arr, swapIdx, i);
//     }
//   }
//   swap(arr, start, swapIdx);
//   return swapIdx;
// }

//* Version with ES2015 Syntax
// function pivot(arr, start = 0, end = arr.length - 1) {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };

// We are assuming the pivot is always the first element
//   let pivot = arr[start];
//   let swapIdx = start;

//   for (let i = start + 1; i <= end; i++) {
//     if (pivot > arr[i]) {
//       swapIdx++;
//       swap(arr, swapIdx, i);
//     }
//   }

// Swap the pivot from the start the swapPoint
//   swap(arr, start, swapIdx);
//   return swapIdx;
// }

// pivot([4, 8, 2, 1, 5, 7, 6, 3]);

//* Quick sort full code in one go
// function pivot(arr, start = 0, end = arr.length - 1) {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };

//   // We are assuming the pivot is always the first element
//   let pivot = arr[start];
//   let swapIdx = start;

//   for (let i = start + 1; i <= end; i++) {
//     if (pivot > arr[i]) {
//       swapIdx++;
//       swap(arr, swapIdx, i);
//     }
//   }

//   // Swap the pivot from the start the swapPoint
//   swap(arr, start, swapIdx);
//   return swapIdx;
// }

// function quickSort(arr, left = 0, right = arr.length - 1) {
//   if (left < right) {
//     let pivotIndex = pivot(arr, left, right); //3
//     //left
//     quickSort(arr, left, pivotIndex - 1);
//     //right
//     quickSort(arr, pivotIndex + 1, right);
//   }
//   return arr;
// }

// quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]);

//! --------------------------------------------- Radix Sort --------------------------//

//* Radix sort helpers
// function getDigit(num, i) {
//   return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
// }

// function digitCount(num) {
//   if (num === 0) return 1;
//   return Math.floor(Math.log10(Math.abs(num))) + 1;
// }

// function mostDigits(nums) {
//   let maxDigits = 0;
//   for (let i = 0; i < nums.length; i++) {
//     maxDigits = Math.max(maxDigits, digitCount(nums[i]));
//   }
//   return maxDigits;
// }

// It return the max count length in array of numbers eg [1234,53,7] gives 4


//* Full Radix short
// function getDigit(num, i) {
//   return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
// }

// function digitCount(num) {
//   if (num === 0) return 1;
//   return Math.floor(Math.log10(Math.abs(num))) + 1;
// }

// function mostDigits(nums) {
//   let maxDigits = 0;
//   for (let i = 0; i < nums.length; i++) {
//     maxDigits = Math.max(maxDigits, digitCount(nums[i]));
//   }
//   return maxDigits;
// }

// function radixSort(nums) {
//   let maxDigitCount = mostDigits(nums);
//   for (let k = 0; k < maxDigitCount; k++) {
//     let digitBuckets = Array.from({ length: 10 }, () => []);
//     for (let i = 0; i < nums.length; i++) {
//       let digit = getDigit(nums[i], k);
//       digitBuckets[digit].push(nums[i]);
//     }
//     nums = [].concat(...digitBuckets);
//   }
//   return nums;
// }

// radixSort([23, 345, 5467, 12, 2345, 9852]);

//! ------------------------------------ DSA -----------------------
// A means alogorithms ie how you solves the problem like what are the steps
// DS means Data Structure, ie How we gonna save the data means like which form we are going to save the data which may be conventional like array, object or slef made like linked list, maps etc

//* Linked List : it's a data structure that stores whatever data you want strings,numbers. A data structure that contains a head, tail and length property. Linked Lists consist of nodes, and each node has a value and a pointer to another node or null

//& To start the linked list, we should have the good knowledge of class

//& Comparisons with Arrays

//^ Linked Lists  (its like stairs in building)

// Do not have indexes!
// Connected via nodes with a next pointer
// Random access is not allowed

//^ Arrays (its like lift in building)

// Indexed in order!
// Insertion and deletion can be expensive
// Can quickly be accessed at a specific index

// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class SinglyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(val){
//         var newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }
//     pop(){
//         if(!this.head) return undefined;
//         var current = this.head;
//         var newTail = current;
//         while(current.next){
//             newTail = current;
//             current = current.next;
//         }
//         this.tail = newTail;
//         this.tail.next = null;
//         this.length--;
//         if(this.length === 0){
//             this.head = null;
//             this.tail = null;
//         }
//         return current;
//     }
//     shift(){
//         if(!this.head) return undefined;
//         var currentHead = this.head;
//         this.head = currentHead.next;
//         this.length--;
//         if(this.length === 0){
//             this.tail = null;
//         }
//         return currentHead;
//     }
//     unshift(val){
//         var newNode = new Node(val);
//         if(!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//         }
//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//         return this;
//     }
//     get(index){
//         if(index < 0 || index >= this.length) return null;
//         var counter = 0;
//         var current = this.head;
//         while(counter !== index){
//             current = current.next;
//             counter++;
//         }
//         return current;
//     }
//     set(index, val){
//         var foundNode = this.get(index);
//         if(foundNode){
//             foundNode.val = val;
//             return true;
//         }
//         return false;
//     }
//     insert(index, val){
//         if(index < 0 || index > this.length) return false;
//         if(index === this.length) return !!this.push(val);
//         if(index === 0) return !!this.unshift(val);

//         var newNode = new Node(val);
//         var prev = this.get(index - 1);
//         var temp = prev.next;
//         prev.next = newNode;
//         newNode.next = temp;
//         this.length++;
//         return true;
//     }
//     remove(index){
//         if(index < 0 || index >= this.length) return undefined;
//         if(index === 0) return this.shift();
//         if(index === this.length - 1) return this.pop();
//         var previousNode = this.get(index - 1);
//         var removed = previousNode.next;
//         previousNode.next = removed.next;
//         this.length--;
//         return removed;
//     }
//     reverse(){
//       var node = this.head;
//       this.head = this.tail;
//       this.tail = node;
//       var next;
//       var prev = null;
//       for(var i = 0; i < this.length; i++){
//         next = node.next;
//         node.next = prev;
//         prev = node;
//         node = next;
//       }
//       return this;
//     }
//     print(){
//         var arr = [];
//         var current = this.head
//         while(current){
//             arr.push(current.val)
//             current = current.next
//         }
//         console.log(arr);
//     }
// }

// var list = new SinglyLinkedList()

// list.push(100)
// list.push(201)
// list.push(250)
// list.push(350)
// list.push(999)

//* Double Linked List : The singly-linked list holds data and a link to the next component. While in a doubly-linked list, every node includes a link to the previous node.

// Doubly Linked Lists are almost identical to Singly Linked Lists except there is an additional pointer to previous nodes
// Better than Singly Linked Lists for finding nodes and can be done in half the time!
// However, they do take up more memory considering the extra pointer
// Doubly linked lists are used to implement other data structures and certain types of caches

// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//         this.prev = null;
//     }
// }


// class DoublyLinkedList {
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(val){
//         var newNode = new Node(val);
//         if(this.length === 0){
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             newNode.prev = this.tail;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     } 
//     pop(){
//         if(!this.head) return undefined;
//         var poppedNode = this.tail;
//         if(this.length === 1){
//             this.head = null;
//             this.tail = null;
//         } else {
//             this.tail = poppedNode.prev;
//             this.tail.next = null;
//             poppedNode.prev = null;
//         }
//         this.length--;
//         return poppedNode;
//     }
//     shift(){
//         if(this.length === 0) return undefined;
//         var oldHead = this.head;
//         if(this.length === 1){
//             this.head = null;
//             this.tail = null;
//         }else{
//             this.head = oldHead.next;
//             this.head.prev = null;
//             oldHead.next = null;
//         }
//         this.length--;
//         return oldHead;
//     }
//     unshift(val){
//         var newNode = new Node(val);
//         if(this.length === 0) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.head.prev = newNode;
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//         this.length++;
//         return this;
//     }
//     get(index){
//         if(index < 0 || index >= this.length) return null;
//         var count, current;
//         if(index <= this.length/2){
//             count = 0;
//             current = this.head;
//             while(count !== index){
//                 current = current.next;
//                 count++;
//             }
//         } else {
//             count = this.length - 1;
//             current = this.tail;
//             while(count !== index){
//                 current = current.prev;
//                 count--;
//             }
//         }
//         return current;
//     }
//     set(index, val){
//         var foundNode = this.get(index);
//         if(foundNode != null){
//             foundNode.val = val;
//             return true;
//         }
//         return false;
//     }
//     insert(index, val){
//         if(index < 0 || index > this.length) return false;
//         if(index === 0) return !!this.unshift(val);
//         if(index === this.length) return !!this.push(val);

//         var newNode = new Node(val);
//         var beforeNode = this.get(index-1);
//         var afterNode = beforeNode.next;
        
//         beforeNode.next = newNode, newNode.prev = beforeNode;
//         newNode.next = afterNode, afterNode.prev = newNode;
//         this.length++;
//         return true;
//     }
// }

// var list = new DoublyLinkedList()
// list.push("Harry")
// list.push("Ron")
// list.push("Hermione")


//!------------------------------------------Stack-------------------------------------//
// Stack is a A LIFO data structure. The last element added to the stack will be the first element removed from the stack
//WHERE STACKS ARE USED ARE
// Managing function invocations
// Undo / Redo
// Routing (the history object) is treated like a stack!


// THERE IS MORE THAN ONE WAY OF IMPLEMENTING A STACK

//* 1- ARRAY IMPLEMENTATION
// In the array, we have the built-in stack mechanism ie push,pop or shift,unshift. The functioning is like we are adding the data through push and shift and then for removing the last added data we use the pop and unshift. This is how tha stack mechanism woerk in array. Push and pop are the preferred approach because of O(n)

//* 2- LINKED LIST IMPLEMENTATION
// Concept is same for the single linked list and double linked list, but in single linked list the push and pop method are the O(N) which is not great becuase we need the O(1). So we use the Double linked list for the push {O(1)},pop {O(1)} or shift {O(1)},unshift {O(1)}. In single linked list we use the shift{O(1)},unshift {O(1)}

// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor(){
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }
//     push(val){
//         var newNode = new Node(val);
//         if(!this.first){
//             this.first = newNode;
//             this.last = newNode;
//         } else {
//             var temp = this.first;
//             this.first = newNode;
//             this.first.next = temp;
//         }
//         return ++this.size;
//     }
//     pop(){
//         if(!this.first) return null;
//         var temp = this.first;
//         if(this.first === this.last){
//             this.last = null;
//         }
//         this.first = this.first.next;
//         this.size--;
//         return temp.value;
//     }
// }


//!------------------------------------------Queues-------------------------------------//

//* QUEUES is A FIFO data structure. First In First Out


//* 1- ARRAY IMPLEMENTATION
// for the array implementation, we can use the combination of push,shift or pop,unshift... The problem is that it is O(n).

//* 2- Single LINKED LIST IMPLEMENTATION
// adding at the beginning and removing from the end is slow O(n) because of we have traverse all node
// We use the approach of removing from the head and adding at end

// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class Queue {
//     constructor(){
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }
//     enqueue(val){
//         var newNode = new Node(val);
//         if(!this.first){
//             this.first = newNode;
//             this.last = newNode;
//         } else {
//             this.last.next = newNode;
//             this.last = newNode;
//         }
//         return ++this.size;
//     }

//     dequeue(){
//         if(!this.first) return null;

//         var temp = this.first;
//         if(this.first === this.last) {
//             this.last = null;
//         }
//         this.first = this.first.next;
//         this.size--;
//         return temp.value;
//     }
// }


//!-------------------------------- TREES--------------------------------//

