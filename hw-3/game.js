const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('btn-game'));
const skip = document.getElementById('skip');
const clock = document.getElementById('seconds');
const odsutani = document.getElementById('odustani');
console.log(choices);


const countdown = document.getElementById('countdown');
const questionCounterNumber = document.getElementById('numOfQ-number');
const scorePoints = document.getElementById('score-points');




let acceptingAnswers = false;
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let time = 20;
let resetTime = false;

let questions = [
  {
    "question": "Koja je frekvencija struje koja se koristi u Evropi?",
    "choice1": "50Hz",
    "choice2": "100Hz",
    "choice3": "60Hz",
    "choice4": "80Hz",
    "answer": 1
  },
  {
    "question": "Sa kog ostvra je čuveni starogrčki matematičar Pitagora?",
    "choice1": "Lezbos",
    "choice2": "Rodos",
    "choice3": "Samos",
    "choice4": "Krit",
    "answer": 3
  },
  {
    "question": "Ko je režirao Forest Gamp?",
    "choice1": "Robert Zemekis",
    "choice2": "Stiven Spilberg",
    "choice3": "Džejms Kamerun",
    "choice4": "Klint Istvud",
    "answer": 1
  },
  {
    "question": "Ko je stvorio operativni sistem Linux?",
    "choice1": "Denis Riči",
    "choice2": "Ken Tompson",
    "choice3": "Džejms Gozling",
    "choice4": "Linus Torvalds",
    "answer": 4
  },
  {
    "question": "Koje godine je izasao prvi broj dnevnog lista Politike?",
    "choice1": "1900",
    "choice2": "1904",
    "choice3": "1910",
    "choice4": "1908",
    "answer": 2
  },
  {
    "question": " Koliko najviše poena u pikadu možete osvojiti jednim bacanjem?",
    "choice1": "40",
    "choice2": "60",
    "choice3": "80",
    "choice4": "50",
    "answer": 2
  },
  {
    "question": " U kom veku je živeo Vofgang Amadeus Mocart?",
    "choice1": "16",
    "choice2": "17",
    "choice3": "18",
    "choice4": "19",
    "answer": 3
  },
  {
    "question": "Kog datuma je Crvena Zvezda osvojila Kup evropskih šampiona?",
    "choice1": "23. maj 1991.",
    "choice2": "25. maj 1991.",
    "choice3": "27. maj 1991.",
    "choice4": "29. maj 1991.",
    "answer": 4
  },
  {
    "question": "Koje godine je rođen Nikola Tesla?",
    "choice1": "1852",
    "choice2": "1854",
    "choice3": "1856",
    "choice4": "1858",
    "answer": 3
  },
  {"question": "Kako se zove muslimanski mesec posta?",
    "choice1": "Bajram",
    "choice2": "Seval",
    "choice3": "Ramazan",
    "choice4": "Šaban",
    "answer": 3
  }];
  



 


  

const MAX_QUESTIONS = 10;

startGame = () => {
	questionCounter = 0;
	score = 0;
	availableQuestions = [...questions];
	
	getNewQuestion();
	
};


getNewQuestion = () => {
	
	startTimer(20);
	
	if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
		
		localStorage.setItem('mostRecentScore',score);
		return window.location.assign("highscores.html");
	
	}
	
	questionCounter++;
	questionCounterNumber.innerText = `${questionCounter}/${MAX_QUESTIONS}`; 
	const questionIndex = Math.floor(Math.random() * availableQuestions.length);
	
    	currentQuestion = availableQuestions[questionIndex];
    	question.innerText = currentQuestion.question;

    	choices.forEach((choice) => {
        	const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
		availableQuestions.splice(questionIndex, 1);
    	acceptingAnswer = true;
    	
		
	
    
    choices.forEach(choice => {
    	choice.addEventListener('click', e => {
			
    		if (!acceptingAnswer) return;
    		
    		acceptingAnswer = false;
    		const selectedChoice = e.target;
			
    		const selectedAnswer = selectedChoice.dataset["number"];
    		
    		const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
			
			if (classToApply === "correct"){
				incrementScore();
			} 
			if (classToApply === "incorrect"){
				decrementScore();
			}
			
			
			
    		selectedChoice.classList.add(classToApply);
			const rightAnswer = currentQuestion.answer;
			choices[rightAnswer-1].classList.add("correct");
			
			
			resetTimer();
    		setTimeout( () => {
    		  
    		selectedChoice.classList.remove(classToApply); 
			choices[rightAnswer-1].classList.remove("correct");	
    		
    		getNewQuestion();
    		},1000);

	});
	skip.addEventListener('click', skiped);
	
	
	
	
});

	
};

function skiped(){
	
	if (!acceptingAnswer) return;
	acceptingAnswer = false;
	
	const rightAnswer = currentQuestion.answer;
	choices[rightAnswer-1].classList.add("correct");
	resetTimer();
	
	setTimeout( () => {
    		  
    		choices[rightAnswer-1].classList.remove("correct");  
    		
    		getNewQuestion();
    		},1000);
	
};

incrementScore = () => {
	score += 10;
	scorePoints.innerText = score;
	
};

decrementScore = () => {
	score -= 5;
	scorePoints.innerText = score;
	
};

function startTimer(time){
	
	timer();
	counter = setInterval(timer,1000);
	function timer() {
		clock.innerText = time;
		if (time==0){
			skiped();
			
		}
		
		time--;
		console.log(time);
		
	}
			
};

function resetTimer() {
	clearInterval(counter);
	time = 21;
}







startGame();




