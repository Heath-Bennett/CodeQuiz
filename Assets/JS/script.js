//Declare variables
let timerCount = 60;
let answerKey = "";
let arrayLength = 12;
let didWin = false;
let numCorrect = 0;
let answeredQuestions = 0; 
let initial = "";
const timeLeft = $("#timeLeft");
const qText = $("h1");
const optOne = $("#qOne");
const optTwo = $("#qTwo");
const optThree = $("#qThree");
const optFour = $("#qFour");
const mainP = $("main > p");
const result = $("h3");
const startBtn = $("#start");
const ansBtn = $("form.answer-btns");
const highScores = $(".highScores");
const userInitials = $("form.enter-initial");
const initialBtn = $("button.initial-button");
const initialTxt = $("#initials");
const firstPlace = $("#first");
const secondPlace = $("#second");
const thirdPlace = $("#third");
const fourthPlace = $("#fourth");
const fifthPlace = $("#fifth");
const backButton = $("#goBack");

//create an array of question objects
const quizQuestions = [
    {
        question: "What is the proper syntax to create an empty array?", 
        optionOne: "var anArray = {};", 
        optionTwo: "var anArray = [];",
        optionThree: 'var anArray = ("");',
        optionFour: 'var anArray = [""];', 
        answer: "2"
    }, 

    {
        question: "Which operator divides two numbers and returns the remainder?",
        optionOne: "%", 
        optionTwo: "*", 
        optionThree: "**", 
        optionFour: "!",
        answer: "1"
    }, 

    {
        question: "How do you write 'Hello World' in an alert box?",
        optionOne: 'alert("Hello World");',
        optionTwo: 'msgBox("Hello World");',
        optionThree: 'alertBox="Hello World";',
        optionFour: 'alertBox("Hello World");',
        answer: "1"
    },

    {
        question: "How do you create a function named 'myFunction'?", 
        optionOne: "function:myFunction();", 
        optionTwo: "function=myFunction();",
        optionThree: "function myFunction();",
        optionFour: "myFunction():function",
        answer: "3"
    },

    {
        question: "How do you call a function named 'myFunction'?",
        optionOne: "call myFunction", 
        optionTwo: "myFunction()", 
        optionThree: "call function myFunction",
        optionFour: "Call.myFunction()",
        answer: "2"
    },

    {
        question: "How do you write a conditional statement for executing some statements only if 'i' is NOT equal to 5?", 
        optionOne: "if <> 5",
        optionTwo: "if (i <> 5)", 
        optionThree: "if (i =! 5) then", 
        optionFour: "if (i != 5)", 
        answer: "4"
    },

    {
        question: "How does a 'for' loop start if 'i' has already been declared?",
        optionOne: "for (i = 0; i <= 5)",
        optionTwo: "for (i = 0; i <=5; i++)",
        optionThree: "for i = 1 to 5", 
        optionFour: "for (i <= 5; i++)",
        answer: "2"
    },

    {
        question: "How can you add a comment in JavaScript", 
        optionOne: "`This is a comment`",
        optionTwo: "<!--This is a comment-->",
        optionThree: "#This is a comment", 
        optionFour: "//This is a comment",
        answer: "4"
    },

    {
        question: "How do you round the float 7.25 to the nearest whole number?",
        optionOne: "Math.rnd(7.25)",
        optionTwo: "round(7.25)", 
        optionThree: "rnd(7.25)", 
        optionFour: "Math.round(7.25)",
        answer: "4"
    }, 

    {
        question: "How do you find the largest number of 2 and 4?", 
        optionOne: "top(2, 4)", 
        optionTwo: "Math.ceil(2, 4)", 
        optionThree: "Math.max(2, 4)", 
        optionFour: "ceil(2, 4)", 
        answer: "3"
    }, 

    {
        question: "In JavaScript, the following loop will execute how many times? for (let x=1; i<11; i++);", 
        optionOne: "Nine", 
        optionTwo: "Ten", 
        optionThree: "Eleven", 
        optionFour: "It won't loop. Wrong Syntax", 
        answer: "2"
    }, 

    {
        question: "In JavaScript, the symbols + - * and / are:", 
        optionOne: "operators", 
        optionTwo: "expressions", 
        optionThree: "comparison operators", 
        optionFour: "None of the above", 
        answer: "1"
    }

];

