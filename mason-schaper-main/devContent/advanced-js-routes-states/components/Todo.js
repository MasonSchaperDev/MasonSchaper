
import store from '../state.js';
import router from '../router.js';


export default {
    render: async () => {
        const { todos } = store.getState();
        return `
        <h1 class="text-3xl font-bold mb-4">Todo List</h1>
        <form id="todo-form" class="mp-4 flex">
            <input id="todo-input" type="text" class="px-3 py-2 flex-1 border rounded-l" placeholder="Todo"> 
            <button class="px-4 bg-blue-500 text-white rounded-r">Add</button>
        </form>
              <ul id="todo-list" class="list-disc pl-5 space-y-2">
        ${todos.map((t, i) =>
          `<li data-idx="${i}" class="cursor-pointer hover:line-through">${t}</li>`
        ).join('')}
      </ul>
        `;
    }, 
    afterRender: () => {
        document.getElementById('todo-form').addEventListener('submit', e => {
            e.preventDefault();
            const input = document.getElementById('todo-input');
            const text = input.value.trim();
            if (text) {
                store.setState({ todos: [...store.getState().todos, text ]});
                router.init();
            }
            input.value = '';
        });
        document.querySelectorAll('#todo-list li').forEach(li => {
            li.addEventListener('click', () => {
              const idx = +li.dataset.idx;
              const newList = store.getState().todos.filter((_, i) => i !== idx);
              store.setState({ todos: newList });
              router.init();
            });
          });
        }
      };








