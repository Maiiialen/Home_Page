const page = document.getElementById("page")
const modes = ["dark", "light"]

function changeLightMode() {
    page.className = modes[(modes.indexOf(page.className)+1)%2]
}

mode.addEventListener("click", changeLightMode)