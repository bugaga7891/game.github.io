var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
	var myName = prompt('Напишите ваше имя.');
	localStorage.setItem('имя: ', myName);
	myHeading.innerHTML = 'Классный браузер!'+ myName;
}
if(!localStorage.getItem('имя: ')){
	setUserName();
}else{
	var storedName = localStorage.getItem('имя: ');
	myHeading.innerHTML = 'Классный браузер!'+ storedName;
}
myButton.onclick = function(){
	setUserName();
}
