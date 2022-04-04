/* Author: 

*/

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeExpand()
    card.classList.add("expand")
  })
})

function removeExpand() {
  cards.forEach((card) => {
    card.classList.remove("expand")
  })
}

















