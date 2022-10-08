// update task
const editList = (e) => {
  const clicked = e.target.closest('#label');
  if (!clicked) return;
  clicked.addEventListener('keyup', () => {
    const taskList = JSON.parse(localStorage.getItem('todos')) || [];
    const targetList = parseInt(clicked.getAttribute('data-desc'), 10);
    const update = taskList.find((todo) => todo.index === targetList);
    update.description = clicked.value.trim();
    localStorage.setItem('todos', JSON.stringify(taskList));
  });
};

export default editList;