function division()
{
	var f = document.getElementById('f_num').value;
	var s = document.getElementById('s_num').value;

	if (s == 0)
	{
		alert("Dividend cannot be zero!");
	}
	else
		alert(f/s);
}
