const menu = document.getElementById("menu");
const ham = document.getElementById("hamburg");
const login = document.getElementById("loginpage");
const login_btn = document.getElementById("login");
const login_mob = document.getElementById("login_mob");
const closee = document.getElementById("closee");

login_btn.addEventListener("click",openlog);
login_mob.addEventListener("click",openlog);
closee.addEventListener("click",closelog);
menu.addEventListener("click",fix);

function closelog() {
    login.style.display = "none";
}

function openlog() {
    if (login.style.display === "none") {
      login.style.display = "flex";
    } else {
      login.style.display = "none";
    }
  }



function fix(){
    if(ham.style.marginTop === "-300px")
    {
        ham.style.marginTop = "0px";
        ham.style.transition = "600ms ease all";
        menu.src = "../images/menu.png";
    }
    else
    {
        ham.style.marginTop = "-300px";
        ham.style.transition = "600ms ease all";
    }

}