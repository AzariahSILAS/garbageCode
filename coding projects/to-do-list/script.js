const itemList = document.getElementById("itemList");
const btn = document.getElementById("btn");
const deleteContainer = document.getElementById("deleteContainer");

btn.addEventListener("click", function() {
  const newItemList = itemList.cloneNode(true);
  itemList.parentNode.insertBefore(newItemList, itemList.nextSibling);
});

deleteContainer.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete")) {
    const deleteItem = event.target.parentNode;
    deleteItem.parentNode.removeChild(deleteItem);
  }
});

