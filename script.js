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
    if (document.querySelector(".x1").innerHTML === "NaN") {
      document.querySelector(".x1").innerHTML = "No value"
    }
    else {
      document.querySelector(".x1").innerHTML = result1.toFixed(5);
    }
    if (document.querySelector(".x2").innerHTML === "NaN") {
      document.querySelector(".x2").innerHTML = "No value"
    }
    else {
      document.querySelector(".x2").innerHTML = result2.toFixed(5);
}
}

button.addEventListener('click', solveEquation, "false");

button2.addEventListener ('click', resetVariable, "false")

function resetVariable() {
  document.querySelector(".x1").innerHTML = ""
  document.querySelector(".x2").innerHTML = ""
  document.querySelector("#aInput").value = ""
  document.querySelector("#bInput").value = ""
  document.querySelector("#cInput").value = ""
}

function vertexPoints() {
  xVertex = (-b / (2 * a));
  yVertex = (a * ((-b / (2 * a))(-b / (2 * a))) + b * (-b / (2 * a)) + c)
  if (document.querySelector(".x1").innerHTML === "NaN") {
    document.querySelector(".").innerHTML = "No value"
  }
  else {
    document.querySelector(".xVertexValue").innerHTML = xVertex.toFixed(5);
  }
  if (document.querySelector(".x2").innerHTML === "NaN") {
    document.querySelector(".").innerHTML = "No value"
  }
  else {
    document.querySelector(".yVertexValue").innerHTML = yVertex.toFixed(5);
}
}
