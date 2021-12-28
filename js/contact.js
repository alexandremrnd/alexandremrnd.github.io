window.addEventListener("load", loaded);

function loaded() {
  if(document.cookie == ''){
    document.cookie = 'darkmode=0; path=/';
  }
  checkCookie();
  switchDLFunction();
}
