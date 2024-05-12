const viewMoreBtn = document.getElementById("viewMoreBtn")
const viewMoreP = document.getElementById("viewMoreP")
const aPContainer = document.getElementById("allProjects-container")
const vmIcom = document.getElementById("vmIcom")
const gridContainer = document.getElementById("grid-container")
const gridCard = document.getElementsByClassName("grid-card")

viewMoreBtn.addEventListener("click", (Event) =>{
    
    if(viewMoreP.textContent === "View More"){
        console.log("clicked")
        aPContainer.style.height = "auto"
        viewMoreP.textContent = "Show Less"
        vmIcom.src ="assets/up-arrow.png"
    } else if(viewMoreP.textContent === "Show Less"){
        aPContainer.style.height = "760px"
        viewMoreP.textContent = "View More"
        vmIcom.src="assets/down-arrow (1).png"
    }
    
})
let gridContainerWidth = gridContainer.offsetWidth
let gridContainerHeight = gridContainerWidth * 1.6;




gridContainer.style.height = gridContainerHeight + "px";


console.log(gridContainerWidth)