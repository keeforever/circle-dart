

const modalBackdrop= document.querySelector('.modal-backdrop')
const modalBox = document.querySelector('.modal-box')
const modalContent = document.querySelector('.modal-content')

function openModal(e){
  const score = e.getAttribute('data-score')
  modalBackdrop.style.display = "block"
  modalContent.innerHTML = `won ${score} points!`
  modalBox.classList.add('animate-box')
}

function closeModal(){
  modalBackdrop.style.display = "none"
  modalBox.classList.remove('animate-box')
}