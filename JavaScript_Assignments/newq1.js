function main()
{
	BankAccount.deposit(10000);
	console.log(BankAccount.accbal);
}
var BankAccount = {

accNo : 123,
accbal : 100000000,
accName : "Ammar",

withdraw : function(amt)
{
	this.accbal -= amt;
},

deposit : function(amt)
{
	this.accbal += amt;
}

};

