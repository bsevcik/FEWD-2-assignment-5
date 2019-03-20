/*eslint-env browser*/

//STEP 1
function beenClicked() {
    "use strict";
    window.alert("I have been clicked");
}
//STEP 2
window.document.getElementById("q2").onclick = beenClicked;


//STEP 3
window.document.getElementById("q3").addEventListener("click", beenClicked);

//STEP 4
window.document.getElementById("q4").addEventListener("click", function () {
    "use strict";
    window.alert("I have been clicked");
});
//STEP 5
function q5Function () {
    window.document.getElementById("q5").addEventListener("click", function () {
    "use strict";
    window.alert("I have been clicked");
    });
}
//window.document.addEventListener("load") didn't do anything. Took out document and it's all good!
window.addEventListener("load", q5Function);

//STEP 6
window.document.getElementById("redirect").addEventListener("click", function (e) {
    e.preventDefault();
    alert("You're trying to go to Google, but you should stay here!")
})

//STEP 7
window.document.getElementById("q7b").addEventListener("click", function (e) {
    window.document.getElementById("q7b").disabled = true;
    var q7Text = window.document.getElementById("q7t").value;
    window.alert(q7Text);
})

//STEP 8
window.document.getElementById("q8").addEventListener("click", function () {
    newWindow();
});
function newWindow() {
  newWin = window.open("newpage.html", "", "width=300, height=300");  // Opens a new window
    newWin.addEventListener("load", function () {
        resizeNewWindow();
    })
}
function resizeNewWindow() {
    newWin.resizeTo(500, 300);
}
//STEP 9
var keepGoing;
//function learning (e) {
//    keepGoing = e;
//    while (e == true) {
//        setInterval(function () {
//            window.console.log("I'm learning JavaScript");
//            console.log(keepGoing);
//        }, 2000);
//        e = keepGoing;
//    } 
////        else if (e == false) {
////        clearInterval(keepGoing);
////            console.log(keepGoing);
////    }
////    keepGoing;
//
//}
function q9alert () {
    "use strict";
    window.console.log("I'm learning JavaScript");
}
function start() {
    "use strict";
    keepGoing = window.setInterval(q9alert, 2000);
}

function stop() {
    "use strict";
    window.clearInterval(keepGoing);
}

window.document.getElementById("q9").addEventListener("click", function (e) {
//    keepGoing = true;
    console.log(e.srcElement.value);
    if (e.srcElement.value == "Stop!") {
        stop();
    } else if (e.srcElement.value == "Start") {
        start();
    }
//    console.log(keepGoing);
//    while (keepGoing == true) {
//        setInterval(function () {
//        window.console.log("I'm learning JavaScript");
//    }, 2000);
//    }
//    learning(keepGoing);
//    return keepGoing;
});

//STEP 10
window.document.getElementById("q10").addEventListener("click", function () {
    "use strict";
    window.alert(document.getElementById("q10Select").value);
});
