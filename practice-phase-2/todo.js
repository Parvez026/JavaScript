let todos = [];

function addTodo(task) {
  todos.push({ id: todos.length+1, task, done: false });
}

function completeTodo(id) {
  let todo = todos.find((item) => item.id === id);
  if (todo) todo.done = true;
}

function removeTodo(id) {
  todos = todos.filter((item) => item.id != id);
}

function showTodo() {
  todos.forEach((t) => {
     console.log(`${t.id}. [${t.done ? "x" : " "}] ${t.task}`);
  });
}

addTodo("Learn Js");
addTodo("Build a project");
addTodo("Sleep");
completeTodo(1)
showTodo()