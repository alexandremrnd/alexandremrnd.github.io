/* DARK MODE */
let block1 = document.getElementsByClassName("block1");
let block2 = document.getElementsByClassName("block2");
let block3 = document.getElementsByClassName("block3");

let gobackbuton = document.querySelector(".gobackbutton");

window.addEventListener("load", loaded);

function loaded() {
  if(document.cookie == ''){
    document.cookie = 'darkmode=0; path=/';
  }
  checkCookie();
  switchDLFunctionPPage();
}

function switchDLFunctionPPage() {
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

    gobackbuton.style.background = "linear-gradient(to right bottom,rgba(80, 79, 79, 0.7), rgba(70, 69, 69, 0.5))";
    gobackbuton.style.color = "#cfcfcf";

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

    gobackbuton.style.background = "linear-gradient(to right bottom,rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.7))";
    gobackbuton.style.color = "#658ec6";
  }
}
