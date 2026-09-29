let arr = ["apple", "mango", "banana", "watermalen"];

// console.log(arr[0],arr[arr.length-1]);

// console.log(arr.length);

// arr.push("example")
// arr.pop()
// arr.unshift("Test")
// arr.shift()

// console.log(arr.reverse());

// console.log(arr.sort());

// let num=[1,2,3,4,5,9,7,8]

// let num1=num.sort((a,b)=>b-a)
// console.log(num1);

// let num=[10,20,30,50,90]

// let newNum=num.splice(2,4)
// console.log(newNum)
// console.log(num);

// num.splice(2,0,100)

// console.log(num.indexOf(50));

// Check if array contains a value.

// let newNum=num.includes(10)
// console.log(newNum)

// let num = [10, 20, 30, 50, 90];

let words = ["I", "am", "learning", "JavaScript"];

// console.log(words.join(" "));

// let newArr=[...num,...words]

// console.log(newArr);

let newWord = [...words];
// console.log(newWord);

// console.log(Math.max(...num));

// Swap two variables using destructuring.

// let arr1 = [10, 20, 30];
// let arr2 = [40, 50, 60];

// console.log(arr1);
// console.log(arr2);

// [arr1, arr2] = [arr2, arr1];

// console.log(arr1);
// console.log(arr2);

// =======new======

// Use forEach to print all numbers doubled.

let num = [10, 21, 30, 50, 90];

// let newNum = num.forEach((n) => {
//   console.log(n * 2);
// });

// Use map to square all numbers.

// let newNum=num.map((n)=>{
//     return n**2
// })
// console.log(newNum);

// Use filter to get even numbers.

// let newNum=num.filter((n)=>n%2===0)
// console.log(newNum);

// Use reduce to calculate sum.

// let newNum=num.reduce((acc,n)=>{
//     return acc+n
// })
// console.log(newNum);

let max = num.reduce((acc, n) => {
  return acc > n ? acc : n;
});
// console.log(max)

// Use find to get first even number.
let num1 = [11, 21, 30, 50, 90];

// let fristEven=num1.find((n)=>n%2===0)
// console.log(fristEven);
// console.log("Original:",num);

// console.log(num.slice(1, 3));
// console.log("slice:",num);

// console.log(num.splice(1, 3));
// console.log("splice:",num);

// Filter all students with marks > 80.
let num2 = [10, 25, 45, 60, 80];

// let idx=num2.findIndex((n)=>n>50)
// console.log(idx);

// Use some to check if any number is negative.

// let negative=num2.some((n)=>n<0)
// console.log(negative);

// Use every to check if all numbers are positive.

// let positive=num2.every((n)=>n>0)
// console.log(positive);

// Create array of names and convert all to uppercase.

// let userName=["parvez","alam","shahil","om"]

// let upperName=userName.map((item)=>item.toUpperCase())

// console.log(upperName);

// Filter all students with marks > 80.

let studentMarks = [20, 90, 89, 50, 98];

// let marks=studentMarks.filter((mark)=>mark>80)
// console.log(marks);

// Calculate average using reduce.

let total = studentMarks.reduce((acc, num) => {
  return acc + num;
});

let avg = total / studentMarks.length;
console.log(avg);
