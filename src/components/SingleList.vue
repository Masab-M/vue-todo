<template>
    <tr>
    <td>
    {{index+1}}
    </td>
        <td v-if="!editing">
            {{ todolist.name }}
        </td>
        <td v-else>
            <input @change="updatedText" v-bind:value="todotext" type="text" name="" id="" />
        </td>
        <td>
            <button @click="edittodo(todolist)">{{ editing ? 'updating' : 'Edit' }}</button>
            <button @click="deletetodo(todolist.id)">Delete</button>
        </td>

    </tr>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            editing: false
        };
    },
    props: ['todolist','index'],
    methods: {
        ...mapActions(["deletetodo", "updateTodo","getNow"]),
        async edittodo(todo) {
            this.editing = this.editing == true ? false : true;
            if (this.editing) {
                this.todotext = todo.name;
                this.updatetodo(todo)
            }
            else {
                todo.name = this.todotext
                todo.last_updated_at=await this.getNow()
            }
        },
        updatedText(e) {
            this.todotext = e.target.value;
        }
    },
    setup() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
</style>