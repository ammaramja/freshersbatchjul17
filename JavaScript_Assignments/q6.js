function checker()
{
	var a = document.getElementById('n1').value;
	var b = document.getElementById('n2').value;
	var f = 0;
	for (x = a+1 ; x < b; x++)
	{
		if(check(x))
		{
			var s = "Prime number is " + x.toString();
			alert(s);
			break;
		}
	}
	alert("NO");
}

function check(x)
{
	f = 0;
	for(y=2;y<= x/2;y++)
	{
		if(x%y==0)
		{
			f = 1;
			break;
		}
	}
	if (f==0)
	{
		return true;
	}
	else
		return false;
}