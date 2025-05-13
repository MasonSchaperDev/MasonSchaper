import { createMenu } from './menu.js';
import { contentMap, renderContent } from './content.js';

const menuContainer = document.getElementById('menu');
const contentContainer = document.getElementById('content');

const menuItems = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About' },
    { key: 'contact', label: 'Contact' }
];

createMenu(menuContainer, menuItems, key => {
    const html = contentMap[key] || 'Content not found.';
    renderContent(contentContainer, html);
});