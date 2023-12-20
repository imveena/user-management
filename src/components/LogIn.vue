<template>
    <h1>Login page</h1>
    <div class="register">
        <input type="text" v-model="email" placeholder="Enter emial"/>
        <input type="password" v-model="password" placeholder="Enter password"/>
        <button v-on:click="login">Login</button>
        <p>
            <router-link to="/sign-up">SignUp</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'LogIn',
    data()
    {
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async login()
        {
        let result = await axios.get(
            `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        )
            console.warn(result)
            if(result.status==200 && result.data.length>0)
        {
            localStorage.setItem("user-info",JSON.stringify(result.data[0]))
            this.$router.push({name:"HomeIndex"})
        }
        console.warn(result)
        }
    },

   mounted ()
{
    let user=localStorage.getItem('user-info');
    if (user)
    {
        this.$router.push({name:"HomeIndex"})
    }

}}
</script>
