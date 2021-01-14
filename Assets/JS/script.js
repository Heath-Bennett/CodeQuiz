//Declare variables

let timerCount = 75;
let answerKey = "";
let arrayLength = 10;
const timeLeft = $("#timeLeft");
const qText = $("h1");
const optOne = $("#qOne");
const optTwo = $("#qTwo");
const optThree = $("#qThree");
const optFour = $("#qFour");
const mainP = $("main > p");


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
    }

];

//An array to store already used questions

let questionsUsed = [];

//JQuery Document.ready function
$(document).ready(function() {

    // startTime function runs the timer
    function startTime() {
        timer = setInterval(function() {
            timerCount--;
            timeLeft.text(timerCount);
            if (timerCount === 0){
                clearInterval(timer);
            }
        }, 1000)
    }
    
    //This generates a question object from quizQuestions array and populates the page with it.
    function getQuestion (){
        let index = Math.floor(Math.random()*arrayLength)
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

        //****************************For testing purposes *****************************/
        console.log(removeQuestion);
        console.log(quizQuestions.length);
        console.log("quiz question length: " + questionsUsed.length);
        for (let i = 0; i < questionsUsed.length; i++){
            console.log(questionsUsed[i]);
        }
        //***************************************************************************** */
    }
    //This function starts the quiz and gets the first question;
    function startQuiz (){
        getQuestion();
        mainP.addClass("display");
        $("#start").addClass("display");
        $("form.answer-btns").removeClass("display");
        
    }

    //This event handler with anonymous function handles user answers
    $("button.quizBtn").on("click", function(){
        
        if (this.value === answerKey){
            timerCount += 2;
            
            $("form.answer-btns").css("border-bottom", "2px dashed lightgray");
        }

        
        getQuestion();

        return false;
    });


    //Event listeners
    $("#start").on("click", startTime);
    $("#start").on("click", startQuiz);

});

//**********************Testing purposes*************************
// console.log("question: " + quizQuestions[5].question);
// console.log("optionOne: " + quizQuestions[9].optionOne);
// console.log("answer: " + quizQuestions[3].answer);

        
        
            

        






