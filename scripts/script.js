let close__menu = document.getElementsByClassName("close__menu")[0]
let menu = document.getElementsByClassName("menu")[0];


close__menu.addEventListener("click", () => {
    menu.classList.toggle("close")
})


