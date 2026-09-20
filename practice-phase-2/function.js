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

function factorial(n){
    if(n<=1) return n
    return n*factorial(n-1);
}
console.log(factorial(5));

