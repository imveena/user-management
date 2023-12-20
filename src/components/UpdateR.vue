<template>
    <HeaderLine/>
    <h1>Hello users, Welcome to Update Restaurant Page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="enter name" v-model="this.restaurant.name"/>
        <input type="text" name="address" placeholder="enter address" v-model="this.restaurant.address"/>
        <input type="text" name="contact" placeholder="enter contact" v-model="this.restaurant.contact"/>
        <button type="button" v-on:click="upadateRestaurant">Update restaurant</button>

    </form>
</template>
<script>
 import HeaderLine from './HeaderLine.vue'
 import axios from 'axios';
export default {
    name:'UpdateR',
    components:{
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
            async upadateRestaurant(){
            console.warn(this.restaurant)
            const result=await axios.put("http://localhost:3000/restaurants/" + this.$route.params.id,{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact,
            });
            if(result.status==200)
            {
                this.$router.push({name:"HomeIndex"})
            }
    }
        },
    
    async mounted ()
{
    let user=localStorage.getItem('user-info');
    if (!user)
    {
        this.$router.push({name:"SignUp"})
    }
    const result= await axios.get('http://localhost:3000/restaurants/'+this.$route.params.id)
    // console.warn(this.$route.params.id)
    console.warn(result.data)
    this.restaurant=result.data

}
}

    
</script>
