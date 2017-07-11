function employee(id,name,sal,dept)
{
	var empid = id;
	var empname = name;
	var salary = sal;
	var deptNo = dept;

	return {
		getEmpId : function()
		{
			return empid; 
		}
		getEmpname : function()
		{
			return empname; 
		}
		getSalary : function()
		{
			return salary; 
		}
		getdeptNo : function()
		{
			return deptNo; 
		}
	}
};

var EmployeeList = (function(){
	var Employee = [];

	return{
		add:function(employee)
		{
			Employee.push(employee);
		}
		sort: function()
		{

		}
		get:function()
		{
			return Employee;
		}
	}

})();

function main()
{
	var e1 = new employee(123,"A",1000,"IT");

	EmployeeList.add(e1);

}