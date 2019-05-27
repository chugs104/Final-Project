const button = document.querySelector('#solve');
const button2 = document.querySelector('#reset');
const button3 = document.querySelector('#check');
const button4 = document.querySelector("#reset2");
const button5 = document.querySelector('#startQuiz');
var result1;
var result2;
var xVertex;
var yVertex;
var bGiven;
var aGiven;
var cGiven;
var ansX1;
var ansX2;
var ansX1Rounded;
var ansX2Rounded;
var ansVertX;
var ansVertY;
var ansVertXRounded;
var ansVertYRounded;

//This function is the basic function that solves the quadratic and gives the answers for the 4 result variables
function solveEquation() {
  var a = document.querySelector('#aInput').value;
  var b = document.querySelector('#bInput').value;
  var c = document.querySelector('#cInput').value;
  a = parseFloat(a);
  b = parseFloat(b);
  c = parseFloat(c);
    result1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    if (isNaN(result1)) {
      document.querySelector(".x1").innerHTML = "No value"
    }
    else {
      document.querySelector(".x1").innerHTML = result1.toFixed(5);
    }
    if (isNaN(result2)) {
      document.querySelector(".x2").innerHTML = "No value"
    }
    else {
      document.querySelector(".x2").innerHTML = result2.toFixed(5);
}
}
//This button connects the solve button to the solve equation
button.addEventListener('click', solveEquation, "false");
//This buttonlinks to the function that gives the vertex points
button.addEventListener('click', vertexPoints, "false");
//This button links to the function that gives the a, b, and c values for the quiz
button5.addEventListener('click', equationGenerator, "false");
//This button links to the function that resets the variables in the calculator
button2.addEventListener ('click', resetVariable, "false");
//This button links to the function that checks the answers of the quiz
button3.addEventListener ('click', checkAnswers, "false");
//This button links to the function that resets the quiz variables
button4.addEventListener ('click', resetQuiz, "false");

//This function is responsible for resetting the variables of the quadratic
function resetVariable() {
  document.querySelector(".x1").innerHTML = ""
  document.querySelector(".x2").innerHTML = ""
  document.querySelector("#aInput").value = ""
  document.querySelector("#bInput").value = ""
  document.querySelector("#cInput").value = ""
  document.querySelector(".xVertexValue").innerHTML = ""
  document.querySelector(".yVertexValue").innerHTML = ""
}

//This function obtains the x and y vertex points from the a, b, and c values
function vertexPoints() {
  a = document.querySelector('#aInput').value;
  b = document.querySelector('#bInput').value;
  c = document.querySelector('#cInput').value;
  xVertex = (-1 * b / (2 * a));
  yVertex = ((a * (xVertex * xVertex)) + (b * xVertex) + (1 * c));
    document.querySelector(".xVertexValue").innerHTML = xVertex.toFixed(5);
    document.querySelector(".yVertexValue").innerHTML = yVertex.toFixed(5);
}

function equationGenerator() {
  aGiven = Math.floor((Math.random() * ((10 - 1) + 1)) + 1);
  bGiven = Math.floor((Math.random() * ((22 - 11) + 1)) + 11);
  cGiven = Math.floor((Math.random() * ((-10 - (-60)) + 1)) + (-60));
    document.querySelector(".aGiven").innerHTML = aGiven;
    document.querySelector(".bGiven").innerHTML = bGiven;
    document.querySelector(".cGiven").innerHTML = cGiven;
}

function checkAnswers() {
  ansX1 = (-1 * bGiven + Math.sqrt(Math.pow(bGiven, 2) - (4 * aGiven * cGiven)) / (2 * aGiven));
  ansX2 = (-1 * bGiven - Math.sqrt(Math.pow(bGiven, 2) - (4 * aGiven * cGiven)) / (2 * aGiven));
  ansX1Rounded = Math.round(ansX1 * 100)/100;
  ansX2Rounded = Math.round(ansX2 * 100)/100;
  ansVertX = (-1 * bGiven / (2 * aGiven));
  ansVertY = ((aGiven * (xVertex * xVertex)) + (bGiven * xVertex) + (1 * cGiven));
  ansVertXRounded = Math.round(ansVertX * 100)/100;
  ansVertYRounded = Math.round(ansvertY * 100)/100;
  if (ansX1Rounded == X1.value) {
    document.querySelector("#X1").value = "Correct"
  }
  else {
    document.querySelector("#X1").value = "Incorrect"
  }
  if (ansX2Rounded == X2.value) {
    document.querySelector("#X2").value = "Correct"
  }
  else {
    document.querySelector("#X2").value = "Incorrect"
  }
  if (ansVertXRounded == xVertexQuiz.value) {
    document.querySelector("#xVertexQuiz").value = "Correct"
  }
  else {
    document.querySelector("#xVertexQuiz").value = "Incorrect"
  }
  if (ansVertYRounded == yVertexQuiz.value) {
    document.querySelector("#yVertexQuiz").value = "Correct"
  }
  else {
    document.querySelector("#yVertexQuiz").value = "Incorrect"
  }
}

function resetQuiz() {
  document.querySelector(".aGiven").innerHTML = ""
  document.querySelector(".bGiven").innerHTML = ""
  document.querySelector(".cGiven").innerHTML = ""
  document.querySelector("#X1").value = ""
  document.querySelector("#X2").value = ""
  document.querySelector("#xVertexQuiz").value = ""
  document.querySelector("#yVertexQuiz").value = ""
}
