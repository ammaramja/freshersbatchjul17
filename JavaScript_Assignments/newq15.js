function bankacc(){
	this.nm = "a";
	this.num = "11";
	this.amnt = 10000;
}

bankacc.prototype.withdraw = function(a)
{
this.amnt -= a; 
alert(this.amnt);
}

bankacc.prototype.deposit = function(a)
{
this.amnt += a; 
alert(this.amnt);
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

