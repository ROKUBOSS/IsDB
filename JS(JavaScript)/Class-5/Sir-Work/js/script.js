//Single Dimention Array 

//var employees = new Array(5);//Size or length of the array is 5

//Or

/*var employees = ["Admin",{name: 'Asad'},true,1500,function(){alert('Hello');}];

employees[4]();

alert(employees[1].name);*/


/*var employees = ["hasan","jahid","Malek","Mukta","Sagor","kamal"];

for(i = 0; i < employees.length; i++)
{
	document.write(employees[i]+"<br>");

}*/

//Multidimention Array

var userData = [

				["Araman",43],
				["Hasan",45],
				["Kamal",35],
				["Jamal",43],
				["Zahir",25],
				["Kamal",30]


];

for(i = 0; i < userData.length; i++)//Outer loop
{
	for(var j = 0; j < userData[i].length; j++)//Inner loop
	{
		document.write(userData[i][j]+"<br>");
	}
}

