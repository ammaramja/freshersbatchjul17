var a = [];
function array()
{
	
	var mx = -99;
	var mn = 99;

	var total = Number(0);
	
	for (i=0; i< a.length;i++)
	{
		if(Number(a[i]) < mn)
		{
			mn = Number(a[i]);
		}
		if(Number(a[i]) > mx)
		{
			mx = Number(a[i]);
		}
		
		total += Number(a[i]);
		console.log(a[i]);
	}
	var avg = total / a.length;

	var display_string = mx.toString()+" "+mn.toString()+" "+total.toString()+" "+avg.toString();
	alert(display_string);
}
function push()
{

	a.push(document.getElementById('n1').value);
	console.log(a);
}