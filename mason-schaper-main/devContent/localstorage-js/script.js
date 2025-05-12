// Reference your elements here

const menuEl = document.getElementById('menu');
const displayEl = document.getElementById('product-display');

// Populate the menu items

products.forEach(product => {
    const li = document.createElement('li');
    li.textContent = product.name;
    li.addEventListener('click', () => showProduct(product));
    menuEl.appendChild(li);
});

// Render the Products detailed info here

function showProduct(product) {
    displayEl.innerHTML = `
        <h2>${product.name}</h2>
        <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
        <p>${product.description}</p>
    `;
}

