const routes = {
    home: `
      <h1 class="text-3xl font-bold mb-4">Welcome Home</h1>
      <p class="text-gray-700">This is the home page of our tiny SPA.</p>
    `,
    about: `
      <h1 class="text-3xl font-bold mb-4">About Us</h1>
      <p class="text-gray-700">We build simple SPAs with vanilla JS and Tailwind CSS.</p>
    `,
    services: `
      <h1 class="text-3xl font-bold mb-4">Our Services</h1>
      <ul class="list-disc list-inside text-gray-700 space-y-1">
        <li>Web Development</li>
        <li>UI/UX Design</li>
        <li>Consulting</li>
      </ul>
    `,
    contact: `
      <h1 class="text-3xl font-bold mb-4">Contact Us</h1>
      <form class="space-y-4">
        <input type="text" placeholder="Your Name"
               class="w-full border rounded px-3 py-2" />
        <input type="email" placeholder="Your Email"
               class="w-full border rounded px-3 py-2" />
        <button type="submit"
                class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Send Message
        </button>
      </form>
    `
  };
  
  const appDiv = document.getElementById('app');
  const navLinks = {
    home: document.getElementById('link-home'),
    about: document.getElementById('link-about'),
    services: document.getElementById('link-services'),
    contact: document.getElementById('link-contact'),
  };
  
  function setActiveLink(route) {
    Object.keys(navLinks).forEach(r => {
      navLinks[r].classList.toggle(
        'bg-gray-200', r === route
      );
    });
  }
  
  function render() {
    const hash = location.hash.slice(1) || 'home';

    appDiv.innerHTML = routes[hash] ?? `
      <h1 class="text-3xl font-bold mb-4">Page Not Found</h1>
      <p class="text-gray-700">No content for “${ hash }”.</p>
    `;
    setActiveLink(hash);
  }
  
  window.addEventListener('hashchange', render);
  window.addEventListener('DOMContentLoaded', render);
