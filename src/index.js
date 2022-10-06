// import _ from 'lodash';
import './style.css';

// function component() {
//   const element = document.createElement('div');

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add('hello');
//   return element;
// }

// document.body.appendChild(component());

const todoList = document.getElementById('todoList');
// window.addEventListener('load', () => {
//     todoList.style.display= "block";
//     }
// );

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