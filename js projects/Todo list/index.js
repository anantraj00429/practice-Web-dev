let input = document.querySelector("#search");
let clickBtn = document.querySelector("#btn");
let todoItem = document.querySelector(".todoList");

const addTodo = () => {
  console.log(input.value);
  let pElem = document.createElement("p");
  pElem.textContent = input.value;
  console.log(pElem);
  todoItem.append(pElem);

  input.value = "";
};
clickBtn.addEventListener("click", () => {
  addTodo();
});
