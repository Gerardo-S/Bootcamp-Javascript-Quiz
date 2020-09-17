# Dynamic Javascript Quiz 

## Description
A dynamic javascript quiz in the works. This quiz has a timer which decreases as examinees chooses incorrect responses to questions. As the examinee clicks on an answer, whether correct or incorrect, a new question and list of answers will replace those already answered. Once examinee completes the quiz a new page showing high scores for every person who has completed the quiz will appear. Each score alongside a corresponding initial is represented in an ordered list. 

## Design:
Layout design was created using Bootstraps grid layout. 

## Current Functions:

1. A functional button for starting the quiz. 
2. When clicked a timer located on the top-right of the page will countdown from 60 in increments of 1 seconds. 
3. When a incorrect answer is chosen 10 seconds are subtracted from the timer. 
4. When the timer hits zero and user clicks on an answer choice a new screen will appear titled "High Scores".


## Screenshots:<br>
1. ### First page with start button

<img src="Assets\Snapshots\Start-Button.PNG" alt="Img1 first page with start button">

2. ### First question

<img src = "Assets\Snapshots\First-Question.PNG" alt ="Img2 Question with choices">

3. ### High Score Page

<img src= "Assets\Snapshots\High-Scores.PNG" alt="Img3 High Score page">

## Method:<br>
Using javascript API's, items to be manipulated as the user "clicks" are grabbed using querySelector. After each element to be manipulated is listed all possible variables are defined. Two object variables were defined for questions and answers for ease of access when requiring callbacks. A countDown function is implemented using setInterval and is updated if the user clicks the incorrect answer. 

## Tests:<br>
A series of alerts were implemented to test for functionality of start button, click of answer choices (options1 - options4), and if user clicked the incorrect answer. 

## Improvements:<br>

##Currently quiz app timer counts below zero when an answer choice is selected repeatedly. Turning off the addEventListener for the corresponding id could solve the issue. Lastly, the High Score page refreshes when user hits "submit". An event.preventDefault was placed after the click event; however, when information is submitted the page does not store users initial to the local storage. This may be  due to incorrect placement of variables within the startButton event function. 

## Challenges:<br>

Initial code used for answer choice selection was done by assigning each choice a data-index. This index would then be referenced during the event of clicking on an answer choice to compare user choice to correct or incorrect answer. This approach was unsuccessful. Along the process it was established that each answer choice needed a corresponding "id" in order to determine whether user had clicked an incorrect or correct answer. 

Link to deployed page:<br>

<a href="https://gerardo-s.github.io/Bootcamp-Javascript-Quiz/">https://gerardo-s.github.io/Bootcamp-Javascript-Quiz/</a>

