import './style.css';
const todoList = document.getElementById('todoList');

const taskData = [
  {
    description: 'wash the dishes',
    completed: true,
    index: 1,
  },
  {
    description: '  Complete To Do list project',
    completed: true,
    index: 2,
  },
  {
    description: 'Attend family meeting',
    completed: true,
    index: 3,
  },
];

let list = '';
taskData.forEach((data) => {
  list += `


  <div id="${data.index}" class="checkContainer">
  <div class="inputContainer">
      <input id="checkBox" type="checkbox"  required ${data.index}>
      <p id="label">${data.description}</p>
  </div>
  <div class="btnContainer">
      <button class="btnDelete">&#65049</button>    
  </div>
</div>
`;
});
todoList.innerHTML = list;