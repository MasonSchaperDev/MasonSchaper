import router from './router.js';
import store from './state.js';

document.addEventListener('DOMContentLoaded', () => {
    router.init();

    store.subscribe('stateChange', state => {
        console.log('State Updated:', state);
    });
});