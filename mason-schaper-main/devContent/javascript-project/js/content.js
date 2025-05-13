// contentMap should have home, about, contact and each will have h1 and p. export this.

export const contentMap = {
    home: `
        <h1>Home</h1>
        <p>This is the home page.</p>
    `,
    about: `
        <h1>About</h1>
        <p>This is the about page.</p>
    `,
    contact: `
        <h1>Contact</h1>
        <p><a href="mailto:varms@gmail.com">Email us</a></p>
    `
};

export function renderContent(container, html) {
    container.innerHTML = html;
}