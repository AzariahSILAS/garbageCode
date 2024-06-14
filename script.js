//--------------------const-----------------
const viewMoreBtn = document.getElementById("viewMoreBtn")
const viewMoreP = document.getElementById("viewMoreP")
const aPContainer = document.getElementById("allProjects-container")
const vmIcom = document.getElementById("vmIcom")
const gridContainer = document.getElementById("grid-container")
const gridCard = document.getElementsByClassName("grid-card")

// -----------------var----------------
let gridContainerWidth = gridContainer.offsetWidth
let gridContainerHeight = gridContainerWidth * 2.0;
aPContainer.style.height = gridContainerWidth * 0.9 + "px"

viewMoreBtn.addEventListener("click", (Event) =>{
    
    if(viewMoreP.textContent === "View More"){
        aPContainer.style.height = "auto"
        viewMoreP.textContent = "Show Less"
        vmIcom.src ="assets/up-arrow.png"
    } else if(viewMoreP.textContent === "Show Less"){
        aPContainer.style.height = gridContainerWidth * 0.9 + "px"
        viewMoreP.textContent = "View More"
        vmIcom.src="assets/down-arrow (1).png"
    }
    
})





gridContainer.style.height = gridContainerHeight + "px";


// console.log(gridContainerWidth)