export function render(container) {
    container.innerHTML = `
        <h2 class="text-3xl m-2 text-center">Contact us</h2>
        <form class="items-center flex-col flex">
            <input type="text" placeholder="Full Name" class="w-full p-2 border rounded w-2/5 m-2"/>
            <input type="email" placeholder="Email" class="w-full p-2 border rounded m-2 w-2/5"/>
            <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-center text-xl w-2/5 m-3">Submit</button>
        </form>
    `;
}