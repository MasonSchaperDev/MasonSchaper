const routes = {
    '/home': () => `
        <h1 class="text-2xl font-bold-mb-4">Home</h1>
        <p>This is a mini spa powered by Javascript and Tailwind.</p>
    `,
    '/about': () => `
        <h1 class="text-2xl font-bold-mb-4">About</h1>
        <p>This is a hashed based route without a framework.</p>
    `,
    '/contact': () => `
        <h1 class="text-2xl font-bold-mb-4">Contact</h1>
        <form class="space-y-4">
            <input type="text" placeholder="Full Name" class="w-full p-2 border rounded"/>
            <input type="email" placeholder="Email" class="w-full p-2 border rounded"/>
            <textarea placeholder="Message" class="w-full p-2 border rounded"></textarea>
            <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
        </form>
    `
};

function render() {
    const hash = location.hash || '#/home';
    // Extract path from hash (e.g '#/home' -> '/home')
    const path = hash.slice(1);
    const viewFn = routes[path] || routes['/home'];
    document.getElementById('app').innerHTML = viewFn();
}

window.addEventListener('hashchange', render);
window.addEventListener('load', render);