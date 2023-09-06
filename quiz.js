var questionEl = document.querySelector('.question');
var answerEl = document.querySelector('.answers');
var btnStart = document.querySelector('.start');
var controlsContainer = document.querySelector('.control')
var playerInput = document.querySelector('#player')
var timerEl = document.querySelector('.timer');
var countEl = document.querySelector('.score')
var body = document.body;
var questionNumber = 0;
var timerCount = 60;
var scoreCount = 0;
var setTime2;
var playerName;
var playersList = [];
var storedList = JSON.parse(localStorage.getItem('playerList'));
console.log(storedList)
if (Array.isArray(storedList)) {
    playersList = storedList;
    playersList.sort(function (a, b) {
        return b.score - a.score;
    });
    playersList.forEach(createRanking); 
}

var quiz = [{
        question: "Wich one of this is an html tag?",
        answers: ["<p>", "<hello>", "<xd>", "<create>"],
        correct: 0
    },
    {
        question: "Coding language used in M.E.R.N ?",
        answers: ["Java", "Javascript", "Phyton", "PHP"],
        correct: 1
    },
    {
        question: "All arrays start on the index?",
        answers: ["3", "-1", "0", "first"],
        correct: 2
    },
    {
        question: "Coding language used to style your websites?",
        answers: ["javascript", "css", "html", "none"],
        correct: 1
    }
];

function gameOver() {
    timerCount = 0;
    if (scoreCount > 2) {

        answerEl.innerHTML = `<h1> your score is: ${scoreCount} out of 4 YOU PASSED!!!</h1>`;
    } else {
        answerEl.innerHTML = `<h1> your score is: ${scoreCount} out of 4 TRY AGAIN!!!</h1>`;


    }
    controlsContainer.style.display = 'block';
}