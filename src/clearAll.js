import { displayTask } from './AddRemove.js';

const todos = JSON.parse(localStorage.getItem('todos'));
const clearList = (e) => {
  const clicked = e.target.closest('#checkBox');
  if (!clicked) return;
  const targetList = parseInt(clicked.getAttribute('data-check'), 10);
  const taskList = JSON.parse(localStorage.getItem('todos')) || [];
  const update = taskList.find((todo) => todo.index === targetList);
  update.completed = !update.completed;
  localStorage.setItem('todos', JSON.stringify(taskList));
};
// update task
export const clear = () => {
  const clearAll = JSON.parse(localStorage.getItem('todos')) || [];
  const notCompleted = clearAll.filter((todo) => !todo.completed);
  todos.length = 0;
  let i = 0;
  notCompleted.forEach((element) => {
    element.index = i;
    i += 1;
  });
  todos.push(...notCompleted);
  localStorage.setItem('todos', JSON.stringify(todos));
  displayTask();
};

export default clearList;