const button = document.querySelector('#solve');
var a = document.querySelector('#aInput');
var b = document.querySelector('#bInput');
var c = document.querySelector('#cInput');
var result1;
var result2;

function solveEquation() {
  a = parseFloat(a);
  b = parseFloat(b);
  c = parseFloat(c);
    result1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    document.querySelector(".x1").innerHTML = result1;
    document.querySelector(".x2").innerHTML = result2;
}

button.addEventListener('click', solveEquation, "false");
