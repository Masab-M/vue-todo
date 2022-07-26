<template>
    <div class="row">
        <div class="col-3">
            <h3>Open</h3>
            <draggable class="list-group kanban-column" :list="arrOpen" group="people" @change="log" itemKey="name">
                <template #item="{ element, index }">
                    <div class="list-group-item">{{ element.name }} {{ index }}</div>
                </template>
            </draggable>
        </div>

        <div class="col-3">
            <h3>In Progress</h3>
            <draggable class="list-group kanban-column" :list="arrInProgress" group="people" @change="log" itemKey="name">
                <template #item="{ element, index }">
                    <div class="list-group-item">{{ element.name }} {{ index }}</div>
                </template>
            </draggable>
        </div>
        <div class="col-3">
            <h3>Close</h3>
            <draggable class="list-group kanban-column" :list="arrClose" group="people" @change="log" itemKey="name">
                <template #item="{ element, index }">
                    <div class="list-group-item">{{ element.name }} {{ index }}</div>
                </template>
            </draggable>
        </div>
    </div>
</template>
<script>
//import draggable
import store from '../store/index'

import draggable from 'vuedraggable';
export default {
    name: "kanban-board",
    display: "Two Lists",
    order: 1,
    components: {
        draggable
    },
    data() {
        return {
            // for new tasks
            newTask: "",
            // 4 arrays to keep track of our 4 statuses
            arrOpen:  store.state.todos.filter((val)=>{
                if(val.status==="open"){
                    return val
                }
            }).map((result)=>{
                return result
            }),
            arrInProgress: store.state.todos.filter((val)=>{
                if(val.status==="inprogress"){
                    return val
                }
            }).map((result)=>{
                return result
            }),
            arrClose: store.state.todos.filter((val)=>{
                if(val.status==="close"){
                    return val
                }
            }).map((result)=>{
                return result
            }),
        };
    },
    methods: {
        add: function () {
            this.list.push({ name: "Juan" });
        },
        replace: function () {
            this.list = [{ name: "Edgard" }];
        },
        clone: function (el) {
            return {
                name: el.name + " cloned"
            };
        },
        log: function (evt) {
            window.console.log(evt);
        }
    },
    setup() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
</style>