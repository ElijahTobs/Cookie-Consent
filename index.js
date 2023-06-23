const modal = document.getElementById("modal")
const closeModal = document.getElementById("modal-close-btn")
const consentForm = document.getElementById("consent-form")

setTimeout(() => {
  modal.style.display = "inline"
}, 1000);

closeModal.addEventListener("click", () => {
  modal.style.display = "none"
})

consentForm.addEventListener("submit", (e) => {
  e.preventDefault()
})