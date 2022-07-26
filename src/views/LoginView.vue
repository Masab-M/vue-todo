<template>
    <div>
    <h3>User Login</h3>
    <form action="" class="loginform" >
      <div class="form-group">
      <input type="text" v-model="username" placeholder="Username" name="username" id="username">
      </div>
      <div class="form-group">
      <input type="password" v-model="password" placeholder="Password" name="password" id="password">
      </div>
      <div class="submit-btn">
      <button type="submit" v-on:click="submit">Login</button>
      </div>
    </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    submit:async function getlogged(event){
      event.preventDefault()
      const username=this.username
      const password=this.password
      const url=""
      axios.post(url+'/auth/login',{username:username,password:password}).then((result)=>{
        localStorage.setItem('access_token',result.data.access_token)
      }).catch((err)=>{
        console.warn(err);
      })
    }
  },
  setup () {
    return {}
  }
}
</script>

<style scoped>

</style>