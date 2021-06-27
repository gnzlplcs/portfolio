let toDoList = [];
function renderTodo(todo) {
  localStorage.setItem('todoLSItem', JSON.stringify(toDoList));

  const list = document.querySelector('.todo-list');
  const item = document.querySelector(`[data-key='${todo.id}']`);

  if (todo.deleted) {
    item.remove();
    if (toDoList.length === 0) list.innerHTML = '';
    return
  }

  const isChecked = todo.completed ? 'done' : '';
  const node = document.createElement("li");
  node.setAttribute('class', `todo-item ${isChecked}`);
  node.setAttribute('data-key', todo.id);
  node.innerHTML = `
  <input id="${todo.id}" type="checkbox"/>
  <label for="${todo.id}" class="tick"></label>
  <span>${todo.content}</span>
  <button class="delete-todo btn btn-danger d-flex align-items-center">Remove
  </button>
  `;

  if (item) {
    list.replaceChild(node, item);
  } else {
    list.append(node);
  }

  console.log('renderTodo function invoked')
}

function addTodo(content) {
  const todo = {
    id: Date.now(),
    content,
    completed: false
  };

  toDoList.push(todo);
  renderTodo(todo);
  console.log('addTodo function invoked')
}


function toggleDone(key) {
  const index = toDoList.findIndex(item => item.id === Number(key));
  toDoList[index].completed = !toDoList[index].completed;
  renderTodo(toDoList[index]);
  console.log('toggleTodo function invoked')

}

function deleteTodo(key) {
  const index = toDoList.findIndex(item => item.id === Number(key));

  const todo = {
    deleted: true,
    ...toDoList[index]
  };

  toDoList = toDoList.filter(item => item.id !== Number(key));
  renderTodo(todo);
  console.log('deleteTodo function invoked')
}

const form = document.querySelector('.form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('.todo-input');

  const content = input.value.trim();
  if (content !== '') {
    addTodo(content);
    input.value = '';
    input.focus();
  }
  console.log('form function invoked')

});

const list = document.querySelector('.todo-list');
list.addEventListener('click', event => {
  if (event.target.classList.contains('tick')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }

  if (event.target.classList.contains('delete-todo')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
  console.log('list function invoked')
});

const active = document.querySelector('.active-todo');
active.addEventListener('click', () => {
  const activeTodos = toDoList.filter(item => item.completed === false);
  activeTodos.forEach(t => {
    renderTodo(t);
  });
  console.log('active function invoked')
});

const complete = document.querySelector('.completed-todo');
complete.addEventListener('click', () => {
  const completeTodos = toDoList.filter(item => item.completed === true);
  completeTodos.forEach(t => {
    renderTodo(t);
  });
  console.log('complete function invoked')
});

document.addEventListener('DOMContentLoaded', () => {
  const ref = localStorage.getItem('todoLSItem');
  if (ref) {
    toDoList = JSON.parse(ref);
    toDoList.forEach(t => {
      renderTodo(t);
    });
  }
});