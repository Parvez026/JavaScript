
// Write a function that returns "Adult" if age ≥ 18 else "Minor".

function checkAge(age){
    if(age>=18){
        return "Adult"
    }
    else{
        return "Minor"
    }
}

// let result=checkAge(19)
// console.log(result);

// Create a function to reverse a string.

function reverseString(name){
    let str=name.split("").reverse().join("")
    return str
}
// let result=reverseString("parvez")
// console.log(result);
