// JavaScript Document
document.addEventListener("DOMContentLoaded", function() {
    fetch('menu.json')
        .then(response => response.json())
        .then(data => createMenu(data))
        .catch(error => console.error(error));
});

function createMenu(menuData) {
    const menuContainer = document.getElementById('menuDinamico');
    menuData.forEach(item => {
        const link = document.createElement('a');
        link.href = item.url;
        link.textContent = item.text;
        link.style.backgroundColor = item.color;

        const image = document.createElement('img');
        image.src = item.image;
        image.style.width = '20px';
        image.style.height = '20px';
        image.style.marginRight = '5px';

        link.prepend(image);
        menuContainer.appendChild(link);
    });
}
