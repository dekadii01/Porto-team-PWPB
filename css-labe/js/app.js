const toggle = document.getElementById('toggle-nav');
const navItems = document.getElementById('nav-content');
const body = document.getElementById('bekgron');
const menu = document.getElementById('menu-moomoon');
const menuOff = document.getElementById('menu-off');

toggle.addEventListener('click', function() {
    navItems.classList.toggle('toggle-on');
    navItems.classList.toggle('fade-in');
    body.classList.toggle('background-image');
});

const watsap = document.querySelector(".watsap");
watsap.addEventListener("click", () => {
    window.open("https://wa.me/+628977285001?text=Silahkan%20diisi%20form%20pemesannya%0ANama%20%3A%0APesanan%20%3A%0AAlamat%20pengiriman%20%3A%0AMetode%20pembayaran%20%3A%0ATerimakasih%20sudah%20memesan%0AJangan%20lupa%20pesan%20kembali");
})