// const student = {
//   name: "rahul",
//   age: 23,
//   city: "shahdol",
//   greet:function(){
//     console.log("Hello,i am parvez,nice to meet you",this.name);
//   }
// };
// console.log(student.greet());

const student = {
  name: "rahul",
  age: 23,
  city: "shahdol",
  teacher:{
    teacherName:"Parvez",
    age:24
  }
}

const std1={
    naam:"alam",
    old:20
}

const copyObj={...student,...std1}

console.log(copyObj);
