const menu = document.querySelector(".mainMenu");
const hamburger= document.querySelector(".hamIcon");

function toggleMenu() {
  if (menu.style.display=="block") {
    menu.style.display = "none";
    
  } else {
    menu.style.display = "block";
   
  }
}

hamburger.addEventListener("click", toggleMenu);