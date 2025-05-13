export function createMenu(container, items, onSelect) {
    items.forEach(item => {
      const btn = document.createElement('button');
      btn.textContent = item.label;
      btn.dataset.key = item.key;
  
      btn.addEventListener('click', () => {
        // highlight active
        container
          .querySelectorAll('button')
          .forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // Binding, notifying MAIN.js
        onSelect(item.key);
      });
  
      container.appendChild(btn);
    });

    const first = container.querySelector('button');
    if (first) first.click();
}