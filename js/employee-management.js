/*eslint-env browser*/
var command;
var employeeList = [
        "Zak Ruvalcaba",
        "Sally Smith",
        "Fred Franklin",
        "John Smith",
        "Jane Caruthers"];

document.getElementById("checkIn").addEventListener("click",
    function update() {
        "use strict";
        var time = new Date();
        var timeNow = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        if (document.getElementById("nameTyped").value === "" || document.getElementById("titleTyped").value === "" || document.getElementById("extensionTyped").value === "") {
            window.alert("You need to fill out all three forms");
        } else {
            var name = document.getElementById("nameTyped").value;
            var nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
            employeeList.push([nameCapitalized, document.getElementById("titleTyped").value, document.getElementById("extensionTyped").value, "<input onclick='deleteEmployee(this)' type='button' class='tableButton' value='Return'>"]);
//            clearTable();
            showEmployees();
//    optionally call the function to export data to Csv. It was annoying so I turned it off.
//            exportToCsv();
//            window.console.log(checkedInArray);


//This clears the written input forms after the information is written to checkedInArray and focuses back on nameTyped at the top of the form
            document.getElementById("nameTyped").value = "";
            document.getElementById("titleTyped").value = "";
            document.getElementById("extensionTyped").value = "";
//            document.getElementById("nameTyped").focus();
        }

    }
);


var employeeList = [
        "Zak Ruvalcaba",
        "Sally Smith",
        "Fred Franklin",
        "John Smith",
        "Jane Caruthers"];


function showEmployees() {
    "use strict";
    clearTable();
    for (var i = 0; i < checkedInArray.length; i++) {
        document.getElementById("checkedIn").innerHTML += "<tr><td>" + checkedInArray[i][0] + "</td> <td>" + checkedInArray[i][1] + "</td> <td>" + checkedInArray[i][2] + "</td><td>" + checkedInArray[i][3] + "</td><td>" + checkedInArray[i][4] + "</td></tr>";
    }
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
//    var employeeList, command;
//    displayMenu();
    
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
//main();