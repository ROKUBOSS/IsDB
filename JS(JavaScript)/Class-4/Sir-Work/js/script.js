//Logical Operators Ex. (&&, ||, !)

/*let name = "Asad";
let deg = "MSc";
let sub = "Math";
let marks = 70;

if(sub == "English" || (deg == "MSc" && !(marks <= 70)))
{
	alert(name);
}
else
{
	alert("Failed");
}
*/

//JavaScripts Loops

/*Practically loops are of three types

1. for loop 2. while 3. do...while loop

*/

/*var i = 1;

for(i; i < 10; i+=2.5)
{
	document.write("AcctNo."+i+"<br>");
}*/

/*var cnt = 1;

while(cnt < 10)
{
	document.write("Current count is:"+cnt+"<br>");
	cnt++;
}*/

//do...while loop (exit control)

/*var i = 2; //value initialization

document.write("Even numbers are listed upto 20"+"<br>");

do
{
	//action of what to do
	document.write(i+"<br>");
	i=i+2;

}
while( i <=20);*/

//break Statement

let sum = 0;

while(true)
{
	let value = +prompt("Enter a number");
	if(!value) break;
	sum+= value;
}

document.write('Sum is'+sum);