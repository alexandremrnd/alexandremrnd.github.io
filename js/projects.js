/* DARK MODE */
let card = document.getElementsByClassName("card");
let tag = document.getElementsByClassName("tag");
let button = document.getElementsByClassName("button");

window.addEventListener("load", loaded);

function loaded() {
  if(document.cookie == ''){
    document.cookie = 'darkmode=0; path=/';
  }
  checkCookie();
  switchDLFunctionProjects();
}

function switchDLFunctionProjects() {
  switchDLFunction();
  if (document.getElementById("switchDLbutton").checked || document.getElementById("switchDLbuttonmobile").checked) {
    for (var i = 0; i < card.length; i++) {
      card[i].style.background = "#353535";
      card[i].style.boxShadow = "none";
      button[i].style.border = "none";
      button[i].style.background = "linear-gradient(to right bottom,rgba(163, 163, 163, 0.7),rgba(124, 123, 123, 0.5))";
      button[i].style.color = "#d4d4d4";
    }
    for (let i = 0; i < tag.length; i++) {
      tag[i].style.background = "#292929";
    }
  } else {
    for (var i = 0; i < card.length; i++) {
      card[i].style.background = "linear-gradient(to left top,rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.3))";
      card[i].style.boxShadow = "6px 6px 20px rgba(122, 122, 122, 0.2)";
      button[i].style.background = "linear-gradient(to right bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))";
      button[i].style.color = "#426696";
      button[i].style.border = "solid 1px #426696"
    }
    for (let i = 0; i < tag.length; i++) {
      tag[i].style.background = "linear-gradient(to left top,rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.3))";
    }
  }
}
