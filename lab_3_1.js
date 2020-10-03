function Employee(name, department, phone, salary){
    this.name = name;
    this.department = department;
    this.phone = phone;
    this.salary = salary;
}
var BigBoss = new Employee("Big Boss","Evil","666-69-69", "$420.0");
console.log(BigBoss);
Employee.prototype.address = "Hell St. 72";
console.log(BigBoss.address);