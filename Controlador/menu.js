document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.link');
    const menuHamburguesa = document.getElementById('menu_hamburguesa');

    links.forEach(link => {
        link.addEventListener('click', () => {
            if (menuHamburguesa.checked) {
                menuHamburguesa.checked = false;
            }
        });
    });
});
