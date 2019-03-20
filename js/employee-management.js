/*eslint-env browser*/
var command;

function displayMenu() {
    "use strict";
    window.console.log("Welcome to the Employee Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("show - Show all employees");
    window.console.log("add - Add a new employee");
    window.console.log("del - Delete an existing employee");
    window.console.log("exit - Exit the application");
    window.console.log("");
}
function showEmployees(arg) {
    "use strict";
    var i = 1;
    arg.forEach(function (employee) {
        window.console.log(i + ". " + employee);
        i += 1;
    });
    window.console.log("");
}
function addEmployees(arg) {
    "use strict";
    var employee = window.prompt("Enter the employee\'s name");
    arg.push(employee);
    window.console.log(employee + " was added.\n");
}
function deleteEmployees(arg) {
    "use strict";
    var num, employee;
    num = parseInt(window.prompt("Employee number to delete"), 10);
    if (num < 1 || num > arg.length) {
        window.alert("Invalid employee number");
    } else {
        delete arg[num - 1];
    }
}
function main() {
    "use strict";
    var employeeList, command;
    displayMenu();
    
    employeeList = [
        "Zak Ruvalcaba",
        "Sally Smith",
        "Fred Franklin",
        "John Smith",
        "Jane Caruthers"];
    
//    while (true) {
//        command = window.prompt("Enter command");
    
        if (command !== null) {
            if (command == "show") {
                showEmployees(employeeList);
            } else if (command == "add") {
                addEmployees(employeeList);
            } else if (command == "del") {
                deleteEmployees(employeeList);
//            } else if (command == "exit" || command == "break") {
//                break;
            } else {
                window.console.log("That is not a valid command");
            }
        }
    }
//    window.console.log("program terminated");
//}
main();