const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick =  function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

const imageBlocks = document.querySelectorAll(".image-block")

imageBlocks.forEach(block => {
    block.addEventListener('click', () => {
        imageBlocks.forEach(block2 => {
            block2.classList.remove('active')
        })

        block.classList.add('active')
    })
})