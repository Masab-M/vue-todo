<template>
    <div>
    <div class="selectview">
    sdfsaklj
    <router-link to="simple">Simple View</router-link>
    <router-link to="kanban">Kanban View</router-link>
    </div>
     <router-view />
    </div>
</template>

<script>
export default {
    setup () {
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>