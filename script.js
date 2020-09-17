
// Variables for querySelector
var startButton = document.querySelector(".startButton");
var timer = document.querySelector("#timer");
var questionsArray = document.querySelector("h1");
var instructions = document.querySelector("p");
var userChoices = document.querySelector("#choices");
var orderedList = document.querySelector("ol");
var quiz = document.querySelector("#questions");
var viewHighscores = document.querySelector("#viewScore");
var scoreList = document.querySelector(".score-form")
var userInitialsID = document.querySelector("#user-initials");
// Need an array or object with questions
var questions = {question1:["Commonly used data types DO NOT include:"],question2:["The condition in an if/else statement is enclosed within _______."]};
var answers = { answer1: ["strings", "booleans", "alerts", "numbers"], answer2:["quotes","curly brackets", "parentheses", "square brackets"]};
var secondsLeft = 60;
var userInitials= "";
var savedInitials = localStorage.getItem("initials");
var score="";
localStorage.setItem("initials",userInitials);
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
        questionsArray.textContent = questions.question1;
        instructions.textContent = "";
        // list the 4 choices
        
        for (var i = 0; i < 4; i++) {

            var li = document.createElement("li");
            li.textContent = answers.answer1[i];
            li.setAttribute("id", i);
            
            orderedList.appendChild(li);
            
        }
  
    }

    var option1 = document.getElementById("0");
    var option2 = document.getElementById("1");
    var option3 = document.getElementById("2");
    var option4 = document.getElementById("3");
    
// Question 1 -----------------------------------------------------------------------------------------
// Correct answer chosen
    
    option3.addEventListener("click", function(event){

        var element = event.target;
        if( element.matches("li") === true){
    
            alert("this is correct");
            score + 1;   
        }
        
    })
    console.log (score);
// Incorrect answers
    option1.addEventListener("click", function(event){

        var element = event.target;
        if( element.matches("li") === true){

            
            if (secondsLeft > 0){

                secondsLeft = secondsLeft - 10;
                                   
            }
            else{
                quiz.setAttribute("style", "display:none");
                timer.textContent= "Game Over";
                viewHighscores.setAttribute("style","display:none");
                scoreList.setAttribute("style","visibility: visible");

            }

        }
        
        
    })

    option2.addEventListener("click", function(event){

        var element = event.target;
        if( element.matches("li") === true){

            alert("this is incorrect");   
        }
        
    })

    option4.addEventListener("click", function(event){

        var element = event.target;
        if( element.matches("li") === true){

            alert("this is incorrect");   
        }
        
    })

    
    
    

  
});


//     <!-- when user clicks option second question will replace questions1  -->

// move onto next question
userChoices.addEventListener("click", function (event) {
    var element = event.target;
    if(element.matches("li") === true){
        alert("next question");
    }             
    
});
// High Score Form function here---------------------------------------Need to fix*
userInitialsID.addEventListener("submit", function(event){

    event.preventDefault();
    

});
