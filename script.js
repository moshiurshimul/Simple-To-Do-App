let myForm = document.getElementById("myForm")
let myInput = document.getElementById("myInput")
let myItem = document.getElementById("myItem")

myForm.addEventListener("submit", function(event) {
  event.preventDefault()
  createItem(myInput.value)
})

function createItem(inputItems) {
  let itemHTML =`<li>${inputItems} <button onclick="deleteElement(this)">Delete</button></li> `
  myItem.insertAdjacentHTML("beforeend", itemHTML)
  myInput.value = ""
  myInput.focus()
  
}

function deleteElement(ElementToDelete) {
  ElementToDelete.parentElement.remove()
}