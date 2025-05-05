const routes = {
    '/': () => import ('./components/Home.js'),
    '/about': () => import ('./components/About.js'),
    '/todo': () => import ('./components/Todo.js')
};

function parseLocation() {
    return location.hash.slice(1).toLowerCase() || '/';
}

async function handleRouting() {
    const path = parseLocation();
    const loader = routes[path] || routes['/'];
    const module = await loader();
    const view = module.default;

    document.getElementById('app').innerHTML = await view.render();
    view.afterRender();
}

export default {
    init() {
        window.addEventListener('hashchange', handleRouting);
        handleRouting();
    }
};
