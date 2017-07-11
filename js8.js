var attempt=0;
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "zoozoo" && password == "zoozoo"){
alert ("Login successful");
}
else
{

if(attempt<3)
	{
	alert("Try again!");
	attempt++;
	}
else
	{
	alert("3 Invalid attempts");
	}
}
}
