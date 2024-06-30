const lastBtn = document.getElementById('lastBtn');
const collectionGrid = document.getElementById('collection-grid');


lastBtn.addEventListener("click", () =>{
    addPost()
})

function addPost() {
    const newCard = document.createElement('div')
    newCard.className = 'card';
    collectionGrid.appendChild(newCard);

}