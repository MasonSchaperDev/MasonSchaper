// Import

import { menuItems } from './menu.js';

// Grab references to the DOM containers
const menuEl = document.getElementById('menu');
const contentEl = document.getElementById('content');

// Helper to render the content for a given item
function showContent(item) {
    contentEl.textContent = item.content;
}
// Build the menu buttons
menuItems.forEach(item => {
    const btn = document.createElement('button');
    btn.textContent = item.name;
    btn.className = `
    px-4 py-2 rounded
    bg-blue-500 text-white
    hover:bg-blue-600
    focus:outline-none focus:ring-2 focus:ring-blue-400
    `.trim();

    // Update displayed content
    btn.addEventListener('click', () => {
        showContent(item);

    // highlight the active button

        document.querySelectorAll('#menu button').forEach(b => b.classList.remove('bg-blue-600'));
        btn.classList.add('bg-blue-700');
    });
    menuEl.appendChild(btn);

    // Initialize by showing the first item's content
    if (menuItems.length > 0) {
        showContent(menuItems[0]);
    // Highlight first button
        menuEl.firstElementChild.classList.add('bg-blue-700');
    }
});

