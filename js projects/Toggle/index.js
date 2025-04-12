let myButton = document.querySelector("#toggleBtn");
let rectDiv = document.querySelector(".rectangle");

const handleMouseEvents = () => {
  console.log("click");
  rectDiv.style.background = "#f5ee63";
  rectDiv.style.borderRadius = "50%";
};

const handleMouseEvents2 = () => {
  rectDiv.style.background = "#000";
  rectDiv.style.translate = "0rem";
  rectDiv.style.borderRadius = "1rem";
  rectDiv.classList.add("addTransition");
  console.log("doubleclick");
  myButton.removeEventListener("click", handleMouseEvents);
};

const handleMouseEvents3 = () => {
  console.log("mouseover");
  rectDiv.classList.add("addTransition3");
};

const handleMouseEvents4 = () => {
  console.log("mousedout");
  rectDiv.classList.add("addTransition4");
};

const handleMouseEvents5 = () => {
  console.log("mousedown");
  rectDiv.classList.add("addTransition5");
  myButton.removeEventListener("mouseup", handleMouseEvents6);
};

const handleMouseEvents6 = () => {
  console.log("mouseup");
  rectDiv.classList.add("addTransition6");
  myButton.removeEventListener("mousedown", handleMouseEvents5);
};

myButton.addEventListener("click", handleMouseEvents);

// myButton.addEventListener("click", (e) => {
//     handleMouseEvents(e.target);
// });

myButton.addEventListener("dblclick", handleMouseEvents2);
myButton.addEventListener("mouseover", handleMouseEvents3);
myButton.addEventListener("mouseout", handleMouseEvents4);
myButton.addEventListener("mousedown", handleMouseEvents5);
myButton.addEventListener("mouseup", handleMouseEvents6);