//An array to store already used questions

let questionsUsed = [];

// An array to store high scores as objects. 
let topScores = [];

// creates link for correct answer and wrong answer sound affects. 
let correctAns = document.createElement("audio");
correctAns.setAttribute("src", "./Assets/Sounds/ding2.mp3" );

let wrongAns = document.createElement("audio");
wrongAns.setAttribute("src", "./Assets/Sounds/buzz2.mp3");



//JQuery Document.ready function
$(document).ready(function() {

    // startTime function runs the timer 
    function startTime() {
        timer = setInterval(function() {
            timerCount--;
            timeLeft.text(timerCount);
            if (timerCount > 0) {
                checkWin();
                if(didWin){
                    clearInterval(timer);
                    youWon();
                }
            }
            if (timerCount <= 0){
                clearInterval(timer);
                
            }
        }, 1000)
    }
    
    //This generates a question object from quizQuestions array and populates the page with it.
    function getQuestion (){
        let index = Math.floor(Math.random()*arrayLength);
        let currentQuestion = quizQuestions[index];
        let removeQuestion = quizQuestions.splice(index, 1);
        arrayLength--;
        questionsUsed.push(removeQuestion);
        qText.text(currentQuestion.question);
        optOne.text(currentQuestion.optionOne);
        optTwo.text(currentQuestion.optionTwo);
        optThree.text(currentQuestion.optionThree);
        optFour.text(currentQuestion.optionFour);
        answerKey = currentQuestion.answer;
    }

    //This function checks to see if criteria for win has been met

    let checkWin = function (){
        if (numCorrect >= 5 && answeredQuestions === 10){
            didWin = true;
            return didWin;
        }
    }

    //This function prompts for user initials and sets high score
    let getInitials = function(){
        userInitials.removeClass("display");
        initialBtn.on("click", function(){
            let initialArray = initialTxt.val();
            initial = initialArray.toString();
            setHighScore(validInitials(initial), timerCount);
            highScores.removeClass("display");
            userInitials.addClass("display");
            //********************************************testing purposes************* */
            console.log(initial);
            // $("#first").text(topScores[0].initial + ": " + topScores[0].time + " seconds");
            //******* *************************************************************** */

            
            switch(topScores.length){
                case 5:
                    firstPlace.text(topScores[0].initial + ": " + topScores[0].time + " seconds");
                    secondPlace.text(topScores[1].initial + ": " + topScores[1].time + " seconds");
                    thirdPlace.text(topScores[2].initial + ": " + topScores[2].time + " seconds");
                    fourthPlace.text(topScores[3].initial + ": " + topScores[3].time + " seconds");
                    fifthPlace.text(topScores[4].initial + ": " + topScores[4].time + " seconds");
                    break;
                case 4:
                    firstPlace.text(topScores[0].initial + ": " + topScores[0].time + " seconds");
                    secondPlace.text(topScores[1].initial + ": " + topScores[1].time + " seconds");
                    thirdPlace.text(topScores[2].initial + ": " + topScores[2].time + " seconds");
                    fourthPlace.text(topScores[3].initial + ": " + topScores[3].time + " seconds");
                    break;
                case 3:
                    firstPlace.text(topScores[0].initial + ": " + topScores[0].time + " seconds");
                    secondPlace.text(topScores[1].initial + ": " + topScores[1].time + " seconds");
                    thirdPlace.text(topScores[2].initial + ": " + topScores[2].time + " seconds");
                    break;
                case 2:
                    firstPlace.text(topScores[0].initial + ": " + topScores[0].time + " seconds");
                    secondPlace.text(topScores[1].initial + ": " + topScores[1].time + " seconds");
                    break;
                case 1:
                    firstPlace.text(topScores[0].initial + ": " + topScores[0].time + " seconds");
                    break;
                
            }
        });
    }

    let validInitials = function (initials){
        let validInitials = false;
        initials = initials.toUpperCase();
        if(/^[A-Z]+$/.test(initials) && initials.length > 0){
            validInitials = true;
        }
        else{
            validInitials = false;
        }

        while (initials.length > 3 || initials.length < 1 || validInitials === false){
            initials = prompt("Please enter at least one letter but no more than three");  
            initials = initials.toUpperCase();
        
            if(/^[A-Z]+$/.test(initials)){
                validInitials = true;
            }
            else{
                validInitials = false;
            }
            
        }

        return initials;
    }

    

    //This function is called when user wins the game

    let youWon = function (){
        let isHighScore = false;
        qText.text("You Won!");
        ansBtn.addClass("display");
        result.addClass("display");
        mainP.removeClass("display");
        mainP.html("You answered " + numCorrect + " questions correctly!");

        if (topScores.length > 0){
            topScores.forEach(function(element){
                if (timeCount > element.time){
                    isHighScore = true;
                }
                return isHighScore;
            });

            if (isHighScore){
                getInitials();
            }
            else{
                mainP.html("You answered " + numCorrect + " questions correctly! <br> I'm sorry your time was not high enough to make the high score board.");
            }
        }
        else{
            getInitials();
            
        }   
    }

    //This function loops through highScores and places new object in the correct spot
    let loopThroughScores = function(newObj){
        for (let i = 0; i < topScores.length; i++){
            if (newObj.time > topScores[i].time){
                topScores.splice(i, 0, newObj);
            }
            break;
        }
    }

    //This function creates an object
    let scoreBoardEntry= function(initial, time){
        this.initial = initial;
        this.time = time;
    }


    //This function sets highScores

    let setHighScore = function (initial, time){
        let newObject = new scoreBoardEntry(initial, time);
        switch(topScores.length){
            case 0:
                topScores.push(newObject);
                break;
            case 1:
                if (newObject.time > topScores[0].time){
                    topScores.splice(0, 0, newObject);
                }
                else{
                    topScores.push(newObject);
                }

                break;
            case 2:
            case 3:
            case 4:
            case 5:
                loopThroughScores(newObject);
                break;
        }
    
    }

    //This function starts the quiz and gets the first question;
    function startQuiz (){
        getQuestion();
        mainP.addClass("display");
        startBtn.addClass("display");
        ansBtn.removeClass("display");
        
        
    }

    //This event handler with anonymous function handles user answers
    $("button.quizBtn").on("click", function(){
        ansBtn.css("border-bottom", "2px dashed lightgray");
        result.removeClass("display");
        

        if (this.value === answerKey){
            correctAns.play();
            timerCount += 5;
            numCorrect ++;
            result.css("color", "green");   
            result.text("Correct!");
            answeredQuestions++;
        }
        else {
            wrongAns.play();
            timerCount -= 15;
            result.css("color", "red");
            result.text("Incorrect");
            answeredQuestions++;  
        }
        
        getQuestion();

        
    });

    //reset function 
    const resetFunc = function (){
        qText.text("Coding Quiz Challenge");
        timerCount = 60;
        answerKey = "";
        arrayLength = 12;
        didWin = false;
        numCorrect = 0;
        answeredQuestions = 0;
        initial = "";
        mainP.removeClass("display");
        startBtn.removeClass("display");
        ansBtn.addClass("display");
        result.addClass("display");
        highScores.addClass("display");
        timeLeft.text(60)

        questionsUsed.forEach(function(element){
            quizQuestions.push(element);
        });

        questionsUsed.length = 0; 
    
    };
    

    //Event listeners
    startBtn.on("click", startTime);
    startBtn.on("click", startQuiz);
    backButton.on("click", resetFunc);

});


        
        
            

        






