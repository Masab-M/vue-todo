<template>
    <div>
        <div class="listfield">
            <form action="">
                <div class="form-group">
                    <input type="text" v-model="todoinput" placeholder="Enter New In List" name="newlist" id="newlist">
                    <select name=""  v-model="todoStatus" id="">
                    <option value="open">Open</option>
                    <option value="inprogress">In Progress</option>
                    <option value="close">Close</option>
                    </select>
                </div>
                <div class="submit-btn">
                    <button type="submit" v-on:click="addnew">Add</button>
                </div>
            </form>
            <div class="listview">
                <div v-for="(todo) in $store.state.todos" :key="todo.id">
                <SingleList :todolist=todo />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SingleList from './SingleList.vue';
import store from '../store/index'
import {v1} from 'uuid'
export default {

    methods: {
        addnew: function addtodos(event) {
            event.preventDefault();
            if (this.todoinput != "") {
                const todo = {
                    id: v1(),
                    name: this.todoinput,
                    status: this.todoStatus
                };
                store.commit("add_todos", todo);
                this.todoinput = "";
            }
        },
       
    },
    setup() {
        return {};
    },
    components: {  SingleList }
}
</script>

<style lang="scss" scoped>
</style>