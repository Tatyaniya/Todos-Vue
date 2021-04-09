<template lang="pug">
    div
        .todo
            todoInput(
                @checked="checkedHandler"
                :isList="isList"
            )
            todoList(
                :checked="checked"
                v-if="todos.length > 0"
                :todos="filteredTodos"
            )
        pre {{todos}}
</template>

<script>
import todoInput from './todoInput';
import todoList from './todoList';
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';

export default {
    ...mapMutations(['checkAll', 'isTodos']),
    data() {
        return {
            checked: false
        }
    },
    components: {
        todoInput,
        todoList
    },
    computed: {
        ...mapState({
            todos: state => state.todos.todos,
            filter: state => state.todos.filter
        }),
        filteredTodos() {
            switch(this.filter) {
                case 'all':
                    return this.todos;
                case 'active':
                    return this.todos.filter(item => item.checked === false);
                case 'completed':
                    return this.todos.filter(item => item.checked);
            }
        },
        isList() {
            return this.todos.length > 0;
        }
    },
    methods: {
        checkTodosAll() {
            this.todos = checkAll(todos);
        },
        checkedHandler() {
            this.checked = !this.checked;
            
            console.log(this.checked);
        }
    }
}
</script>

<style lang="scss" scoped>
.todo {
    margin-top: 100px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
</style>