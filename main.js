// let search = document.querySelector('.search-box');

// document.querySelector('#search-icon').onclick = () => {
//     search.classList.toggle('active')
//     navbar.classList.remove('active')
// }


// let header = document.querySelector('header');

// window.addEventListener('scroll', () => {
//     header.classList.toggle('shadow', window.scrollY > 0)
// });



// let navbar = document.querySelector('.navbar');

// document.querySelector('#menu-icon').onclick = () => {
//     navbar.classList.toggle('active')
//     search.classList.remove('active')
// }

const searchBox = document.querySelector('.search-box');
const searchIcon = document.querySelector('#search-icon');
const header = document.querySelector('header');
const navbar = document.querySelector('.navbar');
const menuIcon = document.querySelector('#menu-icon');

const toggleSearch = () => {
    searchBox.classList.toggle('active');
    navbar.classList.remove('active');
};

const toggleShadow = () => {
    header.classList.toggle('shadow', window.scrollY > 0);
};

const toggleNavbar = () => {
    navbar.classList.toggle('active');
    searchBox.classList.remove('active');
};

searchIcon.onclick = toggleSearch;
window.addEventListener('scroll', toggleShadow);
menuIcon.onclick = toggleNavbar;

// let loadMoreBtn = document.querySelector('#load-more');
// let currentItem = 8;


// loadMoreBtn.onclick = () => {
//     let
// }

const orderButtons = document.querySelectorAll('.order-button');
const form = document.querySelector('.order-form');
const closeButton = form.querySelector('.close-button');

orderButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        form.style.display = 'block';
        const productName = button.getAttribute('data-product');
        const price = button.getAttribute('data-price');
        form.setAttribute('data-product', productName);
        form.setAttribute('data-price', price);
    });
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = form.querySelector('#nombre').value;
    const cantidad = form.querySelector('#cantidad').value;
    const direccion = form.querySelector('#direccion').value;
    const precio = form.getAttribute('data-price');
    const metodoPago = form.querySelector('#metodo-pago').value;
    const productName = form.getAttribute('data-product');

    const text = `Hola Buenas, Me gustaría realizar el siguiente pedido\nNombre: ${nombre}\nProducto: ${productName}\nPrecio: ${precio}\nCantidad: ${cantidad}\nDirección: ${direccion}\nMétodo de Pago: ${metodoPago}`;
    const number = '+57 3114186250';
    const url = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(text)}&source=+57 3114186250`;    window.open(url, '_blank');

    form.style.display = 'none';
});

closeButton.addEventListener('click', function() {
    form.style.display = 'none';
});