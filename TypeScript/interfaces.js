var circle = (function () {
    function circle() {
        this.circumference = 100;
    }
    circle.prototype.print = function () {
        console.log("circumference : ", this.circumference);
    };
    return circle;
}());
var employee = (function () {
    function employee() {
        this.name = 'ammar';
    }
    employee.prototype.print = function () {
        console.log("name : ", this.name);
    };
    return employee;
}());
var c = new circle;
var e = new employee;
function printAll(c, e) {
    c.print();
    e.print();
}
printAll(c, e);
