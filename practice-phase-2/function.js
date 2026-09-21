// Write a function that returns "Adult" if age ≥ 18 else "Minor".

function checkAge(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}

// let result=checkAge(19)
// console.log(result);

// Create a function to reverse a string.

function reverseString(name) {
  let str = name.split("").reverse().join("");
  return str;
}
// let result=reverseString("parvez")
// console.log(result);

// let fruits = ["apple", "banana", "mango"];
// for (let fruit of fruits) {
//     console.log(fruit);
// }

// let word = "Hello";
// for (let char of word) {
//     console.log(char);
// }

// for(let i=1; i<=50; i++){
//     if(i%15===0) console.log("FizzBuzz");
//     else if(i%3===0) console.log("Fizz");
//     else if(i%5===0)console.log("Buzz");
//     else console.log(i);

// }

// let num1=Number(prompt("Enter the first number"))
// let operator=prompt("Enter the operator:+,_,*,/")
// let num2=Number(prompt("Enter the second number"))

// let result;

// if(operator==="+") result=num1+num2
// else if(operator==="-") result=num1-num2
// else if(operator==="*") result=num1*num2
// else if(operator==="/") result= num2!==0?num1/num2:console.log("Not divisable by zero");

// else console.log("Invalid Operator");

// console.log(result);

// let secret=Math.floor(Math.random()*100)+1
// let attempt=0
// let guess;
// do {
//     guess=Number(prompt("Guess the number"))
//     attempt++
//     if(guess>secret)console.log("To High");
//     else if(guess<secret)console.log("To Low");

// } while (guess!==secret);

// console.log(`You got it in ${attempt} attempts!`);

// let temp=Number(prompt("Enter the temprature"))
// let unit=prompt("is it C or F ?").toUpperCase()

// if(unit==="C"){
//     console.log(`${temp}°C=${(temp*9/5)+32}°F`);
// }
// else if(unit==="F"){
//     console.log(`${temp}°F=${(temp-32)*5/9}°C`);
// }
// else console.log("invalid unit");

// let str = prompt("Enter the string").toLowerCase();
// let vowel = "aeiou";
// let count = 0;
// for (let char of str) {
//   if (vowel.includes(char)) count++;
// }
// console.log(count);

// function factorial(n){
//     if(n<=1) return n
//     return n*factorial(n-1);
// }
// console.log(factorial(5));

// Write a function expression for multiplication.

// const multipleNum = (num1, num2) => {
//   return num1 * num2;
// };

// const result=multipleNum(2,4)
// console.log(result);

// Create a function that accepts unlimited numbers and returns their sum using rest operator.

// let multiplication = (...num) => {
//   let sum = 0;
//   for (let n of num) {
//     sum = sum + n;
//   }
//   return sum;
// };

// console.log(multiplication(2, 4));

// Write a function that counts vowels in a string.

// let vowels = "aeiou";
// let count = 0;

// let checkVowel = (str) => {
//   for (let ch of str) {
//     if (vowels.includes(ch)) count++;
//   }
//   return count;
// };

// console.log(checkVowel("hello world"));

// Create a function that checks if a string is palindrome.

// let isPalindrome=(str)=>{
//   let resverse=str.split("").reverse().join("")
//   if(str===resverse) return true
//   else return false
// }

// console.log(isPalindrome("level"));

// Write a callback function example using setTimeout

// function greet(name) {
//   console.log("Hello ", name);
// }

// function processUser(callback) {
//   setTimeout(() => {
//     callback("Parvez");
//   },1000);
// }
// processUser(greet);

// Create a higher-order function that executes another function twice.

// function sayHi() {
//   console.log("hi");
// }

// function highOrder(fn) {
//   fn();
//   fn();
// }

// highOrder(sayHi);

// Write a function that returns another function.

// function greet() {
//   console.log("hi");
//   let str = "hello";
//   return function fn() {
//     console.log(str);
//   };

// }

// let result=greet();
// result();

// function outerFunc(){
//   function innerFunc(){
//     console.log("hello");

//   }
//   return innerFunc
// }

// let result=outerFunc()
// result()

//  function fun1(a){
//   return function fun2(b){
//     return function fun3(c){
//       return a+b+c
//     }
//   }
// }

// let result=fun1(2)(2)
// console.log(result(4));
// console.log(result(8));

// function recursion(n){
//  if(n<=1) return 1
//  return n*recursion(n-1)
// }

// let result=recursion(4)
// console.log(result);

// function fibonacci(n){
//   if(n<=0) return []
//   if(n===1) return [0]

//   const series=[0,1]
//   for(let i=2; i<=n; i++){
//      series.push(series[i-1]+series[i-2])
//   }
//   return series
// }
// console.log(fibonacci(4));

// function fibonacci(n){
//  if(n<=1){
//   return n
//  }

//  return fibonacci(n-1)+fibonacci(n-2)
// }
// console.log(fibonacci(6));

// (function () {
//   console.log("Executed");
// })();

// Write a function that memoizes factorial calculation.

// function memorizeFactorial() {
//   let cache = {};
//   function factorial(n) {
//     if (n <= 0) {
//       return 1;
//     }
//     if (cache[n]) {
//       return cache[n];
//     }
//     cache[n] = n * factorial(n - 1);
//     return cache[n];
//   }
//   return factorial;
// }
// let result = memorizeFactorial();
// console.log(result(5));
