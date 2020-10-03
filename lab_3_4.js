var Employee = new Object();
Employee.name = "Big Boss";
Employee.department = "Evil";
Employee.phone = "666-69-69";
Employee.salary = "$420.0";
 
function printEmployee()
{
	for (var i in Employee)
	{
        if(i != "print"){
            console.log(i+": "+Employee[i]); // Перебор свойств
        }
	}
}
Employee.print = printEmployee;
Employee.print();