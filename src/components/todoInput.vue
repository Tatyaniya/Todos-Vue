<template lang="pug">
    .todo-input
        div.error {{validation.firstError('todo.name')}}
        input.check(
            type="checkbox"
            @change="checkTodosAll"
        )
        input.input(
            type="text"
            placeholder="Todo Name"
            autofocus
            v-model="todo.name"
            :class="{'valid-error': validation.hasError('todo.name')}"
            @keydown.enter="addNewTodo"
        )
        
</template>

<script>
import { Validator } from 'simple-vue-validator';
import { mapMutations } from 'vuex';

let uniqId = 0;

export default {
    mixin: [require('simple-vue-validator').mixin],
    validators: {
        'todo.name'(value) {
            return Validator.value(value).required("Поле не может быть пустым");
        }
    },
    data() {
        return {
            todo: {
                id: 0,
                name: "",
                checked: false
            }
        }
    },
    methods: {
        ...mapMutations(['addTodo', 'checkAll']),
        addNewTodo() {
            this.$validate().then(success => {
                if (!success) return;

                uniqId++;
                this.todo.id = uniqId;
                //this.$emit('addTodo', {...this.todo});
                this.addTodo({...this.todo});

                this.todo.name = "";
                this.validation.reset();
            })
        },
        checkTodosAll(e) {
            this.checkAll(e);
        }
    }
}
</script>

<style lang="scss" scoped>
.input {
    font-size: 24px;
    padding: 16px 25px;
    border: 1px solid transparent;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    line-height: 1.4em;
    outline: none;
    color: inherit;
    width: 100%;
    background: #fff;
}
.valid-error {
    border: 1px solid firebrick;
}
.todo-input {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 15px;
}
.error {
    position: absolute;
    top: -30px;
    left: 0;
    color: firebrick;
}
</style>