const page = document.getElementById("page")
const circle = document.getElementById("circle")
const modes = ["dark", "light"]

function changeLightMode() {
    mode.removeEventListener("click", changeLightMode)
    circle.className = modes[(modes.indexOf(page.className) + 1) % 2]
    page.className = modes[(modes.indexOf(page.className) + 1) % 2]
    circle.classList.add("animate")
    setTimeout(restoreSize, 1500);
}

function restoreSize(){
    circle.classList.remove("animate")
    mode.addEventListener("click", changeLightMode)
}

mode.addEventListener("click", changeLightMode)