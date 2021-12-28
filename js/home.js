/* DARK MODE */
let block1 = document.getElementsByClassName("block1");
let block2 = document.getElementsByClassName("block2");
let block3 = document.getElementsByClassName("block3");

let button = document.getElementsByClassName("button");

let part4 = document.querySelector(".part4");

window.addEventListener("load", loaded);

function loaded() {
    if (document.cookie == '') {
        document.cookie = 'darkmode=0; path=/';
    }
    checkCookie();
    switchDLFunctionHome();
}


function switchDLFunctionHome() {
    switchDLFunction();
    if (document.getElementById("switchDLbutton").checked || document.getElementById("switchDLbuttonmobile").checked) {
        for (var i = 0; i < block1.length; i++) {
            block1[i].style.background = "rgb(53, 53, 53)";
        }

        for (var i = 0; i < block2.length; i++) {
            block2[i].style.background = "rgb(53, 53, 53)";
        }

        for (var i = 0; i < block3.length; i++) {
            block3[i].style.background = "rgb(53, 53, 53)";
        }

        for (var i = 0; i < button.length; i++) {
            button[i].style.border = "none";
            button[i].style.background = "linear-gradient(to right bottom,rgba(163, 163, 163, 0.7),rgba(124, 123, 123, 0.5))";
            button[i].style.color = "#d4d4d4";
        }

        part4.style.background = "rgb(53, 53, 53)";


    } else {
        for (var i = 0; i < block1.length; i++) {
            block1[i].style.background = "linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.2))";
        }

        for (var i = 0; i < block2.length; i++) {
            block2[i].style.background = "linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.2))";
        }

        for (var i = 0; i < block3.length; i++) {
            block3[i].style.background = "linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.2))";
        }

        for (var i = 0; i < button.length; i++) {
            button[i].style.background = "linear-gradient(to right bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))";
            button[i].style.color = "#426696";
            button[i].style.border = "solid 1px #426696"
        }

        part4.style.background = "linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.2))";
    }
}