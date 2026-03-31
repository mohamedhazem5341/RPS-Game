let computerPlay;

let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");
let playerImg = document.getElementById("playerImg");
let computerImg = document.getElementById("computerImg");
let vs = document.getElementById("vs");
let resultBar = document.getElementById("resultBar");
let gameResult = document.getElementById("gameResult");

let wins = 0;
let loses = 0;
let ties = 0;

// to show game results to user and its gets updated from btn functions
gameResult.innerHTML = `<h1 style="color: lime; opacity:0.7">Wins: ${wins} </h1> <h1 style="color: red; opacity:0.7"> Loses: ${loses} </h1> <h1 style="color: yellow; opacity:0.7"> Ties: ${ties}</h1>`;

let randomPlay;
let result;
let resultBarAnimation = (resultBar.style.animation =
  "barsliderun .3s ease forwards");

function randomly() {
  if (randomPlay < 4) {
    // from nu 1,2,3 for rock
    computerPlay = "rock";
    computerImg.innerHTML = `<img  src="/images/rock.png" alt="" />`;
  } else if (randomPlay < 7) {
    // from nu 4,5,6 for paper
    computerPlay = "paper";
    computerImg.innerHTML = `<img  src="/images/paper.png" alt="" />`;
  } else if (randomPlay <= 9) {
    // from nu 7,8,9 for scissors
    computerPlay = "scissors";
    computerImg.innerHTML = `<img  src="/images/scissors.png" alt="" />`;
  }
}

function resultBarColor() {
  if (result === "win") {
    resultBar.style.display = "block";
    resultBar.style.content = "block";
    resultBar.style.backgroundColor = "rgba(78, 204, 0, 0.709)";
    resultBarAnimation;
  } else if (result === "lose") {
    resultBar.style.display = "block";
    resultBar.style.backgroundColor = "rgba(204, 0, 0, 0.709)";
    resultBarAnimation;
  } else if (result === "tie") {
    resultBar.style.display = "block";
    resultBar.style.backgroundColor = "rgba(206, 206, 0, 0.709)";
    resultBarAnimation;
  }
}

function rock() {
  randomPlay = Math.floor(Math.random() * 9) + 1;
  randomly();
  if (computerPlay === "rock") {
    result = "tie";
  } else if (computerPlay === "paper") {
    result = "lose";
  } else if (computerPlay === "scissors") {
    result = "win";
  }
  playerImg.innerHTML = `<img  src="/images/rock.png" alt="" />`;
  vs.style.display = "block";
  resultBarColor();

  if (result === "win") {
    wins++;
  } else if (result === "lose") {
    loses++;
  } else if (result === "tie") {
    ties++;
  }
  gameResult.innerHTML = `<h1 style="color: lime; opacity:0.7">Wins: ${wins} </h1> <h1 style="color: red; opacity:0.7"> Loses: ${loses} </h1> <h1 style="color: yellow; opacity:0.7"> Ties: ${ties}</h1>`;

  console.log(result);
}

function paper() {
  randomPlay = Math.floor(Math.random() * 9) + 1;
  randomly();

  if (computerPlay === "rock") {
    result = "win";
  } else if (computerPlay === "paper") {
    result = "tie";
  } else if (computerPlay === "scissors") {
    result = "lose";
  }

  playerImg.innerHTML = `<img  src="/images/paper.png" alt="" />`;
  vs.style.display = "block";
  resultBarColor();

  if (result === "win") {
    wins++;
  } else if (result === "lose") {
    loses++;
  } else if (result === "tie") {
    ties++;
  }
  gameResult.innerHTML = `<h1 style="color: lime; opacity:0.7">Wins: ${wins} </h1> <h1 style="color: red; opacity:0.7"> Loses: ${loses} </h1> <h1 style="color: yellow; opacity:0.7"> Ties: ${ties}</h1>`;
  console.log(result);
}

function scissors() {
  randomPlay = Math.floor(Math.random() * 9) + 1;
  randomly();

  if (computerPlay === "rock") {
    result = "lose";
  } else if (computerPlay === "paper") {
    result = "win";
  } else if (computerPlay === "scissors") {
    result = "tie";
  }

  playerImg.innerHTML = `<img  src="/images/scissors.png" alt="" />`;
  vs.style.display = "block";
  resultBarColor();

  if (result === "win") {
    wins++;
  } else if (result === "lose") {
    loses++;
  } else if (result === "tie") {
    ties++;
  }
  gameResult.innerHTML = `<h1 style="color: lime; opacity:0.7">Wins: ${wins} </h1> <h1 style="color: red; opacity:0.7"> Loses: ${loses} </h1> <h1 style="color: yellow; opacity:0.7"> Ties: ${ties}</h1>`;
  console.log(result);
}