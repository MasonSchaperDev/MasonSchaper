const container = document.getElementById('app');

async function loadPage(route) {
  const page = route || 'home';
  container.innerHTML = `<p class="italic">Loading…</p>`;

  try {
    let module;
    try {
      // first, try the single-file module
      module = await import(`./pages/${page}.js`);
    } catch (err) {
      // if that fails, try the folder-index module
      module = await import(`./pages/${page}/index.js`);
    }

    container.innerHTML = ''; // clear the loader
    module.render(container); // render the page’s content

} catch (err) {
    container.innerHTML = `
    <p class="text-red-500">Page not found.</p>
    <p class="text-sm text-gray-500">(${page} module failed to load properly.)</p>
    `;
    console.error(err);
}
}

function onNavClick(e) {
    const link = e.target.closest('a[data-route]');
    if (!link) return;
    e.preventDefault();
    const route = link.dataset.route;
    window.history.pushState({page: route}, `/${route}`);
    loadPage(route);
}

window.addEventListener('popstate', e => loadPage(e.state?.page));
document.querySelector('nav').addEventListener('click', onNavClick);

loadPage(location.pathname.slice(1));
