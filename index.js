function a(e){
    if(e == "w")
    var aud = new Audio("sounds/crash.mp3");
    else if(e == "a")
    var aud = new Audio("sounds/kick-bass.mp3");
    else if(e == "s")
    var aud = new Audio("sounds/snare.mp3");
    else if(e == "d")
    var aud = new Audio("sounds/tom-1.mp3");
    else if(e == "j")
    var aud = new Audio("sounds/tom-2.mp3");
    else if(e == "k")
    var aud = new Audio("sounds/tom-3.mp3");
    else if(e == "l")
    var aud = new Audio("sounds/tom-4.mp3");
        
    aud.play();
}

function addAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },100);
}

for(var i=0;i<document.querySelectorAll("button").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(event){
        a(this.textContent);
        addAnimation(this.textContent);
    });
}

document.addEventListener("keydown",function(event){
    a(event.key);
    addAnimation(event.key);
});

