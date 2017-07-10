function multiplication()
{
	var num = document.getElementById('num').value;
	var result = [];

	for(x = 1; x<11 ; x++)
	{
		result.push(num * x);
	}
	//document.writeln(result);
	var s = result.toString() + " Do you wanna continue?" ;
	if(confirm(s))
	{
		window.open(window.parent.location);
	}

}
/*
while(confirm("Table of next number"))
{
	multiplication();
}
	*/