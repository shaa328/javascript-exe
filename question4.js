function cuboidVol(width, length, height){
  return width * length * height ;
}
var x = cuboidVol(10, 20, 10);
document.getElementById("question4").innerHTML = x;
