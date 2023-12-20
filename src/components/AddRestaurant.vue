<template>
    <HeaderLine/>
    <h1>Hello users, Welcome to Add Restaurant Page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="enter name" v-model="this.restaurant.name"/>
        <input type="text" name="address" placeholder="enter address" v-model="this.restaurant.address"/>
        <input type="text" name="contact" placeholder="enter contact" v-model="this.restaurant.contact"/>
        <button type="button" v-on:click="addRestaurant">Add new restaurant</button>

    </form>
</template>
<script>

 import HeaderLine from './HeaderLine.vue';
 import axios from 'axios';
export default {
    name:'AddRestaurant',
    components:
    {
        HeaderLine    
    }, 
    data() 
    {  
        return { 
            restaurant: {
                name:'',
                address:'',
                contact:''
           }
        }
    },
    methods:{
        async addRestaurant ()
        {
            console.warn("restaurant: ",this.restaurant)
            const result= await axios.post("http://localhost:3000/restaurants",{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact,
            });
            console.warn("result",result)
        }
    },
    mounted()
    {

    let user=localStorage.getItem('user-info');
    if (!user)
    {
        this.$router.push({name:"SignUp"})
    }
}  
 }
</script>
