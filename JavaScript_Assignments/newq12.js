function Object(nm,num,amt)
{
	this.nm = nm,
	this.num = num,
	this.accbal = amt,

	this.withdraw=function (amt)
	{
	this.accbal -= amt;
	},

	this.deposit = function (amt)
	{
	this.accbal += amt;
	}
}
function main()
{
	var ammar = new Object("Ammar",1000,100000);
	ammar.withdraw(100);
	alert(ammar.accbal);
}
function main1()
{
	var ammar = new Object("Ammar",1000,100000);
	ammar.deposit(100);
	alert(ammar.accbal);
}