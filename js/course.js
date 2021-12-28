/* DARK MODE */
let card = document.getElementsByClassName("card");
let cvbutton = document.querySelector(".cvbutton");

window.addEventListener("load", loaded);

function loaded() {
  if(document.cookie == ''){
    document.cookie = 'darkmode=0; path=/';
  }
  checkCookie();
  switchDLFunctionCourse();
}

function switchDLFunctionCourse() {
  switchDLFunction();
  if (document.getElementById("switchDLbutton").checked || document.getElementById("switchDLbuttonmobile").checked) {
    for (var i = 0; i < card.length; i++) {
      card[i].style.background = "#353535";
      card[i].style.boxShadow = "none";
    }
    
    cvbutton.classList.add("cvbutton-dark");
  } else {
    for (var i = 0; i < card.length; i++) {
      card[i].style.background = "linear-gradient(to left top,rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.3))";
      card[i].style.boxShadow = "6px 6px 20px rgba(122, 122, 122, 0.2)";

    }
    
    cvbutton.classList.remove("cvbutton-dark");
  }

}
