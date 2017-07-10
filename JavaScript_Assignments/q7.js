function fact()
{
	num = document.getElementById('num').value;
	factt = 1
	for(x = 1;x<=num;x++)
	{
		factt = factt * x;
	}
	alert(factt);
}