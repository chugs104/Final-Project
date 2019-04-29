var a = document.querySelector('#aInput');
var b = document.querySelector('#bInput');
var c = document.querySelector('#cInput');

button.addEventListener('click', runFunction.solveEquation);
    
function solveEquation(a, b, c) {
    var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    return result + "<br>" + result2;
}
