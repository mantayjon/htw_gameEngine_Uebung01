/* template GTAT2 Game Technology & Interactive Systems - addOns */
/* Autor: Jonas Mantay */
/* Übung Nr. 01 */
/* Datum: 11.10.2023*/

/* draw shapes */

function drawRectangle(x, y, w, h, c) {
	fill(c);
	noStroke();
	rectMode(CORNER);
	rect(x, y, w, h);
}

function drawTriangle(x1, y1, x2, y2, x3, y3, c) {

	fill(c);
	noStroke();
	triangle(x1, y1, x2, y2, x3, y3);
}

function drawTriangleStroke(x1, y1, x2, y2, x3, y3, c1,c2,s) {

	fill(c1);
	stroke(c2);
	strokeWeight(s);
	triangle(x1, y1, x2, y2, x3, y3);
	
}

function drawCircle(x, y, d, c) {
	fill(c);
	noStroke();
	circle(x, y, d);
}