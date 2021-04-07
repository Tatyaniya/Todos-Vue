<template lang="pug">
    .todo-item(:class="{checked: todo.checked}")
        label.label
            .input-block
                input.input(
                    type="checkbox"
                    @change="checkTodoAsCompleted"
                    :checked="todo.checked"
                )
            .title {{todo.name}}
        .button
            router-link(
                tag="button"
                :to="`/view/${todo.name}`"
            ).view ->
        .button
            button.remove(
                type="button"
                @click="removeExistedTodo"
            ) x
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    props: {
        todo: Object
    },
    methods: {
        ...mapMutations(['removeTodo', 'checkTodo']),
        removeExistedTodo() {
            this.removeTodo(this.todo.id);
        },
        checkTodoAsCompleted(e) {
            const todoItem = {
                ...this.todo,
                checked: e.target.checked
            }

            this.checkTodo(todoItem);
        }
    }
}
</script>

<style lang="scss" scoped>
.todo-item {
    display: flex;
    align-items: center;

    &:hover {
        .remove {
            visibility: visible;
        }
        .view {
            visibility: visible;
        }
    }
}
.checked .title {
    color: rgba(0, 0, 0, 0.5);
    text-decoration: line-through;
}
.label {
    display: flex;
    align-items: center;
    flex: 1;
}
.input-block {
    width: 40px;
    display: flex;
    padding-left: 20px;
}
.title {
    padding: 15px 18px;
    line-height: 1.2;
}
.button {
    width: 60px;
}
.view {
    visibility: hidden;
    cursor: pointer;
}
.remove {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    visibility: hidden;
}
</style>