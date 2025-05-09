export function render(container) {
    container.innerHTML = '';
    const nav = document.createElement('nav');
    ['team', 'history', 'contact'].forEach(section => {
        const btn = document.createElement('button');
        btn.textContent = section.charAt(0).toUpperCase() + section.slice(1);
        btn.dataset.sub = section;
        btn.className = 'hover:underline';
        nav.append(btn);
      });

    container.append(nav);
    const subContainer = document.createElement('div');
    subContainer.id = 'about-subpage';
    container.append(subContainer);

    loadSubpage('team', subContainer);

    nav.addEventListener('click', e => {
        if (!e.target.matches('button[data-sub]')) return; 
        const section = e.target.dataset.sub;
        loadSubpage(section, subContainer);
    });
}

async function loadSubpage(section, subContainer) {
    subContainer.innerHTML = '<p class="italic">Loading...</p>';
    try {
        const mod = await import(`./${section}.js`);
        subContainer.innerHTML = '';
        mod.render(subContainer);
    } catch(err) {
        subContainer.innerHTML = '<p class="text-red-500">Section not loaded.</p>'
        console.error(err);
    }
}
