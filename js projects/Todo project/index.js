const mainTodoElem = document.querySelector(".todo-elem");
const inputvalue = document.getElementById("inputValue");
const btn = document.querySelector(".btn");

let localTodoLists = [];
const getTodoListFromLocal = () => {
  return JSON.parse(localStorage.getItem("youtubeTodoList"));
};

const addTodoListLocalStorage = (localTodoLists) => {
  return localStorage.setItem(
    "youtubeTodoList",
    JSON.stringify(localTodoLists)
  );
};

localTodoLists = getTodoListFromLocal() || [];

const addTodoDynamicElement = (curElem) => {
  const divElement = document.createElement("div");
  divElement.classList.add("main_todo_div");
  divElement.innerHTML = `<li>${curElem}</li> <button class="deleteBtn">Delete</button>`;
  mainTodoElem.appendChild(divElement);
};

const addTodoList = (e) => {
  e.preventDefault();
  const todoListValue = inputvalue.value.trim();

  inputvalue.value = "";

  if (todoListValue !== "" && !localTodoLists.includes(todoListValue)) {
    localTodoLists.push(todoListValue);
    localTodoLists = [...new Set(localTodoLists)];
    console.log(localTodoLists);
    localStorage.setItem("youtubeTodoList", JSON.stringify(localTodoLists));

    addTodoDynamicElement(todoListValue);
  }
};

const showTodoList = () => {
  console.log(localTodoLists);
  localTodoLists.forEach((curElem) => {
    addTodoDynamicElement(curElem);
  });
};

showTodoList();

const removeTodoElem = (e) => {
  const todoToRemove = e.target;
  let todoListContent = todoToRemove.previousElementSibling.innerText;

  console.log(todoListContent);
  localTodoLists = localTodoLists.filter((curTodo) => {
    return curTodo !== todoListContent.toLowerCase();
  });

  addTodoListLocalStorage(localTodoLists);
  todoToRemove.parentElement.remove();
  console.log(localTodoLists);
};

mainTodoElem.addEve
ntListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("deleteBtn")) {
    removeTodoElem(e);
  }
});

btn.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("click");
});

btn.addEventListener("click", addTodoList);
