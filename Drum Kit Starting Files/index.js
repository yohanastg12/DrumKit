// ini ada cara yang susah
// document.querySelectorAll(".drum")[0].addEventListener("click", cobaKlik)
// document.querySelectorAll(".drum")[1].addEventListener("click", cobaKlik)
// document.querySelectorAll(".drum")[2].addEventListener("click", cobaKlik)
// document.querySelectorAll(".drum")[3].addEventListener("click", cobaKlik)
// document.querySelectorAll(".drum")[4].addEventListener("click", cobaKlik)
// document.querySelectorAll(".drum")[5].addEventListener("click", cobaKlik)
// document.querySelectorAll(".drum")[6].addEventListener("click", cobaKlik)
//ada dua parameter, yang pertama itu click yaitu tipenya 


//ini cara yang mudah, menggunakan loop 
var nomorTombol = document.querySelectorAll(".drum").length;

for (var i=0; i<nomorTombol; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    }
    )
}


document.addEventListener("keydown", function(event){
    makeSound(event.key);
}   )
    // console.log(event);
    function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();    
            break;
    
        default:
            break;
    }
}



