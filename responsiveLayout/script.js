const container = document.getElementById("container");
const gridContainer = document.getElementById("grid");
const shrinkBox = document.getElementById("shrinkBox");
const viewMoreBtn =document.getElementById("viewMoreBtn");
let containerWidth = container.offsetWidth;

let shrinkBoxHeight = containerWidth * .7 ; 

let gridRow = containerWidth * 1.5;
gridContainer.style.height = gridRow + "px";

shrinkBox.style.height = shrinkBoxHeight + "px";

console.log(shrinkBoxHeight)


// ---------------- macking the grid responive -----------------


viewMoreBtn.addEventListener("click", (event) =>{
    if(viewMoreBtn.innerText === "View more"){
        shrinkBox.style.height = "auto";
        viewMoreBtn.innerText = "View Less";
    } else if(viewMoreBtn.innerText === "View Less"){
        shrinkBox.style.height = shrinkBoxHeight + "px";
        viewMoreBtn.innerText = "View more";
    }
})




