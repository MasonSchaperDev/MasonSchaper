export const contentMap = {
    services: `
      <h1>Our Services</h1>
      <ul>
        <li>Web Development</li>
        <li>UI/UX Design</li>
        <li>Mobile App Solutions</li>
        <li>Cloud Integration</li>
      </ul>
    `,
    portfolio: `
      <h1>Portfolio Highlights</h1>
      <p>— “Acme Corp” Website Redesign</p>
      <p>— “BrightApp” Mobile Interface</p>
      <p>— “GreenTech” Dashboard</p>
      <p>See more on our <a href="#blog">Blog</a>.</p>
    `,
    blog: `
      <h1>Latest Blog Posts</h1>
      <article>
        <h2>How We Built a Scalable React App</h2>
        <p>May 10, 2025 — Dive into our step-by-step on React performance optimizations.</p>
      </article>
      <article>
        <h2>Design Trends for 2025</h2>
        <p>April 28, 2025 — A roundup of the hottest UI patterns this year.</p>
      </article>
    `
  };

export function renderContent(container, html) {
    container.innerHTML = html;
}
