 var fruits = ["Apple", "Banana", "Orange", "Mango", "Blackbeery", "Papaya", "Grape", "Pineapple", "Custardapple", "BlueBerry"];
 var vegetables = ["potato", "tomato", "onion", "brinjal", "ladiesfinger", "carrot"];

 function intialize() {
     fruits;
 };

 function display() {
     fruits.toString();
     document.getElementById("dis").innerHTML = fruits;
 }

 function push() {
     fruits.push(document.getElementById('one').value);
     display();
 }

 function pop() {
     document.getElementById('two').innerHTML = fruits.pop();
     display();
 }

 function shift() {
     document.getElementById('three').innerHTML = fruits.shift();
     display();
 }

 function unshift() {
     fruits.unshift(document.getElementById('four').value);
     display();
 }

 function RemoveSplice() {
     fruits.splice(2, 2);
     document.getElementById('five').innerHTML = fruits;
     display();
 }


 function AddSplice() {
     fruits.splice(3, 0, "Lemon", "Kiwi");
     document.getElementById('six').innerHTML = fruits;
     display();
 }


 function concat() {

     fruits = fruits.concat(vegetables);
     display();
 }



 function myFunction() {

     var citrus = fruits.slice(1, 3);
     document.getElementById("seven").innerHTML = citrus;
     display();
 }

 function reverse() {
     fruits = fruits.reverse();
     display();
     
 }