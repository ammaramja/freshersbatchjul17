function cal_birthyear(){

	var a = document.getElementById('age').value;
	console.log(a);
	var curr_year = new Date();
	var year = curr_year.getFullYear();

	alert(year-a)  ;

}
