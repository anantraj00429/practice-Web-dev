let gameseq = [],
  userseq = [],
  btns = ["red", "aqua", "orange", "pink"];
let start = false,
  level = 0,
  lives = 3; // Initialize lives

const p = document.querySelector("p");
const livesDisplay = document.createElement("p"); // Create an element for lives
livesDisplay.innerText = `Lives: ${lives}`;
document.body.appendChild(livesDisplay); // Append lives display to the body

const allBtns = document.querySelectorAll(".box");

// Start the game on key press
document.addEventListener(
  "keypress",
  () => !start && ((start = true), levelup())
);

const flash = (btn, cls, time = 500) => {
  btn.classList.add(cls);
  setTimeout(() => btn.classList.remove(cls), time);
};

const levelup = () => {
  userseq = [];
  p.innerText = `Level ${++level}`;

  let randomcolor = btns[Math.floor(Math.random() * 4)];
  gameseq.push(randomcolor);

  // Flash the entire sequence
  gameseq.forEach((color, index) => {
    setTimeout(() => {
      let randBtn = document.querySelector(`.${color}`);
      flash(randBtn, "flash");
    }, 600 * index);
  });
};

const checkanswer = (currentlevel) => {
  if (userseq[currentlevel] !== gameseq[currentlevel]) {
    lives--; // Decrease lives if the user is wrong
    livesDisplay.innerText = `Lives: ${lives}`; // Update the lives display

    if (lives === 0) {
      p.innerText = "Game Over, Press Any Key to Restart";
      return resetgame();
    } else {
      p.innerText = `Wrong! You have ${lives} lives left. Try again!`;
      userseq = []; // Reset user sequence but keep the current game sequence
    }
  } else if (userseq.length === gameseq.length) {
    setTimeout(levelup, 1000); // Move to the next level after the sequence is completed
  }
};

const btnpress = function () {
  userseq.push(this.classList[1]);
  flash(this, "flash1");
  checkanswer(userseq.length - 1);
};

const resetgame = () => {
  start = false;
  gameseq = [];
  level = 0;
  lives = 3; // Reset lives
  livesDisplay.innerText = `Lives: ${lives}`; // Reset lives display
};

// Add click event listeners to all buttons
allBtns.forEach((btn) => btn.addEventListener("click", btnpress));

// let gameseq = [],
//   userseq = [],
//   btns = ["red", "aqua", "orange", "pink"];
// let start = false,
//   level = 0;

// const p = document.querySelector("p");
// const allBtns = document.querySelectorAll(".box");

// document.addEventListener(
//   "keypress",
//   () => !start && ((start = true), levelup())
// );

// function flash(btn, cls, time = 500) {
//   btn.classList.add(cls);
//   setTimeout(() => btn.classList.remove(cls), time);
// }

// const levelup = () => {
//   userseq = [];
//   p.innerText = `Level ${++level}`;
//   let randomcolor = btns[Math.floor(Math.random() * 4)];
//   gameseq.push(randomcolor);
//   flash(document.querySelector(`.${randomcolor}`), "flash");
// };

// const checkanswer = (currentlevel) => {
//   if (userseq[currentlevel] !== gameseq[currentlevel]) {
//     p.innerText = "Game Over, Press Any Key to Restart";
//     return resetgame();
//   }
//   if (userseq.length === gameseq.length) setTimeout(levelup, 1000);
// };

// const btnpress = function () {
//   userseq.push(this.classList[1]);
//   flash(this, "flash1");
//   checkanswer(userseq.length - 1);
// };

// const resetgame = () => {
//   start = false;
//   gameseq = [];
//   level = 0;
// };

// allBtns.forEach((btn) => btn.addEventListener("click", btnpress));

// let gameseq = [];
// let userseq = [];
// let btns = ["red", "aqua", "orange", "pink"];
// let start = false;
// let level = 0;

// let p = document.querySelector("p");

// // Start the game on key press
// document.addEventListener("keypress", function () {
//   if (!start) {
//     start = true;
//     levelup();
//   }
// });

// // Flash the button
// function btnflash(btn) {
//   btn.classList.add("flash");
//   setTimeout(function () {
//     btn.classList.remove("flash");
//   }, 500);
// }

// // Flash the button when the user clicks
// function userflash(btn) {
//   btn.classList.add("flash1");
//   setTimeout(function () {
//     btn.classList.remove("flash1");
//   }, 300);
// }

// // Level up the game and show a new sequence
// function levelup() {
//   userseq = []; // Reset user sequence
//   level++;
//   p.innerText = `Level ${level}`;

//   let randIdx = Math.floor(Math.random() * 4); // Corrected range (0 to 3)
//   let randomcolor = btns[randIdx];
//   gameseq.push(randomcolor);

//   // Flash the randomly chosen button
//   let randBtn = document.querySelector(`.${randomcolor}`);
//   btnflash(randBtn);
// }

// // User button press handler
// function btnpress() {
//   let btn = this;
//   let color = btn.classList[1]; // Get the color class (like 'red', 'aqua', etc.)

//   userflash(btn); // Flash the user's button
//   userseq.push(color); // Add the user's choice to the userseq

//   // Check if the user is correct so far
//   checkanswer(userseq.length - 1);
// }

// // Check the user's input
// function checkanswer(currentlevel) {
//   if (userseq[currentlevel] === gameseq[currentlevel]) {
//     // If the user finished the sequence correctly
//     if (userseq.length === gameseq.length) {
//       setTimeout(levelup, 1000); // Move to the next level after a short delay
//     }
//   } else {
//     // Game over
//     p.innerText = "Game Over, Press Any Key to Restart";
//     resetgame();
//   }
// }

// // Reset the game
// function resetgame() {
//   start = false;
//   gameseq = [];
//   level = 0;
// }

// // Add click event listeners to all buttons
// let allBtns = document.querySelectorAll(".box");
// allBtns.forEach(function (btn) {
//   btn.addEventListener("click", btnpress);
// });

// let gameseq = [];
// let userseq = [];

// let btns = ["red", "aqua", "orange", "pink"];

// let start = false;
// let level = 0;

// let p = document.querySelector("p");

// document.addEventListener("keypress", function () {
//   if (start == false) {
//     start = true;
//     levelup();
//   }
// });

// function btnflash(btn) {
//   btn.classList.add("flash");
//   setTimeout(function () {
//     btn.classList.remove("flash");
//   }, 500);
// }

// function userflash(btn) {
//   btn.classList.add("flash1");
//   setTimeout(function () {
//     btn.classList.remove("flash1");
//   }, 500);
// }

// function levelup() {
//   level++;
//   p.innerText = `Level${level}`;

//   let randIdx = Math.floor(Math.random() * 3);
//   let randomcolor = btns[randIdx];
//   console.log(randomcolor);
//   console.log(randIdx);
//   let randBtn = document.querySelector(`.${randomcolor}`);
//   gameseq.push(randomcolor);
//   btnflash(randBtn);
// }

// function btnpress() {
//   let btn = this;
//   userflash(btn);
// }

// let allBtns = document.querySelectorAll(".btn");
// for (btns of allBtns) {
//   btns.addEventListener("click", btnpress);
// }
