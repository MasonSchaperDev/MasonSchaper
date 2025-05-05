export const menuItems = ['Home', 'About', 'Services', 'Contact'];

export const contentMap = {
    Home: `
    <h2 class="text-center text-5xl font-semibold">Welcome Home</h2>
    <p class="text-center text-2xl m-5">This is the home page.</p>
    `,
    About: `
    <h2 class="text-center text-5xl font-semibold">About</h2>
    <p class="text-center text-2xl m-5">This is the about page.</p>
    `,
    Services: `
    <h2 class="text-center text-5xl font-semibold">Services</h2>
    <ul class="text-center text-xl">
        <li class="m-4">Custom Apps</li>
        <li class="m-4">UI/UX Design</li>
        <li class="m-4">API Integrations</li>
    </ul>
    `,
    Contact: `
    <h2 class="text-3xl m-2 text-center">Contact us</h2>
    <form class="items-center flex-col flex">
        <input type="text" placeholder="Full Name" class="w-full p-2 border rounded w-2/5 m-2"/>
        <input type="email" placeholder="Email" class="w-full p-2 border rounded m-2 w-2/5"/>
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-center text-xl w-2/5 m-3">Submit</button>
    </form>
    `,
};

export function createMenu() {
    const nav = document.createElement('nav');
    nav.className = 'bg-blue-50';

    const ul = document.createElement('ul');
    ul.className = 'flex w-full';

    menuItems.forEach(label => {
        const li = document.createElement('li');
        li.className = 'p-2';


    const a = document.createElement('a');
    a.textContent = label;
    a.href = '#';
    a.className = `
    block text-center py-3
    text-gray-700 hover:bg-indigo-100
    transition-colors duration-200
    font-semibold
  `;

    a.addEventListener('click', e => {
        e.preventDefault();
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = contentMap[label] || '<p>No content to render.</p>';
    });

    li.appendChild(a);
    ul.appendChild(li);
});

nav.appendChild(ul);
return nav;

}
