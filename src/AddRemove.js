const todoList = document.getElementById('todoList');
let todos = JSON.parse(localStorage.getItem('todos'));

// display task
const displayTask = () => {
  let li = '';
  if (todos) {
    todos.forEach((todo) => {
      const completed = todo.completed ? 'checked' : '';
      li += `
        <div class="checkContainer">
        <div class="inputContainer">
            <input id="checkBox" type="checkbox"  ${completed} data-check="${todo.index}">
            <input id="label" data-desc="${todo.index}" value="${todo.description}">
        </div>
        <div class="btnContainer">
            <button><i id="${todo.index}" class="fa fa-ellipsis-v btnDelete"></i></button>    
        </div>
      </div>`;
    });
  }
  todoList.innerHTML = li;
};

// remove task
const removeList = (index) => {
  const newlist = todos.filter((element) => element.index !== index);
  todos.length = 0;
  let i = 1;
  newlist.forEach((element) => {
    element.index = i;
    i += 1;
  });
  todos.push(...newlist);
  localStorage.setItem('todos', JSON.stringify(todos));
  displayTask();
};

const textInput = document.getElementById('textInput');

// add task
const addList = (e) => {
  e.preventDefault();
  const userInput = textInput.value.trim();
  textInput.value = '';
  if (!userInput) return;
  if (!todos) {
    todos = [];
  }
  const list = {
    description: userInput,
    completed: false,
    index: todos.length + 1,
  };
  todos.push(list);
  localStorage.setItem('todos', JSON.stringify(todos));
  displayTask();
};

export { addList, removeList, displayTask };