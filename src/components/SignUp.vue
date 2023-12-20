<template>
    <h1> Zomato</h1>
    <img class="logo" src="../assets/resto_logo.jpg" /> 
    <h3>Sign Up</h3>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter name"/>
        <input type="text" v-model="email" placeholder="Enter emial"/>
        <input type="password" v-model="password" placeholder="Enter password"/>
        <button v-on:click="signUp">sign Up</button>
        <p>
            <router-link to="/LogIn">Login</router-link>
        </p>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:'SignUp',
    data()
    {
        return {
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signUp()
        {
            let result = await axios.post ("http://localhost:3000/users",{
             name:this.name,
             email:this.email,
             password:this.password
        });
        console.warn(result);
        if(result.status==201)
        {
            localStorage.setItem("user-info",JSON.stringify(result.data))
            this.$router.push({name:"HomeIndex"})
        }
    
}
},
mounted ()
{
    let user=localStorage.getItem('user-info');
    if (user)
    {
        this.$router.push({name:"HomeIndex"})
    }

}
}
   

    
</script>