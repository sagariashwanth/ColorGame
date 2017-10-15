var numOfSquares = 6;
var colors = generateRandomColor(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
//var easyButton = document.querySelector("#easybtn");
//var hardButton = document.querySelector("#hardbtn");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){

	setUpModeButtons();
	setUpSquares();
	reset();

}

function setUpModeButtons(){
	for(var i=0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "EASY" ? numOfSquares = 3: numOfSquares =6;  
			reset();
		});
	}
}

function setUpSquares(){
	for(var i=0 ; i<squares.length ; i++){
	//add colors to each square
	squares[i].style.backgroundColor = colors[i];

	//add click event listener
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!!";
			colorsChange(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";

		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});

}
}

function reset(){
	colors = generateRandomColor(numOfSquares);
     //pick a new color
     pickedColor = pickRandomColor();
     //change the Displaycolor
     colorDisplay.textContent = pickedColor;
    // messageDisplay.textContent = "New Colors";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

     //loop and change the background color for all squares
     for(var i=0 ; i<squares.length ; i++){
     	if(colors[i]){
     		squares[i].style.display = "block";
     		squares[i].style.backgroundColor = colors[i];
     	}else{
     		squares[i].style.display = "none";
     	}
     }

     h1.style.backgroundColor = "steelblue";

 }


/*easyButton.addEventListener("click",function(){
      easyButton.classList.add("selected");
      hardButton.classList.remove("selected");
      numOfSquares = 3;
      colors = generateRandomColor(numOfSquares);
      pickedColor = pickRandomColor();
      colorDisplay.textContent = pickedColor;

      for(var i=0 ; i<squares.length ; i++){
      	if(colors[i]){
      		squares[i].style.backgroundColor = colors[i];
      	}else{
      		squares[i].style.display = "none";
      	}
	    
}
});

hardButton.addEventListener("click",function(){     
     hardButton.classList.add("selected");
     easyButton.classList.remove("selected");
     numOfSquares = 6;
     colors = generateRandomColor(numOfSquares);
      pickedColor = pickRandomColor();
      colorDisplay.textContent = pickedColor;

      for(var i=0 ; i<squares.length ; i++){
      		squares[i].style.backgroundColor = colors[i];
      		squares[i].style.display = "block";   
}
});

*/
resetButton.addEventListener("click",function(){
	
	reset();
});


function colorsChange(color){
	for( var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
	
}

function pickRandomColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){

	var arr = [];

	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){

		//random color for red = 0 to 255 similarly for green and blue

		var r = Math.floor(Math.random() * 256);	

		var g = Math.floor(Math.random() * 256);	
		
		var b = Math.floor(Math.random() * 256);			

		return "rgb(" + r + ", " + g + ", " + b + ")";
	}