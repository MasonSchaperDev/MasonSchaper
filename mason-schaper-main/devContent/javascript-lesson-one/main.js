import { sections } from './content.js';

const menuEl = document.getElementById('menu');
const contentEl = document.getElementById('content');

let currentSection = Object.keys(sections)[0]; // Home
let showBio = false;

function render() { 
    let html = sections[currentSection] || '';
    if (showBio) {
        html += sections.Bio;
    }
    contentEl.innerHTML = html;
}

Object.keys(sections).forEach((name, idx) => {
    const btn = document.createElement('button');
    btn.textContent = name;

    if (name !== 'Bio') {
        btn.addEventListener('click', () => {
            // clear "active" state on the BUTTONS ONLY!
            document.querySelectorAll('#menu button').forEach(b => {
                if (b.textContent !== 'Bio') b.classList.remove('active'); });

        currentSection = name;
        btn.classList.add('active');
        render();
    });
    }
    if (idx === 0) {
        btn.classList.add('active');
    } else {
        btn.addEventListener('click', () => {
            showBio = !showBio;
            btn.classList.toggle('active', showBio);
            render();
        });
    }x
    menuEl.appendChild(btn);
});

render();