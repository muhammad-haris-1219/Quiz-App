var quizQuestions = [
    {
        question: ' 1 HTML stands for',
        answer: 'Hyper Text Markup Language',
        options: [
            'Hyper Text Markup Language',
            'Hyper Tool Markup Language',
            'High Text Markup Language',
            'Hyper Text Machine Language',
        ]
    },
    {
        question: ' 2 CSS stands for',
        answer: 'Castcading Style Sheet',
        options: [
            'Control Style Sheet',
            'Coding Style Sheet',
            'Castcading Style Sheet',
            'Core Style Sheet',
        ]
    },
    {
        question: ' 3 JS stands for',
        answer: 'JavaScript',
        options: [
            'Just Sying',
            'Java Script',
            'Journel Script',
            'JavaScript',
        ]
    },
    {
        question: ' 4 What is Bootstrap',
        answer: 'CSS Framework',
        options: [
            'HTML Framework',
            'JS Framework',
            'CSS Framework',
            'PHP Framework',
        ]
    },
    {
        question: ' 5 What is jQuery',
        answer: 'JavaScript library',
        options: [
            'C++ library',
            'JavaScript library',
            'Python library',
            'Java library',
        ]
    }
];

var counter = document.getElementById('counter');
var pass = document.getElementById('pass');
var fail = document.getElementById('fail');
var result = document.getElementById('result_container2');
var timer = document.getElementById('timer');
var field = document.getElementsByClassName('field');
var interface =document.getElementsByClassName('interface');
var moveon =document.getElementById('moveon');

var ques = document.getElementById('ques');
var opt = document.getElementsByClassName('opt');
var quesBtn = document.getElementById('btn');
var index = 0;
var score = 0;
var lose = 0;

document.getElementById('result_container1').innerHTML=`Welcome to ${prompt('Enter Your Name','Candidate').toUpperCase()}`;

function nextQuestion() {

    var selectedAns = document.getElementsByName('option');
    for (var k = 0; k < selectedAns.length; k++) {
        if (selectedAns[k].checked) {
            var userAns = selectedAns[k].parentElement.innerText;
            var correctAns = quizQuestions[index - 1].answer;

            if (correctAns == userAns) {
                score++;

                field[0].style.width = `${(score * 100) / quizQuestions.length}%`;
            }
            else {
                lose++;

                field[1].style.width = `${(lose * 100) / quizQuestions.length}%`;
            }
        }

        selectedAns[k].checked = false;
    }
    quesBtn.disabled = true;

    if (index > quizQuestions.length - 1) {
        console.log(score);
        result.innerText = `${(score / quizQuestions.length) * 100}%`;
      if(screen.width>=768){
        interface[0].style.display=interface[1].style.display= 'none';
        result.style.display='flex';
        moveon.style.display='block';
      }
    }
    else {
        counter.innerText = `${index + 1} / ${quizQuestions.length}`;
        ques.innerText = quizQuestions[index].question;
        for (var i = 0; i < quizQuestions.length; i++) {
            if (quizQuestions[i].options && i == index) {

                for (var j = 0; j < quizQuestions[i].options.length; j++) {
                    opt[j].innerText = quizQuestions[i].options[j];
                }
            }
        }
    }
    index++;
    countDown(index);

};

nextQuestion()


function quizQuestion() {
    quesBtn.disabled = false;
};


var sec = 0;
var min = 0;
var durartion;

function countDown(e) {
    sec++
    if (sec < 9) {
        sec = '0' + sec;
    }
    else if (sec > 20) {
        min++;
        sec = 0;
    }
    if (min > 1) {

        min = 0;
        nextQuestion()
    }
    if (e > !quizQuestions.length) {
        min = sec = 0;
    }
    if (quizQuestions.length < e) {
        clearInterval(durartion);
        interface[1].style.display= 'none'
    }
    timer.innerText = `${min} : ${sec}`;

}

durartion = setInterval(countDown, 1000);

function moveOn(){
    window.location.reload(true);
}


