/* Main javascript (onload Events) */
function main() {
  getCurrentWallpaper();
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

/* wallpaper settings */
function openWallpaper() {
    document.getElementById("settingsWallpaper").style.display = "block";
    rightClick('close');
}

function closeWallpaper() {
    document.getElementById("settingsWallpaper").style.display = "none";
}

function changeWallpaper(path) {
    document.getElementById("background").src = "img/" + path;
    getCurrentWallpaper();
}

var currentImg = "";

function getCurrentWallpaper(){
    var fullPath = document.getElementById("background").src;
    var filename = fullPath.replace(/^.*[\\\/]/, '');
    document.getElementById("currentImgName").innerHTML = "\"" + filename + "\"";
    document.getElementById("currentImg").src = fullPath;
};

function svgHover(id){
  if(id == "settingsMinimize"){
    document.getElementById(id).innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#949494'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M6 19h12v2H6v-2z'/></svg>";
  } else if(id == "settingsFull"){
    document.getElementById(id).innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#949494'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z'/></svg>";
  } else if(id == "settingsExit"){
    document.getElementById(id).innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#949494'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'/></svg>";
  }
}

function svgLeave(id){
  if(id == "settingsMinimize"){
    document.getElementById(id).innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M6 19h12v2H6v-2z'/></svg>";
  } else if(id == "settingsFull"){
    document.getElementById(id).innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z'/></svg>";
  } else if(id == "settingsExit"){
    document.getElementById(id).innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'/></svg>";
  }
}


function changeShelfPos(){
  alert("you clicked \"Shelf Position\"");
}

function autohideShelf(){
  alert("you clicked \"Autohide Shelf\"");
}


const log = document.getElementById('log');

document.addEventListener('keydown', logKey);

function logKey(e) {
  if(`${e.code}` == "MetaLeft"){
    toggleSearchApps();
  }
}

function toggleSearchApps() {
  if(document.getElementById("searchApps").className == "searchApps-Closed"){
    document.getElementById("searchApps").className = "searchApps-Open";
  } else if(document.getElementById("searchApps").className == "searchApps-Open"){
    document.getElementById("searchApps").className = "searchApps-Closed"
  }
}


/* Backgorund Image Input */
const image_input = document.querySelector("#image_input");

image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;});
  reader.readAsDataURL(this.files[0]);
});
