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


const signup = document.getElementById("signuppage");
const sign_btn = document.getElementById("signup");
const sign_mob = document.getElementById("signup_mob");
const closeer = document.getElementById("closeer");
sign_btn.addEventListener("click",opensin);
sign_mob.addEventListener("click",opensin);
closeer.addEventListener("click",closesin);

function closesin() {
    signup.style.display = "none";
}

function opensin() {
    if (signup.style.display === "none") {
      signup.style.display = "flex";
    } else {
      signup.style.display = "none";
    }
  }





function fix(){
    if(ham.style.marginTop === "-300px")
    {
        ham.style.marginTop = "0px";
        ham.style.transition = "600ms ease all";
        menu.src = "../images/menc.png";
    }
    else
    {
        ham.style.marginTop = "-300px";
        ham.style.transition = "600ms ease all";
        menu.src = "../images/meno.png";
    }

}
