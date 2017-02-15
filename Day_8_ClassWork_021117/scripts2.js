//Example of data types w/an Array (Line 9)

/*var myName = "Emerald";  //String Variable

var numberOfStudents = 17;  //Number Variable

var likesJavaScript = true;  //Boolean Variable

var lunchOptions = [
  "Hot Taco",
  "Bucharest",
  "Rub Pub"
];

console.log (lunchOptions[2])
*/


//Take 2 arrays & list their indexes in order + total the items/array

//Lab 5

var itemNames = [
  "Apple", "Banana", "Orange", "Pear", "Watermelon"
];

var itemPrices = [
  0.57, 1.13, 2.50, 1.75, 4.99
];

for (var i=0; i<itemPrices.length; i++) {
     console.log (itemNames[i]+": $"+itemPrices[i]);
}

var sum = 0;

for (var x=0; x<itemPrices.length; x++) {
   sum += itemPrices[x];
}

console.log ("Total: "+sum);

/* Output to HTML with .document or print, etc. */
