import _ from 'lodash';
import './style.css';
// import data from 'taskData.js';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());

const taskData = [
    {
        description: 'wash the dishes',
        completed: true,
        index: 1,
    },
    {
        description: 'complete To Do list project',
        completed: true,
        index: 2,
    },
    {
        description: 'Attend family meeting',
        completed: true,
        index: 3,
    }
];

const todoList = document.getElementById('.todoList');

taskData.forEach((taskData) => {
  const {
    description, completed, index,
  } = taskData;

  const list = document.createElement('div');
  list.innerHTML += `
            <div class="checkContainer">
            <label for="checkbox"><input type="checkbox">${description}</label>
            <p>${completed}</p>
            <p>${index}</p>
            <i class="fa-solid fa-ellipsis-vertical"></i>    
        </div>`;
  todoList.appendChild(list);
});