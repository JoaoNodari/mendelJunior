const listDoubts = document.querySelectorAll('.element')
const bottomListDoubts = document.querySelectorAll('.fa-caret-down')

bottomListDoubts.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        listDoubts[index].classList.toggle('active')
        console.log(listDoubts)
    })
});