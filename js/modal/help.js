// modal window > help button > room size page
let modalHidden = document.querySelector('#modal-fun')
let btnHelp = document.querySelector('#btn-help')
let btnCloseTop = document.querySelector('#m-btn-close')
let btnOk = document.querySelector('#m-btn-ok');

// help button open modal after click
btnHelp.addEventListener('click', () => {
  modalHidden.style.visibility = 'visible';
  console.log(modalHidden);
})

// top right close button
btnCloseTop.addEventListener('click', () => {
  modalHidden.style.visibility = "hidden";
})

// bottom right close button
btnOk.addEventListener('click', () => {
  modalHidden.style.visibility = "hidden";
})

