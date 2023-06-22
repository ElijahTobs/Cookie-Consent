const modal = document.getElementById("modal")
const closeModal = document.getElementById("modal-close-btn")


setTimeout(() => {
  modal.style.display = "inline"
}, 5000);

closeModal.addEventListener("click", ()=>{
  modal.style.display = "none"
})