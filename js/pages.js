const boxes = document.getElementById("boxes")
const columns = document.getElementById("columns")

const pagesBoxes = [
    ["GitHub", "https://github.com/Maiiialen", "github.png"],
    ["Linkedin", "https://www.linkedin.com/in/magdalena-sa%C5%82%C4%99ga-208b2b216/", "linkedin.png"],
    ["DnD Chess", "https://www.linkedin.com/in/magdalena-sa%C5%82%C4%99ga-208b2b216/", "start-up.png"],
    ["Library", "https://www.linkedin.com/in/magdalena-sa%C5%82%C4%99ga-208b2b216/", "start-up.png"],
    ["UI Environment", "https://www.linkedin.com/in/magdalena-sa%C5%82%C4%99ga-208b2b216/", "start-up.png"],
    ["Portfolio", "https://www.linkedin.com/in/magdalena-sa%C5%82%C4%99ga-208b2b216/", "start-up.png"],
]

const listTittles = ["Nice Documentations", "Essential Pages"]
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
    ]
]
const boxColors = ["violet", "red", "blue", "yellow", "green"]
const listColors = ["ocean", "green"]

pagesBoxes.forEach((page, index) => {
    const img = document.createElement("img")
    img.src = `../imgs/${page[2]}`
    img.alt = page[0]
    const box = document.createElement("div")
    img.className = "boxImg"
    box.style.color = `var(--${boxColors[index%5]})`
    box.style.background = `linear-gradient(135deg, var(--${boxColors[index%5]}) 27%, var(--dark-${boxColors[index%5]}) 50%, var(--${boxColors[index%5]}) 73%)`
    box.className = "box"
    box.onclick = () => location.href = page[1]
    box.appendChild(img)
    boxes.appendChild(box)
})

pagesLists.forEach((list, index) => {
    const box = document.createElement("div")
    box.style.color = `var(--${listColors[index%5]})`
    box.style.background = `linear-gradient(135deg, var(--${listColors[index%5]}) 27%, var(--dark-${listColors[index%5]}) 50%, var(--${listColors[index%5]}) 73%)`
    box.className = "listBox"
    const title = document.createElement("div")
    title.className = "listTitle"
    title.innerText = listTittles[index]
    box.appendChild(title)
    const listObjects = document.createElement("ul")
    list.forEach((page) => {
        const object = document.createElement("li")
        object.className = "listItem"
        object.innerText = page[0]
        object.onclick = () => location.href = page[1]
        listObjects.appendChild(object)
    })
    listObjects.className = "list"
    box.appendChild(listObjects)
    columns.appendChild(box)
})