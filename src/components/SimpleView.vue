<template>
    <div>
        <div class="listfield">
            <form action="">
                <div class="form-group">
                    <input type="text" v-model="todoinput" placeholder="Enter New In List" name="newlist" id="newlist">
                    <select name="" v-model="todoStatus" id="">
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
                <table>
                    <thead>
                        <th>id</th>
                        <th>Title</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        <SingleList v-for="(todo, index) in $store.state.todos.slice((($store.state.page-1)*$store.state.limit),$store.state.limit*$store.state.page)" :key="todo.id" :index="index"
                            :todolist=todo />
                    </tbody>
                </table>
                <div class="paginatios">
                <button v-if="($store.state.page>1)" @click="prepage()">Previous</button>
                <ul>
                <li v-for="page in $store.state.pages" @click="jumppage(page)">{{page}}</li>
                </ul>
                <button v-if="($store.state.page<$store.state.pages)" @click="nextpage()">Next</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SingleList from './SingleList.vue';
import store from '../store/index'
import { v1 } from 'uuid'
import { mapActions } from 'vuex';
export default {
    data() {
        return {
        }
    },
    methods: {
        ...mapActions(['jumppage','nextpage','prepage','getNow']),
        addnew: async function addtodos(event) {
            event.preventDefault();
            if (this.todoinput != "") {
                const todo = {
                    id: v1(),
                    name: this.todoinput,
                    status: this.todoStatus,
                    created_at:await this.getNow(),
                    last_updated_at:await this.getNow()

                };
                store.commit("add_todos", todo);
                this.todoinput = "";
            }
        }

    },
    setup() {
        return {
        };
    },
    components: { SingleList }
}
</script>

<style lang="scss" scoped>
</style>