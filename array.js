// declare array
// declare function
//apply for loop
// check if the number is between the ranges
// push the value to new array
// print the value
let arr  = [1, 2, 3, 4, 5, 6, ];
function filterRange(arr, a, b) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
 console.log(filterRange(arr, 3,5));



 //You have an array of user objects, each one has user.name. 
 //Write the code that converts it into an array of names.
 // declare  the array of user objects
 //  use the map function to create a new array with the names
 //   return the new array
 let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 } 
let mary = { name: "Mary", age: 28 }

let users = [ john, pete, mary ]
 function getNames(users) {
let names  = users.map(user => user.name);
return names;

 }
// console.log(getNames(users));

//Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.
// declare  the array of user objects
// use the map function to create a new array with the ages
// use the reduce function to calculate the sum of the ages
// divide the sum by the number of users to get the average
let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 } 
let mary = { name: "Mary", age: 29 }
let users = [ john, pete, mary ]
function getAverageAge(users) {
  let ages = users.map(user => user.age);
  let sum = ages.reduce((a, b) => a + b, 0);
  let average = sum / ages.length;
  return average;
}
console.log(getAverageAge(users)); // 27.666666666666668
