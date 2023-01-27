const menuHamb = document.querySelector('#menuHamb')
const abrir = document.querySelector('#abrir')
const cerrar = document.querySelector('#cerrar')
abrir.addEventListener('click',()=> {
    menuHamb.classList.add('menuVisible')
})
cerrar.addEventListener('click',()=> {
    menuHamb.classList.remove('menuVisible')
})