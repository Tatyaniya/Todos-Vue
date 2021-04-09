<template lang="pug">
    .todo-list
        .content
            ul.list
                li.item(v-for="todo in todos")
                    todoListItem(
                        :todo="todo"
                    )
        .footer
            .footer-content
                .counter {{todos.length}} items left
                .filter
                    todoListFilter
                .clear(v-if="checked")
                    button.remove(
                        type="button"
                        @click="clearAllTodos"
                    ) Clear
</template>

<script>
import todoListItem from './todoListItem';
import todoListFilter from './todoListFilter';
import { mapMutations } from 'vuex';

export default {
    props: {
        checked: Boolean,
        todos: Array,
    },
    components: {
        todoListItem,
        todoListFilter
    },
    methods: {
        ...mapMutations( {
            clear: 'clearTodos'
        }),
        clearAllTodos() {
            this.clear();
        }
    }
}
</script>

<style lang="scss" scoped>
.list {
    font-size: 24px;
    border-bottom: 1px solid #ededed;
}
.item {
    border-bottom: 1px solid #ededed;
    &:last-child {
        border-bottom: 0 none;
    }
}
.footer {
    color: #777;
    padding: 10px 15px;
    text-align: center;
    position: relative;
    font-size: 14px;
    &:before {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 50px;
        overflow: hidden;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
    }
}
.footer-content {
    display: flex;
    align-items: center;
    position: relative;
}
.filter {
    flex: 1;
}
</style>