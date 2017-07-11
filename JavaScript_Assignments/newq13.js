
var k = {
	 nm : "jvkja",
	 num : "asf",
	 bal : 1000,

	 withdraw:function(a)
	 {
	 	this.bal -= a;
	 },
	 deposit:function(a)
	 {
	 	this.bal += a;
	 }


}



function withdraw()
{
	var kk = Object.create(k);

	kk.withdraw(100);
	alert(kk.bal);
}
function deposit()
{
	var kkk = Object.create(k);
	kkk.deposit(1000);
	alert(kkk.bal);
}