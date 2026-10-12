let obj = { name: "aman", age: 23, city: "shahdol" };

// for (const key in obj) {
//     console.log(key,":",obj[key]);

// }

// Object.keys(obj).forEach((key)=>{
//     console.log(key,":",obj[key]);

// })

// for (const [key,value ] of Object.entries(obj)) {
//     console.log(key,":",value);

// }

// let todos = [];
//
// function addTask(task) {
//   todos.push({ id: todos.length + 1, task, done: false });
// }
//
// function completeTask(id) {
//   let todo = todos.find((t) => t.id === id);
//   if (todo) todo.done = true;
// }
//
// function removeTask(id) {
//   todos = todos.filter((t) => t.id !== id);
// }
//
// function showTask() {
//   todos.forEach((t) => {
// console.log(`${t.id}. [${t.done ? "x" : ""}] ${t.task}`);
//   });
// }
// addTask("Learn java");
// completeTask(1);
// showTask(1);

// let students = [
//     { name: "Aman", marks: [80, 90, 75] },
//     { name: "Priya", marks: [95, 85, 92] },
//     { name: "Raj", marks: [60, 55, 70] }
// ];

// function getAvg(marks){
//     return marks.reduce((sum,m)=>sum+m,0)/marks.length
// }

// function getGrade(avg){
//     if(avg>=90) return "A"
//     if(avg>=80) return "B"
//     if(avg>=60) return "C"
//     return "Fail"
// }

// students.forEach(s=>{
//     let avg=getAvg(s.marks);
//     console.log(`Name:${s.name} Avg:${avg.toFixed(2)} Grade:${getGrade(avg)}`);

// })

// let cart=[]

// function addToCart(name,price,qty=1){
//     let existing=cart.find((item)=>item.name===name)

//     if(existing){
//         existing.qty+=qty;
//     }
//     else{
//         cart.push({name,price,qty})
//     }
// }

// function removeItem(name){
//     cart=cart.filter((item)=>item.name!==name)
// }

// function getTotal(price){
//     return cart.reduce((sum,item)=>sum+item.price*item.qty,0)
// }

// function showCart(){
//     cart.forEach((item)=>{
//         console.log(`${item.name}x${item.qty}=₹${item.price*item.qty}`);

//     })

//     console.log(`Total:${getTotal()}`);

// }

// addToCart("pen",50,5)
// addToCart("book",40,4)
// addToCart("noteBook",30,3)
// showCart()

// function wordFrequency(text) {
//     let words = text.toLowerCase().split(/\s+/);
//     let freq = {};

//     words.forEach(word => {
//         freq[word] = (freq[word] || 0) + 1;
//     });

//     return freq;
// }

// let text = "the quick brown fox jumps over the lazy dog the fox is quick";
// console.log(wordFrequency(text));
// // { the: 3, quick: 2, brown: 1, fox: 2, jumps: 1, over: 1, lazy: 1, dog: 1, is: 1 }

// let library = {
//   books: [],

//   addBook(title, author) {
//     this.books.push({
//       id: this.books.length + 1,
//       title,
//       author,
//       borrowed: false,
//     });
//   },

//   borrowBook(id) {
//     let book = this.books.find((b) => b.id == id);
//     if (!book) return "Book not found";
//     if (book.borrowed) return "Already Borrow";
//     book.borrowed = true;
//     return `You borrowed "${book.title}"`;
//   },

//   returnBook(id) {
//     let book = this.books.find((b) => b.id == id);
//     if (!book) return "Book not found";
//     book.borrowed = false;
//     return `You Returned "${book.title}"`;
//   },

//   availableBooks() {
//     return this.books.filter((b) => !b.borrowed);
//   },
// };

// library.addBook("Atomic Habits", "James Clear");
// library.addBook("Deep Work", "Cal Newport");
// console.log(library.borrowBook(1));
// console.log(library.availableBooks());
