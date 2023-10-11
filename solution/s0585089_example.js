/* template GTAT2 Game Technology & Interactive Systems */
/* Autor: Jonas Mantay */
/* Übung Nr. 01 */
/* Datum: 11.10.2023*/

/* declarations */ 
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

/* prepare program */
function setup() {								
  createCanvas(windowWidth, windowHeight);
}

/* run program */
function draw() {									
background(255);

/* administration */
	fill(0);
	text("this is an example", 200, 50);
	
/* calculation */
	

/* display */
	drawRedRectangle(canvasWidth/2, canvasHeight/2, canvasWidth/5, canvasHeight/5, '#ff0000');
}

/* isr */
function windowResized() {						/* responsive design */
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  resizeCanvas(windowWidth, windowHeight);
}
