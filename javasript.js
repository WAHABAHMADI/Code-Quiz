//create variables for all elements we are targeting with JS
var timer = document.querySelector('#time');
var thebox = document.querySelector("#theBox");
var startBtn = document.querySelector(".start");
var question_container =document.querySelector("#question-container");
var titles = document.querySelector("#title");
var choices = document.querySelector("#choices");
var gameOver = document.querySelector("#gameOver");
var playerScore = document.querySelector(".playerScore");
var initials = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");

//variables to keep track of time, and current question
var time = 75;
var index = 0;
var timerEl;

//variable for questions
var questions = [
    {
        titles: "Comonly used data types do not include:", 
        possibleAnswers: ["1.strings", "2.Boleans", "3.Alerts", "4,Numbners"], 
        rightAnswer: "3.alerts",
    },

    {    titles: "The condition in an if / else statement is enclosed within ____.",
        possibleAnswers: ["1.Quotes", "2.Curly brackests", "3.Parantheses", "4.Square brackets"],
        rightAnswer: "3.Parantheses",
    },

    {   titles: "Arrays in JavaScript can be used to store _____.",
        possibleAnswers: ["1.Numbers and strings", "2.Other arrays", "3.Booleans", "4.All of above"],
        rightAnswer: "4.All of above",
    },
]


function startGame(){
    //when the start button is clicked, the timer is started, the box container is hidden, the question container is displayed

    timer.textContent = time

    timerEl = setInterval(function(){
    time--
    timer.textContent = time
    }, 1000)

    thebox.setAttribute('class', 'hidden')
    question_container.removeAttribute('class')

    //run a funtion that shows your first question
    showQuestion()
}

function showQuestion(){
    console.log(questions[index].titles)
    console.log(questions[index].possibleAnswers) // you can loop over, to append a button element for each string in the array
    console.log(questions[index].rightAnswer)
    //single out the object from the question array
    //to get the current question from an array, set a variable, name whateever, set it to question and the current question index.
    //1. variable=current=questions[0]
    //2. variable title element= document.getelement (<#title>) = titles,
}


//eventlistenrs
startBtn.addEventListener("click", startGame)

// creat a variable for a button (choices).setatribute. to be possibleAnswers. 

//possibleanswers = value ()=, score++






