const toggleBtn = document.getElementById('navbar-btn');
const menu = document.getElementById('navbar-menu');

console.log('check');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    console.log('activated');
});