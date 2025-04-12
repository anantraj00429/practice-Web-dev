let btn1 = document.getElementById("mybutton");
let btn2 = document.getElementById("mybutton2");
let copyDiv = document.querySelector(".copyDiv");
let rgb1 = "#000";
let rgb2 = "#fff";

const hexValues = () => {
  let myHexValues = "0123456789abcdef";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors = colors + myHexValues[Math.floor(Math.random() * 16)];
  }
  return colors;
};

const handleButton = () => {
  rgb1 = hexValues();
  btn1.innerText = rgb1;
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  copyDiv.innerHTML = `background-image: linear-gradient(to right = ${rgb1}, to left = ${rgb2})`;
  console.log(rgb1);
};

const handleButton2 = () => {
  rgb2 = hexValues();
  btn2.innerText = rgb2;
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  copyDiv.innerHTML = `background-image: linear-gradient(to right = ${rgb1}, to left = ${rgb2} )`;
};

btn1.addEventListener("click", handleButton);
btn2.addEventListener("click", handleButton2);
