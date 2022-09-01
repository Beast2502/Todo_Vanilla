// selectors
const todoInput =  document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// event listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck)

// functions
function addTodo(event){
    // Prevent the form from submitting
    event.preventDefault();

    // todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // create LI
    const newTodo= document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Check Mark button
    const completedButton  = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // check the trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // Append to the list
    todoList.appendChild(todoDiv);
    // clear  Todo inout value
    todoInput.value = " ";


}

function deleteCheck(e){
const item = e.target;
// delete todo
if(item.classList[0] === 'trash-btn'){
    item.remove();
}
}