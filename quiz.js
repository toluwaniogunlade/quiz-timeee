//DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

// Quiz questions
const quizQuestions = [
  {
    question: "What is Tolu's favorite fruit?",
    answers: [
      { text: "Mango", correct: false },
      { text: "Oranges", correct: false },
      { text: "Strawberries", correct: true },
      { text: "Watermellon", correct: false },
    ],
  },
  {
    question: "what is Tolu's favorite sport?",
    answers: [
      { text: "Football", correct: false },
      { text: "Volleyball", correct: true },
      { text: "Basketball", correct: false },
      { text: "Cricket", correct: false },
    ],
  },
  {
    question: "What is Tolu's favorite Nigerian Artist?",
    answers: [
      { text: "Wizkid", correct: false },
      { text: "Ayra Star", correct: false },
      { text: "Tems", correct: false },
      { text: "Davido", correct: true },
    ],
  },
  {
    question: "What is Tolu's current favorite app?",
    answers: [
      { text: "Twitter", correct: false },
      { text: "Whatsapp", correct: false },
      { text: "Substack", correct: true },
      { text: "Instagram", correct: false },
    ],
  },
  {
    question: "Which type of jewelry-ware does Tolu like the most?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Pearls", correct: false },
      { text: "Silver", correct: true },
      { text: "Beads", correct: false },
    ],
  },

  {
    question: "What is Tolu's favorite show of all time?",
    answers: [
      {text: "YOU", correct: false},
      {text: "The Boyz", correct: false},
      {text: "Bridgerton", correct: false},
      {text: "All of the above", correct: true},
    ],
  },
  
  {
    question: "Which of the following swallows has Tolu never tried?",
    answers: [
      {text: "Pounded yam", correct: false},
      {text: "Oats", correct: true},
      {text: "Semovita", correct: false},
      {text: "Gari", correct: false},
    ],
  },

  {
    question: "What is Tolu's name that starts with Z",
    answers: [
      {text: "Zikorah", correct: false},
      {text: "Zipporah", correct: true},
      {text: "Zivia", correct: false},
      {text: "Zeekah", correct: false},
    ],
  },

  {
    question: "What is Tolu's favorite day of the week?",
    answers: [
      {text: "Friday", correct: true},
      {text: "Thursday", correct: false},
      {text: "Wednesday", correct: false},
      {text: "Tuesday", correct: false},
    ],
  },

  {
    question: "In school, if Tolu isn't in class who is she usually with?",
    answers: [
      {text: "Yakubu", correct: false},
      {text: "Chigozie", correct: false},
      {text: "Vera", correct: false},
      {text: "Temitayo", correct: true},
    ],
  },

  {
    question: "What is Tolu's favorite state?",
    answers: [
      {text: "Abuja", correct: false},
      {text: "Lagoz", correct: false},
      {text: "Cross-river", correct: false},
      {text: "Ibadan", correct: true},
    ],
  },

    {
    question: "Who does Tolu runs to when she hits rock bottom ?",
    answers: [
      {text: "Her mum", correct: false},
      {text: "Her bestfriend", correct: false},
      {text: "Jesus", correct: true},
      {text: "The gym", correct: false},
    ],
  },

    {
    question: "Tolu's favorite person in the world introduced her to one of his favorite quote, what do you think it is?",
    answers: [
      {text: "You only live once", correct: false},
      {text: "Seek the creator", correct: true},
      {text: "C'est la vie", correct: false},
      {text: "If u love me, put me in Chanel", correct: false},
    ],
  },

  {
    question: "What did Tolu want to study before she chose computer science?",
    answers: [
      {text: "Petroleun Engineering", correct: false},
      {text: "Mathematics", correct: false},
      {text: "Dermatology", correct: true},
      {text: "Pharmacy", correct: false},
    ],
  },

  {
    question: "What is Tolu's worst Celebrity couple?",
    answers: [
      {text: "Nara and lucky", correct: false},
      {text: "Zendaya and Tom holland", correct: false},
      {text: "Ronaldo and Georgina", correct: true},
      {text: "Jcole and his mystery wife", correct: false},
    ],
  },

    {
    question: "What hobby is Tolu best at?",
    answers: [
      {text: "Sketchig", correct: true},
      {text: "Playing the piano", correct: false},
      {text: "Sports", correct: false},
      {text: "Photography", correct: false},
    ],
  },
 

      {
    question: "What is Tolu's favorite color",
    answers: [
      {text: "Brown", correct: false},
      {text: "Lilac", correct: false},
      {text: "Sage-green", correct: false},
      {text: "Grey", correct: true},
    ],
  },
   

    {
    question: "What was Tolu's Jamb score?",
    answers: [
      {text: "309", correct: false},
      {text: "297", correct: false},
      {text: "278", correct: true},
      {text: "264", correct: false},
    ],
  },

    {
    question: "If Tolu were to disapear, which place on earth will u find her",
    answers: [
      {text: "Paris", correct: false},
      {text: "USA", correct: false},
      {text: "Morroco", correct: false},
      {text: "Bora-Bora", correct: true},
    ],
  },

];

//QUIZ STATE
let currentQuestionsIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;


// event listeners

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz(){
   //reset vars
   currentQuestionsIndex = 0;
   score = 0;
   scoreSpan.textContent = score;

   startScreen.classList.remove("active");
   quizScreen.classList.add("active");

   showQuestion()
}

function showQuestion() {
    //reset state
    answersDisabled = false

    const currentQuestion = quizQuestions[currentQuestionsIndex]

    currentQuestionSpan.textContent = currentQuestionsIndex + 1

    const progressPercent = ((currentQuestionsIndex + 1) / quizQuestions.length)* 100;
    progressBar.style.width = progressPercent + "%"

    questionText.textContent = currentQuestion.question

    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.textContent = answer.text
        button.classList.add("answer-btn")

        //what is dataset
        button.dataset.correct = answer.correct

        button.addEventListener("click", selectAnswer)

        answersContainer.appendChild(button);
    });
    

}

function selectAnswer(event){
    if(answersDisabled) return

    answersDisabled = true;

    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    Array.from(answersContainer.children).forEach(button => {
        if(button.dataset.correct ==="true") {
            button.classList.add("correct");
        }else if(button === selectedButton){
         button.classList.add("incorrect");
            }
        }
    );

    if(isCorrect) {
        score++;
        scoreSpan.textContent = score
    }

    setTimeout(() => {
        currentQuestionsIndex++;

        if(currentQuestionsIndex < quizQuestions.length) {
          showQuestion()
        }else {
            showResults()
        }
    },1000)
}
  
function showResults() {
    quizScreen.classList.remove("active")
    resultScreen.classList.add("active")

    finalScoreSpan.textContent = score;

    const percentage = (score/quizQuestions.length) * 100

    if(percentage === 100) {
        resultMessage.textContent = "Perfect! You know Tolu so welllll xo";
    }else if (percentage >= 80) {
        resultMessage.textContent = "Good jobbbbb.....amazing score fr";
    }else if (percentage >= 60) {
        resultMessage.textContent = "You tried, take the test again sha";
    }else if (percentage >= 40) {
        resultMessage.textContent = "Omo...you did not try oooo";
    }else {
        resultMessage.textContent = "Toooooo pooorrrrrrr guy";
    }
}


function restartQuiz(){
    resultScreen.classList.remove("active");
    startScreen.classList.add("active");


    showQuiz();
}