//multiplicaton table exercise -- Write a function that prints the entire multiplication table to the console: 1-12

//EX - 1*1 = 1, 1*2=2, 12*11=132, 12*12=144


function multiply (x, y){ //this line declares a function called 'multiply' (repeats until the first for loop condition of <=12 is met)

for (var x = 1; x <= 12; x++) //a for loop that declares as long as the condition x <=12 is met, add 1 to variable x
for (var y = 1; y <= 12; y++) // a second for loop that declares if y <=12, add 1 to variable y
console.log(x*y); //this prints the output to the console
}

multiply(); //this line calls the function multiply
