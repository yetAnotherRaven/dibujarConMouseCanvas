document.addEventListener("mousedown", startDrawing); //detectar click
document.addEventListener("mouseup", finishDrawing); //detectar cuando sueltas click
document.addEventListener("mousemove", mouseDraw); //detectar movimiento del mouse

var cuadrito = document.getElementById("areaDeDibujo"); //obtienes canvas
var papel = cuadrito.getContext("2d"); //se le asigna un contexto 2D

var colorcito = "black"; // color de la linea

var xInit; //coordenada inicial en x
var yInit; //coordenada inicial en y
var isClicked = 0; // Estaod del click. 1= presionado, 0= no presionado


function startDrawing() //comienza a dibujar
{

  isClicked = 1; //cambia el estado del click a positivo
  xInit = event.layerX; //obtiene coordenadas en x del canvas
  yInit = event.layerY; //obtiene coordenadas en y del canvas
}//end startDrawing

function finishDrawing() //finaliza el dibujo
{

    isClicked = 0; //cambia el estado del click a negativo
}//end finishDrawing

function mouseDraw() //dibujar con el movimiento del mouse
{
  while(isClicked==1) //mientras isClicked sea positivo
  {
    // xInit/yInit son las coordenadas del click inicial
    //event.layerX/Y son las coordenadas del movimiento del mouse
    dibujarLinea(colorcito, xInit,yInit,event.layerX,event.layerY,papel);
    //para generar una linea continua se asignan los ultimos valores de la
    //posicion del mouse a xInit/yInit
    xInit = event.layerX;
    yInit = event.layerY;
    //sigue el ciclo
  }//end while
}//end mouseDraw

function dibujarLinea(color, xInicial,yInicial,xFinal,yFinal,lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle =color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xInicial,yInicial);
  lienzo.lineTo(xFinal,yFinal);
  lienzo.stroke();
  lienzo.closePath();
}//end dibujarLinea
