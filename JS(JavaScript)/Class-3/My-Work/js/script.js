//variables
/*variables act as a container which contains various data as temporary basis for mathmetical or logical
operation on these data.*/ 

/*
var st = "araman"; //String type value

var arr = new Array(); // Array Object

var bool = false; //Boolean type value

var floating_point = 10.5; //Float type value

var obj = new Object(); //Object Type variable

var dt = new Date();//Date type variable and object

document.write(typeof arr +"<br>");
document.write(typeof st +"<br>");
document.write(typeof bool +"<br>");
document.write(typeof floating_point +"<br>");
document.write(typeof dt +"<br>");*/

/*
Operators
________________

Mathemetical Operators
	+, -, *, /, %

Logical Operators

	&&(AND), ||(OR), !(NOT)

Comparison Operator

	== (Equal Op)
	!= (Not Eq)
	> (Greater Than)
	< (Less Than)
	>= (Greater Than or Equal)
	<= (Less Than or Equal)

Assignment Operators

	= (value assignment)
	=+ (assign and add)
	=- (subtruct then assign)
	=*
	=/

Increment/Decrement Operators
	 ++ (increment operator)
	 -- (decrement operator)

*/

/*var x = 5;

x+= 2;

x-=5;

x*=4;

var y =x % 3;

alert(y);

alert(x);
x-=4;
console.log(x);*/

/*Conditional Statement

if() statement
if...else statement
else.. if statement used for multiple condition check.
switch...case statement used for multiple condition check.

*/

/*var age = prompt("Enter Your Age");

if(age >= 18)
{
	//if condition is true
	document.write("You are adult");
}
else
{
	//if condition is not true
	document.write("You are child");
}

document.write("<br>");

var one = prompt("Enter first number");
var two = prompt("Enter second number");

one = parseInt(one);
two = parseInt(two);

if(one == two)
{
	document.write(one+"is equal to"+two);
}

else if(one < two)
{
	document.write(one+"is less than"+two);
}

else
{
	document.write(one+"is greater than"+two);
}*/

//switch...case statement

/*var grade = prompt("Enter Your Grade");

switch(grade)
{
	case 'A':case 'a':
	document.write("Good Mark!");
	break;

	case 'B': case 'b':
	document.write("Pretty mark");
	break;

	case 'C':
	document.write("Passed");
	break;

	case 'D':
	document.write("Not so good!");
	break;

	case 'F':
	document.write("Better Luck Next Time");
	break;

	default:
	document.write("Unknown Grade!");
}*/

let answer = prompt("What is the capital of France?\nA)Madrid\nB)Berlin\nC)Paris\nD)Rome\n\nEnter the letter of your answer:");

switch (answer) 
{
	case "A":
		alert("Wrong! The capital of France is not Mardird");
		break;
	case "B":
		alert("Wrong! The capital of France is not Berlin");
		break;
	case "C":
		alert("Correct! The capital of France is Paris");
		break;
	case "D":
		alert("Wrong! The capital of France is not Rome");
		break;

	default:
		alert("Invalid Choice!");
		break;
}


let answer2 = prompt("What is the capital of Bangladesh?\nA)Madrid\nB)Dhaka\nC)Paris\nD)Rome\n\nEnter the letter of your answer:");


switch(answer2)
{
	case "A":
	alert("Wrong! The capital of Bangladesh is not Madrid");
	break;

	case "B":
	alert("Correct! The capital of Bangladesh is Dhaka");
	break;

	case "C":
	alert("Wrong! The capital of Bangladesh is not Paris");
	break;

	case "D":
	alert("Wrong! The capital of Bangladesh is not Rome");
	break;

	default:
	alert("Invalid Choice!");
	break;
}

if(answer)
{
	document.write("Correct answer is:"+answer);
}

if(answer2)
{
	document.write("Correct answer is:"+answer2);
}

