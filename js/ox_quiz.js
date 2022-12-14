// 랜덤 OX(true or false) Quiz 

// (1) 퀴즈 데이터 생성
let quizData = [
    {
        q: "20~40대거나, 아무 증상없이 건강하다면<br> 대장내시경 검사를 받지 않아도 된다.",
        answer: 0
    },
    {
        q: "대장 내에서 용종이 발견되면<br> 반드시 제거해야 한다.",
        answer: 1
    },
    {
        q: "피가 섞인 혈변을 보면<br> 대장암에 걸린 것이다.",
        answer: 0
    },
    {
        q: "대장의 치료, 대장암의 예방 및 진단이<br> 전부 가능한 것은 대장내시경 검사뿐이다.",
        answer: 1
    },
    {
        q: "대장암 가족력이 없는 경우,<br> 대장암에 걸릴 확률이 거의 없다.",
        answer: 0
    }
];
// console.log(quizData[0]);

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const answerBox = document.querySelector(".answer-box");
let quizScore = document.querySelector(".quiz-score");
let resultText1 = document.querySelector(".result-text1");
let resultText2 = document.querySelector(".result-text2");
let linkButton = document.querySelector(".link-button");
const answerSelect = document.querySelectorAll(".answer-select");
const quizButton = document.querySelectorAll(".quiz-button");

let countQuestion = 0;
let currentQuestion;
let Questions = []; //변수 배열 선언

// (2) 퀴즈 질문번호 설정
function setQuestions() {
    const totalQuestion = quizData.length; // 5
    for (let i = 0; i < totalQuestion; i++) {
        Questions.push(quizData[i]); //push() 메서드 마지막 배열 추가
    }
};

// (3) 새로운 퀴즈 취득
function getNewQuestion() {
    //퀴즈 질문번호 출력
    questionNumber.innerHTML = `Question ${countQuestion + 1} / ${quizData.length}`;

    //퀴즈내용 랜덤 적용 및 출력
    currentQuestion = Questions[Math.floor(Math.random() * Questions.length)]; //퀴즈 index number 0이상 5미만 중 하나 랜덤생성 
    questionText.innerHTML = currentQuestion.q;

    //퀴즈내용 중복 출력 방지
    const duplication = Questions.indexOf(currentQuestion);
    Questions.splice(duplication, 1);
    // console.log(currentQuestion);
    // console.log(Questions);

    //퀴즈 질문번호 증가
    countQuestion++;
};

answerSelect[0].addEventListener("click", getResultOfQuiz);
answerSelect[1].addEventListener("click", getResultOfQuiz);

// (4) 퀴즈 정답 구분
var checkAnswer = [];
function getResultOfQuiz() {
    for (let i = 0; i < answerSelect.length; i++) { //answerSelect.lenght = 2
        if (answerSelect[i].checked == true) { //사용자가 체크한 answerSelect의
            if (answerSelect[i].value == currentQuestion.answer) { 
                //value값과 랜덤으로 나온 퀴즈의 answer값이 일치하면
                checkAnswer.push(1);
            }
            else {
                //value값과 랜덤으로 나온 퀴즈의 answer값이 미일치하면
                checkAnswer.push(0);
            }
        }
    }
    // console.log(currentQuestion.answer);
    console.log(checkAnswer);
};

var score;
var totalscore;
function getTotalScore() {
    score = checkAnswer.map(el => el * 20); // 배열 곱셈
    totalscore = score.reduce(function (total, val) { //배열 더하기
        return total + val;
    }, 0);
    console.log(totalscore);

    if (20 >= totalscore) {
        quizScore.textContent = `${totalscore}점`;
        resultText1.textContent = `이대로는 안돼요!`;
        resultText2.textContent = `대장암이 무엇인지 처음부터 차근차근 알아볼까요?`;
        linkButton.innerHTML = `<a href="/PROJECT/html/03_cancer_sub2.html" target="_blank">다시 알아보기</a>`;
    } else if (40 <= totalscore && 60 >= totalscore) {
        quizScore.textContent = `${totalscore}점`;
        resultText1.textContent = `아쉬워요!`;
        resultText2.textContent = `대장암에 대해 조금 더 알아볼까요?`;
        linkButton.innerHTML = `<a href="/PROJECT/html/04_cancer_sub3.html" target="_blank">더 알아보기</a>`;
    } else {
        quizScore.textContent = `${totalscore}점`;
        resultText1.textContent = `완벽해요!`;
        resultText2.textContent = `이 기세를 이어 대장내시경 검진도 받아볼까요?`;
        linkButton.innerHTML = `<a href="https://www.nhis.or.kr/nhis/healthin/retrieveExmdAdminSearch.do" target="_blank">검진기관 찾기</a>`;
    }
};

// 클릭 이벤트
quizButton[0].addEventListener("click", startQuiz);
quizButton[1].addEventListener("click", returnToQuiz);
answerSelect[0].addEventListener("click", next);
answerSelect[1].addEventListener("click", next);

function next() {
    if (countQuestion === quizData.length) {
        console.log("quiz over");
        quizOver();
    }
    else {
        getNewQuestion();
    }
};

function quizOver() { //퀴즈 끝나면
    quizBox.classList.add("hide"); //퀴즈 화면 숨김
    resultBox.classList.remove("hide"); //퀴즈 결과화면 보임 
    answerBox.classList.remove("hide"); //퀴즈 정답 및 해설 보임  
    //총점수 계산  
    getTotalScore();
};

function resetQuiz() { //처음으로 버튼 누르면 리셋되는 것
    countQuestion = 0;
    checkAnswer = [];
};

function returnToQuiz() { //처음으로 버튼 누르면
    resultBox.classList.add("hide"); //퀴즈 결과화면 숨김
    answerBox.classList.add("hide"); //퀴즈 정답 및 해설 숨김
    homeBox.classList.remove("hide"); //퀴즈 시작화면 보임
    //퀴즈 리셋
    resetQuiz();
};

function startQuiz() { //시작버튼 누르면
    homeBox.classList.add("hide"); //퀴즈 시작화면 숨김
    quizBox.classList.remove("hide"); //퀴즈 화면 보임

    setQuestions();
    getNewQuestion();
};

