/* template GTAT2 Game Technology & Interactive Systems */
/* Autor: Jonas Mantay */
/* Übung Nr. 01 */
/* Datum: 11.10.2023*/

/* declarations */
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;
var h = 50;


/* prepare program */
function setup() {
  createCanvas(windowWidth, windowHeight);
}

/* run program */
function draw() {
  background(255);

  /* administration */
  fill(0);
  textSize(32);
  text("CANON GOLF", 450, 300);


  /* calculation */


  /* display */
  drawRectangle(100, 500, 740, h, '#315996');
  drawRectangle(860, 500, 240, h, '#315996');
  drawRectangle(840, 520, 20, h - 20, '#315996');

  drawRectangle(1100, 200, 80, 350, '#a4adbb');

  /* Fahne */
  
  drawTriangleStroke(903, 320, 950, 340, 903, 360, '#FFD700','#315996',3);
  drawRectangle(900, 320, 5, 180, '#000000');

  drawTriangle(1000, 500, 1100, 500, 1100, 450, '#315996');

  drawCircle(500, 490, 20, '#FF1424');
  drawCircle(600, 490, 20, '#49F070');


  /* Canon */
 
  
  drawRotatedCanon(100, 500, 180, 5, Math.PI*1.9, '#000000');

  drawCircle(100, 500, 10, '#000000');


}

/* isr */
function windowResized() {						/* responsive design */
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  resizeCanvas(windowWidth, windowHeight);
}
