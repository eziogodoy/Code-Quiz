var questionsEl = document.querytSelector('.question');
var answerEl = document.querySelector('.answers');
var btnStart = document.querySelector('.start');
var controlsContainer = document.querySelector('control')
var playerInput = document.querySelector('#player')
var timerEl = document.querySelector('.timer');
var countEl = document.querySelector('.score')
var body = document.body;
var questionNumber = 0;
var timerCount = 60;
var scoreCount = 0;
var setTime2;
var playersName;
var playersList = [];
var storedList = JSON.parse(localStorage.getItem('playerList'));
console.log(storedList)
if (Array.isArray(storedList)) {
    playersList = storedList;
    playersList.sort(function (a, b) {
        return b.score - a.score;
    });
    


}

