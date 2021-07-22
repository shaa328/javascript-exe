const marks = [40, 100, 16, 57, 25, 10];


function myArrayMax(arr) {
return Math.max.apply(null, arr);
}
document.getElementById("question13").innerHTML = myArrayMax(marks);


function myArrayMin(arr) {
return Math.min.apply(null, arr);
}
document.getElementById("question13a").innerHTML = myArrayMin(marks);
