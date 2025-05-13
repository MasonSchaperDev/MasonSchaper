export function createMenu(container, items, onSelect) {
    // clear any existing issues with the container
    container.innerHTML = '';
    // building and appending buttons
    items.forEach(({ key, label }) => {
        const btn = document.createElement('button');
        btn.textContent = label;
        btn.dataset.key = key;
        container.appendChild(btn);
    });

    // one event listener delegated to the container
    container.addEventListener('click', event => {
        const btn = event.target.closest('button');
        if(!btn || !container.contains(btn)) return;

        container.querySelectorAll('button')
        .forEach(b => b.classList.remove('active'));

        // add the class
        btn.classList.add('active');

        onSelect(btn.dataset.key);
    })
}
