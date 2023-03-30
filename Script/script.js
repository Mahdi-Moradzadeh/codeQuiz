let userChoice = 0;
let introMessage = {
    question: "Do you want to start? Press the start button above"
};
let SCORE = 0;
let timer = 0;
let totalTime = 100;

let counter = setInterval(function timeInterval(totalTime) {
}, 1000);

const allQuestions = [
{
    question: "What is 2+2?",
    answers: [
        {ans: 4, result: true},
        {ans: 3, result: false},
        {ans: 5, result: false},
        {ans: 2, result: false}]

},

{
    question: "What is 2*2?",
    answers: [
        {ans: 6, result: false},
        {ans: 3, result: false},
        {ans: 4, result: true},
        {ans: 2, result: false}]
},

{
    question: "what is 2/2?",
    answers: [
        {ans: 1, result: true},
        {ans: 0, result: false},
        {ans: 2, result: false},
        {ans: 0.5, result: false}]
},

{
    question: "what is 2%2?",
    answers: [
        {ans: 1, result: false},
        {ans: 4, result: false},
        {ans: 2, result: false},
        {ans: 0, result: true}]
}
]

let A = document.getElementById("buttonA");
let B = document.getElementById("buttonB");
let C = document.getElementById("buttonC");
let D = document.getElementById("buttonD");
let start = document.getElementById("start");
let submit = document.getElementById("submit");
let score = document.getElementById("score");
let next = document.getElementById("next");
let previous = document.getElementById("previous");

document.getElementById("question").innerHTML = introMessage.question;
A.style.visibility = 'hidden';
B.style.visibility = 'hidden';
C.style.visibility = 'hidden';
D.style.visibility = 'hidden';

start.onclick = quizStarter;

function buttonClick(e){
    userChoice++;
    let userAns = e.srcElement.value;
    console.log(userAns);
    if (userAns === 'true')
    SCORE++;   
    // else for timer
    quizStarter(userChoice);
}

function nextQ(g){
    if(userChoice<4)
    userChoice++;
    quizStarter(userChoice);
}

function previousQ(h){
    if(userChoice>1)
    userChoice--;
    quizStarter(userChoice);
}

function submission (f){
    alert("Your Quiz has been submitted and your score is displayed");    
}

function timeInterval(totalTime){
    totalTime--;
    timerCounter.innerText = counter;
    quizStarter(userChoice);
}

function quizStarter(){

    
    score.innerText = SCORE;

    if (userChoice>4)
    {

    }
    if(userChoice==0){
        alert("The quiz will start now");
        totalTime = 100;
    }
    A.style.visibility = 'visible';
    B.style.visibility = 'visible';
    C.style.visibility = 'visible';
    D.style.visibility = 'visible';
    console.log(userChoice);

    
    
    var qq = allQuestions[userChoice];
    document.getElementById("question").innerHTML = qq.question;
    A.innerText = "a) " + qq.answers[0].ans;
    A.value = qq.answers[0].result;
    B.innerText = "b) " + qq.answers[1].ans;
    B.value = qq.answers[1].result;
    C.innerText = "c) " + qq.answers[2].ans;
    C.value = qq.answers[2].result;
    D.innerText = "d) " + qq.answers[3].ans;
    D.value = qq.answers[3].result;

    

    A.onclick = buttonClick;
    B.onclick = buttonClick; 
    C.onclick = buttonClick;
    D.onclick = buttonClick;  
    submit.onclick = submission;
    next.onclick = nextQ;
    previous.onclick = previousQ;
  
}
