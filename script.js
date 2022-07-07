//print the odd numbers
//let arr = [1,2,3,4,5,6,7,8,9,10,11];

//Anonymous function
/* var sum = function(arr)
{
    let odds = arr.filter(n => n%2);
    return(odds);
}
console.log(sum(arr)); */

//IIFE function
/* (function sum(arr){
    let odds = arr.filter(n => n%2);
    console.log(odds);
})
(arr); */


//Convert all the strings to title caps in string array

//Ananymous function
 /* var titleCase = function(str) {
    str = str.toLowerCase().split(' '); 
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return(str.join(' '));
  }
  console.log(titleCase("RISHI IS HERE"));  */


  //IIFE Function
  /* (function titlecase(str){
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    console.log(str);
 })
("RISHI IS HERE"); */



//sum of all numbers in array

//anonymous function
/* var marks = [30,40,50,60,70];
var add = function(arr){

var sum = 0;
for(var i in marks){    
   sum += arr[0];
   sum += arr[1];
   sum += arr[2];
   sum += arr[3];
   sum += arr[4];
   return(sum);
}
}
console.log(add([30,40,50,60,70]));
 */


//IIFE function
/* (function add(marks){
    var sum = 0;
for(var i in marks){
    total = sum += marks[i];
}
    console.log(total);
}
)
([30,40,50,60,70]); */


//Return all the prime numbers in an array

//anonmous function

/* let num = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let result = [];
var isPrime = function(num) {
  if(num < 2) return false;

  for (let k = 2; k < num; k++){
    if(num % k == 0){
      return false;
    }
  }
  return true;
}
num.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result); */


//IIFE Function
//no output, getting error

/* let num = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

(function isPrime(num) {
  let result = [];
  if(num < 2) return false;

  for (let k = 2; k < num; k++){
    if(num % k == 0){
      return false;
    }
  }
  return true;
}
num.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
})
)
console.log(result); */ 



//return all the pallindrome in an array in javascript
// Anonymous function

/* var isPalindrome = function(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}

console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("racecar"));                 // logs 'true'
 */



//IIFE Function

/* (function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  console.log(str == str.split('').reverse().join(''));   //replaced return as console.log
})
(("madam")) */



//Remove duplicates from an array

//anonymous function

//var arr = ["apple", "mango", "apple","orange", "mango", "mango"];
 
/* var removeDuplicates = function(arr) {
  return [...new Set(arr)];
}
 
console.log(removeDuplicates(["apple", "mango", "apple", "orange", "mango", "mango"])); */

//IIFE Function
/* (function removeDuplicates(arr) {
  console.log([...new Set(arr)]);
})
(["apple", "mango", "apple", "orange", "mango", "mango"]) */



//Return an array by k times.

//Anonymous Function

/* var rotateRight = function(arr){
  let last = arr.pop();
  arr.unshift(last);
  return arr;
}
console.log(rotateRight([1,2,3,4,5])); */

//IIFE Function
/* (function rotateRight(arr){
  let last = arr.pop();
  arr.unshift(last);
  console.log(arr);
})
([1,2,3,4,5]) */





//Arrow Function

//print the odd numbers
/* let arr = [1,2,3,4,5,6,7,8,9,10,11];

var sum = (arr) => {
    let odds = arr.filter(n => n%2);
    return(odds);
};
console.log(sum(arr));  */


//Convert all the strings to title caps in string array

//Arrow function
/* var titleCase = (str) => {
    str = str.toLowerCase().split(' '); 
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return(str.join(' '));
  }
  console.log(titleCase("RISHI IS HERE"));  */ 




//sum of all numbers in array

//Arrow function
/* var marks = [30,40,50,60,70];
var add = (arr) => {

var sum = 0;
for(var i in marks){    
   sum += arr[0];
   sum += arr[1];
   sum += arr[2];
   sum += arr[3];
   sum += arr[4];
   return(sum);
}
}
console.log(add([30,40,50,60,70])); */



//Return all the prime numbers in an array

//Arrow function

/* let num = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let result = [];
var isPrime = (num) => {
  if(num < 2) return false;

  for (let k = 2; k < num; k++){
    if(num % k == 0){
      return false;
    }
  }
  return true;
}
num.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result);  */



//return all the pallindrome in an array in javascript
// Arrow function

/* var isPalindrome = (str) => {
str = str.replace(/\W/g, '').toLowerCase();
return (str == str.split('').reverse().join(''));
}

console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("racecar"));                 // logs 'true'
*/