const clearList = (e) => {
  const clicked = e.target.closest('#checkBox');
  if (!clicked) return;
  const targetList = parseInt(clicked.getAttribute('data-check'), 10);
  const taskList = JSON.parse(localStorage.getItem('todos')) || [];
  const update = taskList.find((todo) => todo.index === targetList);
  update.completed = !update.completed;
  localStorage.setItem('todos', JSON.stringify(taskList));
};

export default clearList;