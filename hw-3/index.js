const startButton = document.getElementById('start-btn')
const username = document.getElementById('username');



startButton.addEventListener('click', e => {
	
	
	if ( username.value.length === 0){
		startButton.disabled = true;
		console.log('disabledButton');
	 }
	 
	startButton.disabled = false;
	if (username.value.length > 0){
		
		console.log('Started');
		localStorage.setItem('currentName', username.value);
		window.location.assign('game.html');
	}

});






