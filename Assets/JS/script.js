//create an array of question objects

var quizQuestions = [
    {
        question: "What is the proper syntax to create an empty array?", 
        optionOne: "var anArray = {};", 
        optionTwo: "var anArray = [];",
        optionThree: 'var anArray = ("");',
        optionFour: 'var anArray = [""];', 
        answer: "optionTwo"
    }, 

    {
        question: "Which operator divides two numbers and returns the remainder?",
        optionOne: "%", 
        optionTwo: "*", 
        optionThree: "**", 
        optionFour: "!",
        answer: "optionOne"
    }, 

    {
        question: "How do you write 'Hello World' in an alert box?",
        optionOne: 'alert("Hello World");',
        optionTwo: 'msgBox("Hello World");',
        optionThree: 'alertBox="Hello World"',
        optionFour: 'alertBox("Hello World")',
        answer: "optionOne"
    },

    {
        question: "How do you create a function named 'myFunction'?", 
        optionOne: "function:myFunction();", 
        optionTwo: "function=myFunction();",
        optionThree: "function myFunction();",
        optionFour: "myFunction():function",
        answer: "optionThree"
    },

    {
        question: "How do you call a function named 'myFunction'?",
        optionOne: "call myFunction", 
        optionTwo: "myFunction()", 
        optionThree: "call function myFunction",
        optionFour: "Call.myFunction()",
        answer: "optionTwo"
    },

    {
        question: "How do you write a conditional statement for executing some statements only if 'i' is NOT equal to 5?", 
        optionOne: "if <> 5",
        optionTwo: "if (i <> 5)", 
        optionThree: "if (i =! 5) then", 
        optionFour: "if (i != 5)", 
        answer: "optionFour"
    },

    {
        question: "How does a 'for' loop start if 'i' has already been declared?",
        optionOne: "for (i = 0; i <= 5)",
        optionTwo: "for (i = 0; i <=5; i++)",
        optionThree: "for i = 1 to 5", 
        optionFour: "for (i <= 5; i++)",
        answer: "optionTwo"
    },

    {
        question: "How can you add a comment in JavaScript", 
        optionOne: "`This is a comment`",
        optionTwo: "<!--This is a comment-->",
        optionThree: "#This is a comment", 
        optionFour: "//This is a comment",
        answer: "optionFour"
    },

    {
        question: "How do you round the number 7.25 to the nearest whole number?",
        optionOne: "Math.rnd(7.25)",
        optionTwo: "round(7.25)", 
        optionThree: "rnd(7.25)", 
        optionFour: "Math.round(7.25)",
        answer: "optionFour"
    }, 

    {
        question: "How do you find the largest number of 2 and 4?", 
        optionOne: "top(2, 4)", 
        optionTwo: "Math.ceil(2, 4)", 
        optionThree: "Math.max(2, 4)", 
        optionFour: "ceil(2, 4)", 
        answer: "optionThree"
    }

];

let questionsUsed = [];




//**********************Testing purposes*************************
console.log("question: " + quizQuestions[5].question);
console.log("optionOne: " + quizQuestions[9].optionOne);
console.log("answer: " + quizQuestions[3].answer);