//variables
/*variables act as a container which contains various data as temporary basis for mathmetical or logical
operation on these data.*/ 

var one;
/*document.write(one+"<br>");

var two = 5;//Value assign in the variable using assignment operator(=)

document.write(two+"<br>");

document.write('2/3');*/

var two = 3; //Numeric type (Integer)

var add = one + two;

var minus = one - two;

var multiply = one * two;

var divide = one/two;

var st = "araman"; //String type value

var arr = new Array(); // Array Object

var bool = false; //Boolean type value

var floating_point = 10.5; //Float type value

var obj = new Object(); //Object Type variable

var dt = new Date();//Date type variable and object

//var age = prompt("Enter your age");
//alert('Your age is:'+age);
//document.write("Your age is:"+age+"<br>");

//console.log("Your age is:"+age);

function getTotal()
{
	var num1 = parseFloat(prompt("Enter first number:"));
	var num2 = parseFloat(prompt("Enter second number:"));
	var total = num1 + num2;
	document.getElementById("showtotal").innerHTML = total;
}

var name = "araman";
var age = 43;

var message = `My name is ${name} and I am ${age} years old`; //Template literal

document.write(message);
	

document.write(addnum+"<br>");

document.write(st+"<br>");

document.write(divide+"<br>");

//document.write(obj);
document.write(dt);

