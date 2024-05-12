const container = document.getElementById("container")
const gridContainer = document.getElementById("grid")
let gridColumn = "21%"
let containerWidth = container.offsetWidth

let gridRow = containerWidth * 1.0;
gridContainer.style.height = gridRow + "px"


console.log(gridRow)
console.log(gridContainer.offsetHeight)



