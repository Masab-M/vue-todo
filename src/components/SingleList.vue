<template>
    <div>
                <span v-if="!editing">
                    {{ todolist.name }}
                </span>
                <input @change="updatedText" v-bind:value="todotext" v-else type="text" name="" id="">
                <button @click="edittodo(todolist)" >{{editing?'updating':'Edit'}}</button>
                <button @click="deletetodo(todolist.id)">Delete</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            editing: false
        };
    },
    props:['todolist'],
    methods: {
         ...mapActions(["deletetodo","updatetodo"]),
        edittodo(todo) {
            this.editing = this.editing == true ? false : true;
            if (this.editing) {
                this.todotext = todo.name;
                this.updatetodo(todo)
            }
            else{
                todo.name=this.todotext
            }
        },
        updatedText(e) {
            this.todotext = e.target.value;
        }
    },
    setup () {
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>