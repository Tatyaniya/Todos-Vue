const todos = {
    state: {
        todos: [],
        filter: 'all'
    },
    mutations: {
        addTodo(state, todo) {
            state.todos.push(todo);
        },
        removeTodo(state, todoId) {
            state.todos = state.todos.filter(item => {
                return item.id !== todoId;
            })
        },
        checkTodo(state, todo) {
            state.todos = state.todos.map(item => (item.id === todo.id ? todo : item));
        },
        filterTodos(state, filter) {
            state.filter = filter;
        },
        checkAll(state, e) {
            if(e.target.checked){
                state.todos = state.todos.map(item => {
                    item.checked = true;
                    return item;
                });
            } else {
                state.todos = state.todos.map(item => {
                    item.checked = false;
                    return item;
                });
            }
        },
        clearTodos(state) {
            return state.todos = [];
        }
    },
    actions: {},
    getters: {},
    
}

export default todos;