const button = document.querySelector('#solve');
const button2 = document.querySelector('#reset');
var result1;
var result2;
var xVertex;
var yVertex;

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

button.addEventListener('click', solveEquation, "false");

button.addEventListener('click', vertexPoints, "false");

button2.addEventListener ('click', resetVariable, "false")

function resetVariable() {
  document.querySelector(".x1").innerHTML = ""
  document.querySelector(".x2").innerHTML = ""
  document.querySelector("#aInput").value = ""
  document.querySelector("#bInput").value = ""
  document.querySelector("#cInput").value = ""
  document.querySelector(".xVertexValue").innerHTML = ""
  document.querySelector(".yVertexValue").innerHTML = ""
}

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
  var aGiven = Math.random() * ((10 - 1) + 1) + 1;
  var bGiven = Math.random() * ((22 - 11) + 1) + 11;
  var cGiven = Math.random() * ((-10 - (-60)) + 1) + (-60);
    document.querySelector(".aGiven").innerHTML = aGiven;
    document.querySelector(".bGiven").innerHTML = bGiven;
    document.querySelector(".cGiven").innerHTML = cGiven;
}

function resetQuiz() {
  document.querySelector(".aGiven").innerHTML = ""
  document.querySelector(".bGiven").innerHTML = ""
  document.querySelector(".cGiven").value = ""
  document.querySelector("#X1").value = ""
  document.querySelector("#X2").value = ""
  document.querySelector("#xVertexQuiz").innerHTML = ""
  document.querySelector("#yVertexQuiz").innerHTML = ""
}

