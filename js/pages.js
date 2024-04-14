const boxes = document.getElementById("boxes");
const columns = document.getElementById("columns");

function getImage(name, image) {
  const img = document.createElement("img");
  img.src = `./imgs/${image}`;
  img.alt = name;
  img.className = "boxImg";
  return img;
}

function getBox(name, details, index) {
  const box = document.createElement("a");
  box.style.color = `var(--${boxColors[index % boxColors.length]})`;
  box.style.background = `linear-gradient(135deg, var(--${
    boxColors[index % boxColors.length]
  }) 27%, var(--dark-${boxColors[index % boxColors.length]}) 50%, var(--${
    boxColors[index % boxColors.length]
  }) 73%)`;
  box.className = "box";
  box.href = details.link;
  box.appendChild(getImage(name, details.image));
  return box;
}

function buildBoxes() {
  Object.entries(pagesBoxes).forEach(([name, details], index) => {
    boxes.appendChild(getBox(name, details, index));
  });
}

function getListObject(list) {
  const listObjects = document.createElement("ul");
  Object.entries(list).forEach(([name, link]) => {
    const listObject = document.createElement("li");
    const linkObject = document.createElement("a");
    linkObject.className = "listItem";
    linkObject.innerText = name;
    linkObject.href = link;
    listObjects.appendChild(listObject);
    listObject.appendChild(linkObject);
  });
  listObjects.className = "list";
  return listObjects;
}

function getListTitle(name) {
  const listTitle = document.createElement("div");
  listTitle.className = "listTitle";
  listTitle.innerText = name;
  return listTitle;
}

function getList(name, pages, index) {
  const list = document.createElement("div");
  list.style.color = `var(--${listColors[index % listColors.length]})`;
  list.style.background = `linear-gradient(135deg, var(--${
    listColors[index % listColors.length]
  }) 27%, var(--dark-${listColors[index % listColors.length]}) 50%, var(--${
    listColors[index % listColors.length]
  }) 73%)`;
  list.className = "listBox";
  list.appendChild(getListTitle(name));
  list.appendChild(getListObject(pages));
  return list;
}

function buildLists() {
  Object.entries(pagesLists).forEach(([name, pages], index) => {
    columns.appendChild(getList(name, pages, index));
  });
}

function createLinks() {
  buildBoxes();
  buildLists();
}

window.onload = createLinks();
