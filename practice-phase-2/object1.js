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
  teacher: {
    teacherName: "Parvez",
    age: 24,
  },
};

// const std1={
//     naam:"alam",
//     old:20
// }

// const copyObj={...student,...std1}

// console.log(copyObj);

// console.log(Object.keys(student));
// console.log(Object.values(student));

// for (const key in student) {
//   console.log(key, ":", student[key]);
// }

// for (let [key, values] of Object.entries(student)) {

//   console.log(values);
// }

// let freezed=Object.seal(student)

// student.name="Parvez";
// console.log(student.name);

const users = [
  {
    id: 1,
    name: "Parvez",
    age: 22,
  },
  {
    id: 2,
    name: "Parvez",
    age: 23,
  },
  {
    id: 3,
    name: "Parvez",
    age: 24,
  },
  {
    id: 4,
    name: "Parvez",
    age: 24,
  },
];

console.log(users.filter((age)=>age.age>22));

