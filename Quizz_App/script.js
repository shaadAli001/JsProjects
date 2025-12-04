<<<<<<< HEAD
=======
const questions = [
  {
    question: "Which is largest animal in the World",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is Smallest country in the World",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Srilanka", correct: false },
    ],
  },
  {
    question: "Which is largest desert in the World",
    answers: [
      { text: "Sahara", correct: false },
      { text: "Thaar", correct: false },
      { text: "kalahari", correct: false },
      { text: "Antartica", correct: true },
    ],
  },
  {
    question: "Which is smallest Continent in the World",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Antartica", correct: false },
      { text: "Africa", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answer_btn = document.getElementById("answer_btn");
const next_btn = document.getElementById("next_btn");

let currentQuestionIndex = 0;
let score = 0;

const startQuizz = () => {
  currentQuestionIndex = 0;
  score = 0;
  next_btn.innerHTML = "Next";
  showQuestion();
};

const showQuestion = () => {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answer_btn.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
};
const resetState = () => {
  next_btn.style.display = "none";
  while (answer_btn.firstChild) {
    answer_btn.removeChild(answer_btn.firstChild);
  }
};

const selectAnswer = (e) => {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answer_btn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  next_btn.style.display = "block";
};

const showScore = () => {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  next_btn.innerHTML = "Play Again";
  next_btn.style.display = "block";
};

const handleNextBtn = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};

next_btn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextBtn();
  }
  startQuizz();
});

startQuizz();
>>>>>>> 55c22660b7794f6dc2671b53dfaa72c42f9753f9
