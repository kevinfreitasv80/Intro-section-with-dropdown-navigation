const menu = document.getElementById("menu");
const nav = document.querySelector("header nav");
const blackDiv = document.querySelector(".blackDiv");
const iconsArrow = document.querySelectorAll("a+svg");
const closeMenu = document.getElementById("closeMenu");
const links = document.getElementsByClassName("linksShow");
const floatings = document.querySelectorAll("div[class^='floating']");

let Display = (val1, val2) => {
    val1.style.display = val2;
}

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", () => {
        if (!floatings[i].style.display || floatings[i].style.display === "none") {
            iconsArrow[i].style.transform = "rotate(-180deg)";
            Display(floatings[i], "block");
        }else{
            iconsArrow[i].style.transform = "rotate(0deg)";
            Display(floatings[i], "none");
        }
    });
}

let noneOrBlock = (val1, val2) => {
    if (val2) {
        val1.style.display = "inline-block";
    }else{
        val1.style.display = "none";
    }
}

let OC = false;
menu.addEventListener("click", () => {
    Display(menu, "none");
    Display(closeMenu, "block");
    noneOrBlock(nav, true);
    Display(blackDiv, "block");
    OC = true;
});
closeMenu.addEventListener("click", () => {
    Display(closeMenu, "none");
    Display(menu, "block");
    noneOrBlock(nav, false);
    Display(blackDiv, "none");
    OC = false;
});

window.addEventListener("resize", function() {
    if (this.innerWidth > 900) {
        Display(menu, "none");
        Display(closeMenu, "none");
        Display(nav, "flex");
    }else{
        if (OC) {
            Display(menu, "none");
            Display(closeMenu, "block");
            Display(nav, "inline-block");
        }else{
            Display(menu, "block");
            Display(closeMenu, "none");
            Display(nav, "none");
        }
    }
});