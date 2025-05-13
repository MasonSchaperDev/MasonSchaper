// bind together with content by importing

import { createMenu } from './menu.js';
import { contentMap, renderContent } from './content.js';

const menuContainer = document.getElementById('menu');
const contentContainer = document.getElementById('content');

const menuItems = [
    { key: 'services', label: 'Services' },
    { key: 'portfolio', label: 'Portfolio' },
    { key: 'blog', label: 'Blog' }
];

createMenu(menuContainer, menuItems, key => {
    const html = contentMap[key] || "<p>Content not Found!!!";
    renderContent(contentContainer, html);
});