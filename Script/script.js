let userChoice = 1;
let introMessage = {
    question: "Do you want to start?"
};

let questionOne = {
    question: "what is 2+2?",
    ansCorrect: "4",
    ansIncorrectOne: "3",
    ansIncorrectTwo: "5",
    ansIncorrectThree: "2"
};

let questionTwo = {
    question: "what is 2*2?",
    ansCorrect: "4",
    ansIncorrectOne: "3",
    ansIncorrectTwo: "5",
    ansIncorrectThree: "2"
};

let questionThree = {
    question: "what is 2/2?",
    ansCorrect: "1",
    ansIncorrectTwo: "0",
    ansIncorrectThree: "2",
    ansIncorrectOne: "0.5"
};

let questionFour = {
    question: "what is 2%2?",
    ansCorrect: "0",
    ansIncorrectThree: "1",
    ansIncorrectOne: "4",
    ansIncorrectTwo: "2"

};

postQuestion(userChoice);

function postQuestion (questionNumber){
    document.getElementById("question").innerHTML = introMessage.question;
    document.getElementById("ansA").innerHTML = "YES";
    document.getElementById("ansB").innerHTML = "NO";
    document.getElementById("buttonC").style.visibility = 'hidden';
    document.getElementById("buttonD").style.visibility = 'hidden';

    if(document.getElementById("buttonA").clicked == true){
        alert("Quiz will start now");
    
        document.getElementById("buttonC").style.visibility = 'visible';
        document.getElementById("buttonD").style.visibility = 'visible';
        if(questionNumber == 1){
        document.getElementById("question").innerHTML = questionOne.question;
        document.getElementById("ansA").innerHTML = questionOne.ansCorrect;
        document.getElementById("ansB").innerHTML = questionOne.ansIncorrectOne;
        document.getElementById("ansC").innerHTML = questionOne.ansIncorrectTwo;
        document.getElementById("ansD").innerHTML = questionOne.ansIncorrectThree;
        }
        else if (questionNumber == 2){
        document.getElementById("question").innerHTML = questionTwo.question;
        document.getElementById("ansB").innerHTML = questionTwo.ansCorrect;
        document.getElementById("ansA").innerHTML = questionTwo.ansIncorrectOne;
        document.getElementById("ansC").innerHTML = questionTwo.ansIncorrectTwo;
        document.getElementById("ansD").innerHTML = questionTwo.ansIncorrectThree;

        }
        else if(questionNumber == 3){
        document.getElementById("question").innerHTML = questionThree.question;
        document.getElementById("ansD").innerHTML = questionThree.ansCorrect;
        document.getElementById("ansC").innerHTML = questionThree.ansIncorrectOne;
        document.getElementById("ansA").innerHTML = questionThree.ansIncorrectTwo;
        document.getElementById("ansB").innerHTML = questionThree.ansIncorrectThree;

        }
        else if (questionNumber == 4){
        document.getElementById("question").innerHTML = questionFour.question;
        document.getElementById("ansB").innerHTML = questionFour.ansCorrect;
        document.getElementById("ansA").innerHTML = questionFour.ansIncorrectOne;
        document.getElementById("ansD").innerHTML = questionFour.ansIncorrectTwo;
        document.getElementById("ansC").innerHTML = questionFour.ansIncorrectThree;
        }
    }
}