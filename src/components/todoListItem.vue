<template lang="pug">
    .todo-item(:class="{checked: todo.checked}")
        label.label
            .input-block
                input.input(
                    type="checkbox"
                    @change="checkTodo"
                )
            .title {{todo.name}}
        .button
            button.remove(
                type="button"
                @click="removeTodo"
                :checked="todo.checked"
            ) x
</template>

<script>

export default {
    props: {
        todo: Object
    },
    methods: {
        removeTodo() {
            this.$emit('removeTodo', this.todo.id);
        },
        checkTodo(e) {
            const todoItem = {
                ...this.todo,
                checked: e.target.checked
            }

            this.$emit('checkTodo', todoItem);
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
    width: 60px;
    display: flex;
    padding-left: 20px;
}
.title {
    padding: 15px 0;
    line-height: 1.2;
}
.button {
    width: 40px;
}
.remove {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    visibility: hidden;
}
</style>