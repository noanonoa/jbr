document.addEventListener('click', (e) => {
  const { id } = e.target
  id == 'menu-button' ? showMenu(true) : showMenu(false)
})
function showMenu(toggle){
  const menu = document.querySelector('nav ul')
  if (toggle == true){
    menu.classList.toggle('show')
  } else {
    menu.classList.remove('show')
  }
}
