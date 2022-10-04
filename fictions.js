var fictions = [
'Favorite breed of dog?',
'Earliest memory of the internet?'
]

function newFictions() {
	var randomNumber = Math.floor(Math.random() * (fictions.length));
	document.getElementById('fictionsDisplay').innerHTML = fictions[randomNumber];
}
