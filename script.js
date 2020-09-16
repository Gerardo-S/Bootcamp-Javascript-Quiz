// <!-- link View High score to score.html when clicked -->
//     <!-- score.html page to include header to say "Highscores" -->
//     <!-- add two buttons to score.html "Go Back & Clear Highscores" -->


//     <!-- add event to both buttons so when clicked "Go Back links to index.html" -->
//     <!-- add event to Clear Highscores when clicked it sets scores array to blank-->
// Variables for querySelector
var startButton = document.querySelector(".startButton");
var timer = document.querySelector("#timer");
var questionsArray = document.querySelector("h1");
var instructions = document.querySelector("p");
var userChoices = document.querySelector("#choices");
var orderedList = document.querySelector("ol");
// Need an array or object with questions
var questions = ["Commonly used data types DO NOT include:"];
var answers = { question1: ["strings", "booleans", "alerts", "numbers"] };
var secondsLeft = 60;

//     
// Timer starts at 60 decreasing by 1 second 
function countDown() {
    var timerInterval = setInterval(function () {

        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            timer.textContent = "Time:0";
        }

    }, 1000);
}
// When start  button is clicked timer  begins 
startButton.addEventListener("click", function (event) {

    var element = event.target;
    if (element.matches("button") === true) {

        countDown();
        startButton.setAttribute("style", "display:none");
        // Instructions switch to question 1 
        questionsArray.textContent = questions;
        instructions.textContent = "";
        // list the 4 choices
        // Maybe make this into a function so when next question is presented code can call upon this function
        for (var i = 0; i < 4; i++) {


            var li = document.createElement("li");
            li.textContent = answers.question1[i];
            orderedList.appendChild(li);

        }


    }
});
//     <!-- User will click between options 1-4 -->
//     <!-- if user clicks incorrect answer timer is reduced by 10seconds -->
//     <!-- when user clicks option second question will replace questions1  -->
//     <!-- New options appear  -->
//     <!-- repeat code until timer runs out -->
//     <!-- when timer runs out Header replaced with "All done!" -->
//     <!--final score is shown as p tag -->
//     <!-- "Enter initials" with form for input & submit button -->
//     <!-- information is saved in localStorage -->
//     <!-- When submit button is clicked score appears as a list on score.html -->
//     <!--Keep in mind that incorrect answers will penalize your score/time by ten seconds!" -->