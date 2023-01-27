const menuHamb = document.querySelector('#menuHamb')
const abrir = document.querySelector('#abrir')
const cerrar = document.querySelector('#cerrar')
const enlace1 = document.querySelector('#enlace1')
const enlace2 = document.querySelector('#enlace2')
const enlace3 = document.querySelector('#enlace3')
const enlace4 = document.querySelector('#enlace4')
const enlace5 = document.querySelector('#enlace5')
const enlace6 = document.querySelector('#enlace6')
abrir.addEventListener('click',()=> {
    menuHamb.classList.add('menuVisible')
})
cerrar.addEventListener('click',()=> {
    menuHamb.classList.remove('menuVisible')
})
enlace1.addEventListener('click',()=> {
    menuHamb.classList.remove('menuVisible')
})
enlace2.addEventListener('click',()=> {
    menuHamb.classList.remove('menuVisible')
})
enlace3.addEventListener('click',()=> {
    menuHamb.classList.remove('menuVisible')
})
enlace4.addEventListener('click',()=> {
    menuHamb.classList.remove('menuVisible')
})
enlace5.addEventListener('click',()=> {
    menuHamb.classList.remove('menuVisible')
})
enlace6.addEventListener('click',()=> {
    menuHamb.classList.remove('menuVisible')
})