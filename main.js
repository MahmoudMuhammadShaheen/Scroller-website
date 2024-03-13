const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const mountains3 = document.getElementById("mountains-3");
const mountains4 = document.getElementById("mountains-4");
const river = document.getElementById("river");
const boat = document.getElementById("boat");
const mountains7= document.getElementById("mountains-7");

const shaheen = document.querySelector(".ben-shaheen")



window.onscroll = function() {
    let value = scrollY;
    stars.style.left = value + "px";
    moon.style.top = value * 4 + "px"
    mountains3.style.top = value * 2  + "px"
    mountains4.style.top = value * 1.5  + "px"
    river.style.top = value + "px"
    boat.style.top = value + "px"
    boat.style.left = value *3 + "px"

    shaheen.style.fontSize = value + 'px'

    if (scrollY >= 67 ) {
        shaheen.style.fontSize = 67 + 'px'
        shaheen.style.posation="fixed";

        if (scrollY >= 478) {
            shaheen.style.display="none";
        }else {
            shaheen.style.display="block";
        }
        
        if(scrollY >= 128) {
            document.querySelector(".main").style.background = 'linear-gradient(#376281, #10001f)'

        }else {
            document.querySelector(".main").style.background = 'linear-gradient(#200016,#10001f)'

        }

    }
}