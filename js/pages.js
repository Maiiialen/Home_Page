const boxes = document.getElementById("boxes");
const columns = document.getElementById("columns");

const pagesBoxes = [
  ["GitHub", "https://github.com/Maiiialen", "github-mark.png"],
  [
    "Linkedin",
    "https://www.linkedin.com/in/magdalena-sa%C5%82%C4%99ga-208b2b216/",
    "linkedin.png",
  ],
  [
    "DnD Chess",
    "https://www.linkedin.com/in/magdalena-sa%C5%82%C4%99ga-208b2b216/",
    "start-up.png",
  ],
  [
    "Library",
    "https://www.linkedin.com/in/magdalena-sa%C5%82%C4%99ga-208b2b216/",
    "start-up.png",
  ],
  [
    "UI Environment",
    "https://www.linkedin.com/in/magdalena-sa%C5%82%C4%99ga-208b2b216/",
    "start-up.png",
  ],
  [
    "Portfolio",
    "https://www.linkedin.com/in/magdalena-sa%C5%82%C4%99ga-208b2b216/",
    "start-up.png",
  ],
];

const listTittles = ["Nice Documentations", "Essential Pages"];
const pagesLists = [
  [
    ["The Odin Project", "https://www.theodinproject.com/"],
    ["React Documentation", ""],
    ["Zustand Documentation", ""],
    ["DnD Documentation", ""],
  ],
  [
    ["Stack Overflow", ""],
    ["Developer mozilla", "https://developer.mozilla.org/en-US/"],
  ],
];
const boxColors = ["violet", "red", "yellow", "green", "blue", "pink"];
const listColors = ["ocean", "orange"];

function getImage(page) {
  const img = document.createElement("img");
  img.src = `./imgs/${page[2]}`;
  img.alt = page[0];
  img.className = "boxImg";
  return img;
}

function getBox(page, index) {
  const box = document.createElement("a");
  box.style.color = `var(--${boxColors[index % boxColors.length]})`;
  box.style.background = `linear-gradient(135deg, var(--${
    boxColors[index % boxColors.length]
  }) 27%, var(--dark-${boxColors[index % boxColors.length]}) 50%, var(--${
    boxColors[index % boxColors.length]
  }) 73%)`;
  box.className = "box";
  box.href = page[1];
  box.appendChild(getImage(page));
  return box;
}

function buildBoxes() {
  pagesBoxes.forEach((page, index) => {
    boxes.appendChild(getBox(page, index));
  });
}

function getListObject(page) {
  const listObjects = document.createElement("ul");
  page.forEach((page) => {
    const listObject = document.createElement("li");
    const linkObject = document.createElement("a");
    linkObject.className = "listItem";
    linkObject.innerText = page[0];
    // listObject.onclick = () => location.href = page[1]
    linkObject.href = page[1];
    listObjects.appendChild(listObject);
    listObject.appendChild(linkObject);
  });
  listObjects.className = "list";
  return listObjects;
}

function getListTitle(index) {
  const listTitle = document.createElement("div");
  listTitle.className = "listTitle";
  listTitle.innerText = listTittles[index];
  return listTitle;
}

function getList(page, index) {
  const list = document.createElement("div");
  list.style.color = `var(--${listColors[index % listColors.length]})`;
  list.style.background = `linear-gradient(135deg, var(--${
    listColors[index % listColors.length]
  }) 27%, var(--dark-${listColors[index % listColors.length]}) 50%, var(--${
    listColors[index % listColors.length]
  }) 73%)`;
  list.className = "listBox";
  list.appendChild(getListTitle(index));
  list.appendChild(getListObject(page));
  return list;
}

function buildLists() {
  pagesLists.forEach((page, index) => {
    columns.appendChild(getList(page, index));
  });
}

function createLinks() {
  buildBoxes();
  buildLists();
}

window.onload = createLinks();
