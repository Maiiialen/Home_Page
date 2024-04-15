const page = document.getElementById("page");
const mode = document.getElementById("mode");
const circle = document.getElementById("circle");
const light = document.getElementById("mode");
const modes = ["dark", "light"];

function changeLightMode() {
  circle.className = modes[(modes.indexOf(page.className) + 1) % 2];
  page.className = modes[(modes.indexOf(page.className) + 1) % 2];
  light.src = `./imgs/brightness-and-contrast-${
    modes[(modes.indexOf(page.className) + 1) % 2]
  }.webp`;
  circle.classList.add("animate");
  mode.disabled = "disabled";
  setTimeout(restoreSize, 1500);
}

function restoreSize() {
  mode.disabled = "";
  circle.classList.remove("animate");
}
