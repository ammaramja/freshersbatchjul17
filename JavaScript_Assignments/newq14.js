function bankacc(){
	var nm = "a";
	var num = "11";
	var amnt = 10000;

	return{
		deposit : function(a)
		{
			amnt += a;
			alert(amnt);
		}, 
		withdraw : function(a)
		{
			amnt -= a;
			alert(amnt);
		}
	}
}

function withdraw()
{
	var w_obj = new bankacc();
	w_obj.withdraw(1000);
}

function deposit()
{
	var d_obj = new bankacc();
	d_obj.deposit(1000);
}