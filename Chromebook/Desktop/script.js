/* Main javascript (onload Events) */
function main() {
}

/* right click event on desktop */
function deskClick() {
    if (document.addEventListener) {
        document.addEventListener('contextmenu', function(e) {
            rightClick("open");
            e.preventDefault();
        }, false);
    } else {
        document.attachEvent('oncontextmenu', function(e) {
            rightClick("close");
            window.event.returnValue = false;
        });
    }
}

function rightClick(toggle) {
    var mouseX = event.clientX;     // Get the horizontal coordinate
    var mouseY = event.clientY;     // Get the vertical coordinate
    if(toggle == "open") {
        document.getElementById("rightClick").style.left = mouseX + "px";
        document.getElementById("rightClick").style.top = mouseY + "px";
        document.getElementById("rightClick").style.display = "block"; //here you draw your own menu
    }
    if(toggle == "close") {
        document.getElementById("rightClick").style.display = "none"; //here you draw your own menu
    }
}