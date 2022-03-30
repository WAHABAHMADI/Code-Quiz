//create variables for all elements we are targeting with JS
var timer = document.querySelector("#time");
var thebox = document.querySelector("#theBox");
var startBtn = document.querySelector(".start");
var question_container = document.querySelector("#question-container");
var titles = document.querySelector("#title");
var choices = document.querySelector("#choices");
var gameOverContainer = document.querySelector("#gameOver");
var playerScore = document.querySelector(".playerScore");
var initials = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");

//variables to keep track of time, and current question
var time = 75;
var index = 0;
var timerEl;

var questionIndex = 0;
//variable for questions
var questions = [
  {
    titles: "Comonly used data types do not include:",
    possibleAnswers: ["1.strings", "2.Boleans", "3.Alerts", "4,Numbners"],
    rightAnswer: "3.alerts",
  },

  {
    titles: "The condition in an if / else statement is enclosed within ____.",
    possibleAnswers: [
      "1.Quotes",
      "2.Curly brackests",
      "3.Parantheses",
      "4.Square brackets",
    ],
    rightAnswer: "3.Parantheses",
  },

  {
    titles: "Arrays in JavaScript can be used to store _____.",
    possibleAnswers: [
      "1.Numbers and strings",
      "2.Other arrays",
      "3.Booleans",
      "4.All of above",
    ],
    rightAnswer: "4.All of above",
  },

  {
    titles:
      "A very usefull tool used during development and debugging for printing content to the dubugger is: ",
    possibleAnswers: [
      "1.JavaSript",
      "2.Terminal/ bash",
      "3.For loops",
      "4.Console log",
    ],
    rightAnswer: "4.Console log",
  },
];

function startGame() {
  //when the start button is clicked, the timer is started, the box container is hidden, the question container is displayed

  timer.textContent = time;

  timerEl = setInterval(function () {
    time--;
    timer.textContent = time;

    if(time ===0){
        gameOver();
    }

  }, 1000);

  thebox.setAttribute("class", "hidden");
  question_container.removeAttribute("class");

  //run a funtion that shows your first question
  showQuestion();
}

function showQuestion() {
  titles.textContent = questions[questionIndex].titles;
  choices.innerHTML = "";
  for (var i = 0; i < questions[questionIndex].possibleAnswers.length; i++) {
    var btn = document.createElement("button");
    btn.textContent = questions[questionIndex].possibleAnswers[i];
    btn.setAttribute("class", "choice");
    btn.setAttribute("value", questions[questionIndex].possibleAnswers[i]);

    btn.onclick = checkAnswers;
    choices.appendChild(btn);
  }
}

function checkAnswers() {
  if (this.value !== questions[questionIndex].rightAnswer) {
    time -= 10;

    timer.textContent = time;
  }

  questionIndex++;

  if (questions.length === questionIndex) {
    gameOver();
  } else {
    showQuestion();
  }
}

function gameOver() {
  //when the game is over you need to hide the question container and show the gameover container. we need to stop the timer. we need to  display the final score on the page.
  gameOverContainer.removeAttribute("class");
  question_container.setAttribute("class", "hidden");
  clearInterval(timerEl);
  playerScore.textContent = time;
}

function totalScore() {
  //grab the value of what the user types into the intials box
  var initialsVarible = initials.value;
  var existingHighScores = localStorage.getItem("highScores");

  // var highScores = [parseIntJSON.parse(localStorage.getItem("highScores"))] || []
  // console.log(highScores);
  var newScore = { score: time, userInitial: initialsVarible };

  var highScores = [];

  if (!existingHighScores) {
    var newHighScore = highScores.push(newScore);
    localStorage.setItem("highScores", JSON.stringify(newHighScore));
  }
  var parsedHighScores = JSON.parse(existingHighScores);
  parsedHighScores.push(newScore);
  localStorage.setItem("highScores", JSON.stringify(parsedHighScores));
  location.replace("./scores.html");
}

//create an score array that will hold all your userscore objects. ** check local storage to see if there are any scores saved there already (retrieve data from local storage) or make this an empty array

//create a new user score object that contains the users score and initals

//push the new user score object into the score array

//save to local storage

//redirect the page to the scores.html
// function savedScores(){
//     var highScores = [JSON.parse(localStorage.getItem("highScores"))]
//     console.log (highScores);
//     highScores.forEach(function(score){
//     var grades =document.createElement("li")
//     grades.textContent = score.score + " " + score.userInitial
//     playerScore.appendChild(grades);
//     })

//

//eventlistenrs
startBtn.addEventListener("click", startGame);
submitBtn.addEventListener("click", totalScore);
