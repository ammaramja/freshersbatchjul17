num = 3
function val()
{
	a = document.getElementById('userid').value;
		b = document.getElementById('pwd').value;

		
		if(!check(a,b) && num>0)
		{	
			num -= 1;
			if(num == 0)
			{
				alert("No more attempts left! You are being redirected to a new page!");
				window .location("error.html");
			}
			else
			{
			s = num.toString()+" more attempts left!"
			alert(s);
			}
		}
}

function check(a,b)
{
	userid = 'ammar';
		pwd = 'ooo';

		if(userid == a && pwd == b)
		{
			alert("success");
			return true;
		}
		else
			return false;

}