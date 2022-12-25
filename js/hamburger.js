const btnClosed = document.querySelector(".logo button");
const btnOpened = document.querySelector(".leftMenu .logo button");
const menu = document.querySelector(".leftMenu");

const HIDDEN_CLASSNAME = "hidden";

function btnToggle() {
    menu.classList.toggle("active");
    console.log("clicked");
    // menuClass.style.display = "block";
}

btnClosed.addEventListener("click", btnToggle);
btnOpened.addEventListener("click", btnToggle);

