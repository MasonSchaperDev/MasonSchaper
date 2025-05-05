import { createMenu, contentMap, menuItems} from './menu.js';

document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.getElementById('menu');
    menuContainer.appendChild(createMenu());
    
    const initial = menuItems[0];
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = contentMap[initial];
});