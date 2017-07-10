function checker()
{
	var a = document.getElementById('char').value;
	
	if (a == 'a' || a == 'e' || a=='i'|| a=='o'||a=='u')
	{
		alert("Its a vowel");
	}
	else
		alert("Consonant!");
}