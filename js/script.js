let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".link");
let iconsLinks = document.querySelectorAll(".socialicons");
let loader = document.querySelector(".loader-wrapper");
let loaderCircle = document.querySelector(".loader");
let gobackbutton = document.querySelector(".gobackbutton");

let pGitHub = document.querySelector(".gotogithubtxt");
let iconGitHub = document.querySelector(".githubicon");

let pBehance = document.querySelector(".gotobehancetxt");
let iconBehance = document.querySelector(".behanceicon");

let smallscreenicon = document.querySelector(".smallscreenicon");

window.addEventListener("mousemove", cursor);
window.addEventListener("load", loaded);


function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

function loaded() {

  loader.style.opacity = "0";
  loader.ontransitionend = () => {
    loader.remove();
  };;
}

setTimeout(function () {
  loaderCircle.style.opacity = "1";
}, 100);

if (gobackbutton !== null) {
  gobackbutton.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
  gobackbutton.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
}

if (pGitHub !== null) {
  pGitHub.addEventListener("mouseleave", () => {
    iconGitHub.classList.remove("icontxt");
  });
  pGitHub.addEventListener("mouseover", () => {
    iconGitHub.classList.add("icontxt");
  });
}

if (pBehance !== null) {
  pBehance.addEventListener("mouseleave", () => {
    iconBehance.classList.remove("icontxt");
  });
  pBehance.addEventListener("mouseover", () => {
    iconBehance.classList.add("icontxt");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
});

iconsLinks.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
});

/* DARK MODE */
let glass = document.querySelector(".glass");
let main = document.querySelector(".main");
let dashboard = document.querySelector(".dashboard");
let menudark = document.querySelector("#menu");

let circle1 = document.querySelector(".circle1");
let circle2 = document.querySelector(".circle2");
let circle3 = document.querySelector(".circle3");

let h1 = document.getElementsByTagName("h1");
let h2 = document.getElementsByTagName("h2");
let h3 = document.getElementsByTagName("h3");
let p = document.getElementsByTagName("p");

let cursordark = document.querySelector(".cursor");

function switchDLFunction() {
  let switchtext = document.querySelector("#switchtext");

  if (document.getElementById("switchDLbutton").checked || document.getElementById("switchDLbuttonmobile").checked) {
    document.cookie = "darkmode=1; path=/";
    switchtext.innerHTML = "MODE CLAIR";    
    glass.classList.add("glass-dark");
    main.classList.add("main-dark");
    dashboard.classList.add("dashboard-dark");
    menudark.classList.add("menu-dark");

    circle1.classList.add("circle1-dark");
    circle2.classList.add("circle2-dark");
    circle3.classList.add("circle3-dark");

    for (var i = 0; i < h1.length; i++) {
      h1[i].style.color = "#ECF7FE";
    }

    for (var i = 0; i < h2.length; i++) {
      h2[i].style.color = "#D8EFFD";
    }

    for (var i = 0; i < h3.length; i++) {
      h3[i].style.color = "#B1DFFB";
    }

    for (var i = 0; i < p.length; i++) {
      p[i].style.color = "#D8EFFD";
    }

    cursordark.classList.add(".cursor-dark");
  } else {
    document.cookie = 'darkmode=0; path=/';
    switchtext.innerHTML = "MODE SOMBRE";

    glass.classList.remove("glass-dark");
    main.classList.remove("main-dark");
    dashboard.classList.remove("dashboard-dark");
    menudark.classList.remove("menu-dark");

    circle1.classList.remove("circle1-dark");
    circle2.classList.remove("circle2-dark");
    circle3.classList.remove("circle3-dark");

    for(var i = 0; i < h1.length; i++) {
      h1[i].style.color = "#00478a";
    }
  
    for(var i = 0; i < h2.length; i++) {
      h2[i].style.color = "#155e80";
    }
  
    for(var i = 0; i < h3.length; i++) {
      h3[i].style.color = "#085385";
    }
  
    for(var i = 0; i < p.length; i++) {
      p[i].style.color = "#155e80";
    }


  }
}

/*COOKIES*/



function checkCookie(){
  var cookie = document.cookie;
  if (cookie.includes('darkmode=1')){
    if (screen.width <= 500) {
      document.getElementById("switchDLbuttonmobile").checked = true;
    }else{
      document.getElementById("switchDLbutton").checked = true;
    }
  }else{
    if (screen.width <= 500) {
      document.getElementById("switchDLbuttonmobile").checked = false;
    }else{
      document.getElementById("switchDLbutton").checked = false;
    }
  }
}
/*CONSOLE MESSAGE */
console.log(
  "%c" + "Bonjour bonjour petit curieux !",
  " font-size:20px ; background: linear-gradient(to right top, #65dfc9, #6cdbeb) ; border-radius:5px ; padding:10px ; font-weight:600 ; margin:10px"
);
console.log(
  "%c" +
    'Si vous trouvez des bugs, contactez-moi par mail, car comme dit Edsger Dijkstra, "Si débugger c\'est supprimer des bugs, alors programmer ne peut être que les ajouter" 😉',
  " color: #65dfc9; font-weight:600 ; margin:10px"
);
console.log(
  "%c" + "(Ne cassez pas mon site quand même !) 😅",
  " color: #65dfc9; font-weight:600 ; margin:10px ;"
);
console.log(
  "%c" + "Créé avec ♥ par Alexandre MIRANDA DIAS",
  " font-size:10px; color: #65dfc9; font-weight:600 ; margin:10px"
);
