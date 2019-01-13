//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Привет!';
/*var x = document.querySelector('h2');
x.textContent='M_O_Z_I_L_L_A_!';
var menu ='OK';
if(menu === 'OK'){
	alert('Получилось!')
}else{
	alert('Упс!');
}
var num1=5;
var num2=6;
function multiply(num1, num2){
	var result= num1 * num2;
	return result;
}
alert (multiply(num1, num2));
document.querySelector('h2').onclick=function(){
	alert('Зачем-то жмакать где попало?');
} */





var myImage = document.querySelector('img');
myImage.onclick = function() {
	var myScr = myImage.getAttribute('src');
	if(myScr==='images/firefox-icon.png'){
	myImage.setAttribute('src','images/beers.jpeg');
}else{
	myImage.setAttribute('src','images/firefox-icon.png');
	}
}
