

function getTriangleArea (a, h) {
    
if (a > 0 && h > 0) {
    var value = a * h / 2
} else if (a < 0 || h < 0) {
    var value = 'błędne dane'
} else {
    var value = 'zero'
}
    
    return value;  
}

var triangleArea = getTriangleArea(10,10);
var triangleArea = getTriangleArea(20, 10);
var triangleArea = getTriangleArea(0, 0);

console.log (getTriangleArea(-10, 10))