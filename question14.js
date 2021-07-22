var fruits = ["Apple", "Banana"];


fruits.splice(1, 0, "Lemon", "Kiwi", "mango", "pineapple", "orange");
console.log(fruits);
document.getElementById("question14").innerHTML = (fruits[3]);
document.getElementById("question14a").innerHTML = (fruits.length);
document.getElementById("question14b").innerHTML = (fruits.reverse());
