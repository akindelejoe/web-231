"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Joe
      

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
"use strict";


const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;
let quizTimer; 

const questionInputs = document.querySelectorAll("#quiz input"); 

function startQuizHandler() {
    timeLeft = quizTime;
    quizClock.value = timeLeft;
    overlay.classList.add("hidequiz"); // Hide overlay

    // ✅ Enable inputs and clear previous answers
    questionInputs.forEach(input => {
        input.value = ""; 
        input.disabled = false;  // ✅ Ensure inputs are enabled
        input.style.backgroundColor = ""; // Reset styles
    });

    quizTimer = setInterval(updateTimer, 1000);
}

// Function to update the timer
function updateTimer() {
    timeLeft--;
    quizClock.value = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(quizTimer);
        timeLeft = 0;
        checkAnswers();
    }
}

// Function to check answers
function checkAnswers() {
    questionInputs.forEach((input, index) => {
        if (input.value !== correctAnswers[index]) {
            input.style.backgroundColor = "red"; // Mark incorrect
        } else {
            input.style.backgroundColor = "lightgreen"; // Mark correct
        }
    });
}

// Event listener for "Start Quiz" button
startQuiz.addEventListener("click", startQuizHandler);
