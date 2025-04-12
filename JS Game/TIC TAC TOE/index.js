let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2, 5, 5, 0],
  [3, 4, 5, 5, 15, 0],
  [6, 7, 8, 5, 25, 0],
  [0, 3, 6, -5, 15, 90],
  [1, 4, 7, 5, 15, 90],
  [2, 5, 8, 15, 15, 90],
  [0, 4, 8, 5, 15, 45],
  [2, 4, 6, 5, 15, 135],
];

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
  document.querySelector(".imgbox img").style.width = "0px"; // Hide the image
};

boxes.forEach((box) => {
  console.log("box was clicked");
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      console.log("box o was clicked");
    } else {
      box.innerText = "X";
      turnO = true;
      console.log("box X was clicked");
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner, pattern) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "200px";
  document.querySelector(".hide").style.width = "0px";
  document.querySelector(
    ".line1"
  ).style.transform = `translate(${pattern[3]}vw, ${pattern[4]}vw) rotate(${pattern[5]}deg)`;
  document.querySelector(".line1").style.width = "20vw";
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    console.log(pattern[0], pattern[1], pattern[2]);
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val == pos3Val) {
        showWinner(pos1Val, pattern);

        return true;
      }
    }
  }
  return false;
};

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
