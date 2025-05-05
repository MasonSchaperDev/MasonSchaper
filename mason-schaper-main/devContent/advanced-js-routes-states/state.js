class Store {
    constructor() {
      this.state = { todos: [] };
      this.listeners = {};
    }
  
    getState() {
      return this.state;
    }
  
    setState(patch) {
      this.state = { ...this.state, ...patch };
      this.emit('stateChange', this.state);
    }
  
    subscribe(evt, cb) {
      (this.listeners[evt] ||= []).push(cb);
    }
  
    emit(evt, data) {
      (this.listeners[evt] || []).forEach(cb => cb(data));
    }
  }
  
  export default new Store();
  