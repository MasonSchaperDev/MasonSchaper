export function render(container) {
    const section = document.createElement('section');
    section.innerHTML = `
        <h1 class="text-3xl font-bold mb-4">Welcome to our home page</h1>
        <p>This is the home page with it's own javascript modules.</p>
    `;
    container.append(section);
}