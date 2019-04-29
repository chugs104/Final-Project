var a = aInput;
var b = bInput;
var c = cInput;
    
function solveClicked(a, b, c) {
    var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    return result + "<br>" + result2;
}
