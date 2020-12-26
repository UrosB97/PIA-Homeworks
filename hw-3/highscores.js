const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const currentName = localStorage.getItem('currentName');
const highScoresList = document.getElementById('highscores');
const playAgain = document.getElementById('playAgain');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);
finalScore.innerText = mostRecentScore;


saveHighScore = () => {
	

	const score = {
		score: mostRecentScore,
		currentName: currentName
	};
	
	highScores.push(score);
	highScores.sort( function(a,b) { return b.score - a.score || a.currentName.localeCompare(b.currentName)});
	
	highScores.splice(10);
	
	localStorage.setItem("highScores", JSON.stringify(highScores));
	
	
};




playAgain.addEventListener('click', e => {
	console.log("f");
	window.location.assign('index.html');
});

saveHighScore();




highScoresList.innerHTML = highScores
  .map(score => {
	  
    return `<li class="high-score">${score.currentName} - ${score.score}</li>`;
	
  })
  .join("");



