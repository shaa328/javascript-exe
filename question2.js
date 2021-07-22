var num1 ;
var num2 ;
 function addNum(num1, num2){
   return num1 + num2

 }
 document.getElementById('question2').innerHTML = addNum(1, 2);

 function multiNum(num1, num2){
   return num1 * num2
 }
 document.getElementById('question2a').innerHTML = multiNum(3, 2);

 function subtractNum(num1, num2){
   return num1 - num2
 }
 document.getElementById('question2b').innerHTML = subtractNum(4, 2);

 function divideNum(num1, num2){
   return num1 / num2
 }
 document.getElementById('question2c').innerHTML = divideNum(4, 2);
