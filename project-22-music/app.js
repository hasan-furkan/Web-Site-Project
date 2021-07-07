const icon = document.getElementById("icon");
const audio = document.getElementById("audio");
const redo = document.getElementById("redo");

let num = 0;
icon.onclick = function() {
    if(num == 0){
        num = 1;
        icon.src = "./assets/pause.png";
        audio.play();
        
    }else{
        num = 0
        icon.src = "./assets/play.png";
        audio.pause();
    }
}

redo.onclick = function() {
    audio.pause();
    audio.currentTime = 0;
    num = 0
    icon.src = "./assets/play.png";
}