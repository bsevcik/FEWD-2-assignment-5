/*eslint-env browser*/
var command;
var employeeList = [
        ["Zak Ruvalcaba", "Instructor", "1", "<input type='button' class='tableButton' value='Delete'>"],
        ["Sally Smith", "Student", "2", "<input type='button' class='tableButton' value='Delete'>"],
        ["Fred Franklin", "Principle", "3", "<input type='button' class='tableButton' value='Delete'>"],
        ["John Smith", "Student", "4", "<input type='button' class='tableButton' value='Delete'>"],
        ["Jane Caruthers", "Receptionist", "5", "<input type='button' class='tableButton' value='Delete'>"]
    ]

window.addEventListener("load", showEmployees);
        
// This function is meant to clear the HTML table after the form is submitted. It wasn't reliable when using tableRow.length, so I set it to delete as many items as are in the array. The form data is pushed to the array before clearTable() is run
function clearTable() {
    "use strict";
    for (var i = 0; i < employeeList.length; i++)
        document.getElementById("checkedIn").deleteRow(-1);
}

document.getElementById("addEmployee").addEventListener("click",
    function update() {
        "use strict";
        if (document.getElementById("nameTyped").value === "" || document.getElementById("titleTyped").value === "" || document.getElementById("extensionTyped").value === "") {
            window.alert("You need to fill out all three forms");
        } else {
            var name = document.getElementById("nameTyped").value;
            var nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
            employeeList.push([nameCapitalized, document.getElementById("titleTyped").value, document.getElementById("extensionTyped").value, "<input type='button' class='tableButton' value='Delete'>"]);
//            clearTable();
            showEmployees();
//            window.console.log(employeeList);
//This clears the written input forms after the information is written to employeeList and focuses back on nameTyped at the top of the form
            document.getElementById("nameTyped").value = "";
            document.getElementById("titleTyped").value = "";
            document.getElementById("extensionTyped").value = "";
//             document.getElementById("nameTyped").focus();
        }
    }
);

document.getElementById("checkedIn").addEventListener("click", function () {
    console.log(this);
    window.a = this;
})

function deleteEmployee(arg) {
    "use strict";
    // arg.
    // this.innerHTML = "";
    console.log(arg);
}

function showEmployees() {
    "use strict";
    clearTable();
    for (var i = 0; i < employeeList.length; i++) {
        document.getElementById("checkedIn").innerHTML += "<tr><td>" + employeeList[i][0] + "</td> <td>" + employeeList[i][1] + "</td> <td>" + employeeList[i][2] + "</td><td>" + employeeList[i][3] + "</td></tr>";
    }
    var employeeListLength = employeeList.length;
    document.getElementById("howManyShowing").innerText = employeeListLength + " employees showing";
}
// function addEmployees(arg) {
//     "use strict";
//     var employee = window.prompt("Enter the employee\'s name");
//     arg.push(employee);
//     window.console.log(employee + " was added.\n");
// }
// function deleteEmployee(arg) {
//     "use strict";
// console.log(arg);
// }
// function main() {
//     "use strict";
// //    var employeeList, command;
// //    displayMenu();
    
//     employeeList = [
//         "Zak Ruvalcaba",
//         "Sally Smith",
//         "Fred Franklin",
//         "John Smith",
//         "Jane Caruthers"];
    
// //    while (true) {
// //        command = window.prompt("Enter command");
    
//         if (command !== null) {
//             if (command == "show") {
//                 showEmployees(employeeList);
//             } else if (command == "add") {
//                 addEmployees(employeeList);
//             } else if (command == "del") {
//                 deleteEmployees(employeeList);
// //            } else if (command == "exit" || command == "break") {
// //                break;
//             } else {
//                 window.console.log("That is not a valid command");
//             }
//         }
//     }
// //    window.console.log("program terminated");
// //}
// //main();