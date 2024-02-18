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
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto
    
    // Obtiene los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    
    
    
    fetch('url_de_tu_servidor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email, mensaje }),
    })
    .then(response => {
        if (response.ok) {
            // Si la respuesta es exitosa, muestra algún mensaje de éxito
            alert('¡Mensaje enviado con éxito!');
            // Limpia el formulario
            document.getElementById('contactForm').reset();
        } else {
            // Si la respuesta no es exitosa, muestra algún mensaje de error
            alert('Hubo un error al enviar el mensaje. Por favor, inténtalo nuevamente.');
        }
    })
    .catch(error => {
        // Captura cualquier error de red u otro tipo
        console.error('Error al enviar el formulario:', error);
        alert('Hubo un error al enviar el mensaje. Por favor, inténtalo nuevamente.');
    });
});

