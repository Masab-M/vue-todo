<template>
    <div>
    <div class="selectview">
    <router-link to="simple">Simple View</router-link>
    <router-link to="kanban">Kanban View</router-link>
    </div>
     <router-view />
    </div>
</template>

<script>
import router from '../router';

export default {
    setup () {
        return {}
    },
    beforeMount(){
        const token=localStorage.getItem('access_token');
        if(!token)
        {
            router.push('/login')
        }
 },
}
</script>

<style lang="scss" scoped>

</style>