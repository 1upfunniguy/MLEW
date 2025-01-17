document.querySelector('.dropdown span').addEventListener('click', () => {
    const menu = document.querySelector('.dropdown-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});
