/*--------------------------------------------------
           Selecting different elements
--------------------------------------------------*/


var squares = document.querySelectorAll(".square");

var header1 = document.querySelector(".header1");
var header2 = document.querySelector(".header2");

var reset = document.getElementById("reset");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

var removedblocks = document.getElementById("removedblocks");


/*----------------------------------------------------------------------------
			Initializing array of colors and picking a color from that
----------------------------------------------------------------------------*/

var colors= generateColors(6);

var colorDisplay= document.getElementById("colorDisplay");
var colorPicker= colors[randomColorFromList()];


/*------------------------------------------------------------------------------
  		setting the RGB value in heading to the RGB value of picked color
------------------------------------------------------------------------------*/

colorDisplay.textContent=colorPicker;


/*----------------------------------------------------------
			Resting the game in selected mode
----------------------------------------------------------*/

reset.addEventListener("click", function(){

	if(removedblocks.style.display === "none")
	{
		easyMode();
	}

	else
	{
		hardMode();
	}

});



/*--------------------------------------------------------------
			When easy mode is selected
--------------------------------------------------------------*/

easy.addEventListener("click", function(){

	easy.classList.add("selected");
	hard.classList.remove("selected");

	easyMode();

});



/*---------------------------------------------------------------
			When hard mode is selected
---------------------------------------------------------------*/

hard.addEventListener("click", function(){

	hard.classList.add("selected");
	easy.classList.remove("selected");

	hardMode();

});



/*---------------------------------------------------------------
					Loading function
---------------------------------------------------------------*/

function loadingFunction(){
	for(var i=0; i<colors.length; i++)
	{
		// add initial colors
		squares[i].style.background = colors[i];



		// add event handlers
		squares[i].addEventListener("click", function(){

			var clickedColor = this.style.background;
			if(clickedColor === colorPicker)
			{
				document.getElementById("ans").textContent="Correct!";
				header1.style.background=clickedColor;
				header2.style.color=clickedColor;
				easy.style.color=clickedColor;
				hard.style.color=clickedColor;

				reset.textContent="PLAY AGAIN?";
				document.querySelector(".mybtn").style.color=clickedColor;

				for (var i = 0; i <colors.length; i++) {
				squares[i].style.background=clickedColor;
				}

			}

			else
			{
				document.getElementById("ans").textContent="Try Again!";
				this.style.background="black";
			}
		});
	
	}


}


/*-----------------------------------------------------------
			For resetting all the properties
-----------------------------------------------------------*/

function resetProperties(){
	reset.textContent="NEW COLORS";
	header1.style.background="lightblue";
	header2.style.color="lightblue";
	reset.style.color="lightblue";
	easy.style.color="lightblue";
	hard.style.color="lightblue";
	document.getElementById("ans").textContent="";

}



/*----------------------------------------------------------------
		For picking random color from the array of colors
----------------------------------------------------------------*/

function randomColorFromList()
{
	return Math.floor(Math.random() * colors.length);
	
}



/*------------------------------------------------------------------------
		Generating array of colors according to easy and hard mode
------------------------------------------------------------------------*/

function generateColors(num)
{
	// create array
	var colors = [];

	// genarate its elements
	for (var i = 0; i < num; i++) {
		colors[i]= randomColors();
	}

	// return array
	return colors;
}



/*-------------------------------------------------------------------------
			Producing the string in the form rgb(a, b, c)
-------------------------------------------------------------------------*/

function randomColors(){

	// for red from 0-255

	var red = Math.floor(Math.random() * 256);

	//for green from 0-255
	var green = Math.floor(Math.random() * 256);

	//for blue from 0-255
	var blue = Math.floor(Math.random() * 256);

	return "rgb("+red+", "+green+", "+blue+")";

}



/*-------------------------------------------------------------
			Easy mode functionalities
-------------------------------------------------------------*/

function easyMode()
{
	removedblocks.style.display = "none";
	
	//resetting properties
	resetProperties();


	// generating a new colors array
	colors= generateColors(3);

	//to pick a color
	colorPicker= colors[randomColorFromList()];

	//change the RGB heading accordingly
	colorDisplay.textContent=colorPicker;

	// to change the color of all squares
	loadingFunction();
}



/*-------------------------------------------------------------
			Hard mode functionalities
-------------------------------------------------------------*/

function hardMode()
{
	removedblocks.style.display = "block";

	//resetting properties
	resetProperties();

	// to generate all new colors
	colors= generateColors(6);

	// to pick a color
	colorPicker= colors[randomColorFromList()];

	//change the RGB heading accordingly
	colorDisplay.textContent=colorPicker;

	// to change the color of all squares
	loadingFunction();
}