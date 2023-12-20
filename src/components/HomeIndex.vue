<template>
    <HeaderLine/>
    <h1>Hello {{ name }}, Welcome to HomeJs component</h1>
    <table border="1">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>
            <td>Action</td>
        </tr>
        <tr v-for="item in restaurant" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.address}}</td>
            <td>
                <router-link :to="'/UpdateR/'+item.id">Update</router-link>
                <button v-on:click="Deleterestaurant(item.id)">delete</button>
            </td>
        </tr>
    </table>
</template>
<script>
 import HeaderLine from './HeaderLine.vue'
 import axios from 'axios'
export default {
    name:'HomeIndex',
    data()
    {
        return {
            name:'',
            restaurant:[],
        }
    },
    components:{
    HeaderLine
    },
     methods:{
       async Deleterestaurant(id){
            let result= await axios.delete("http://localhost:3000/restaurants/"+id);
            console.warn(result)
            if(result.status==200)
            {
                this.loadData()
            }
        },
    
    async loadData()
    {
    let user=localStorage.getItem('user-info');
    this.name=JSON.parse(user).name;
    if (!user)
    {
        this.$router.push({name:"SignUp"})
    }
    let result=await axios.get("http://localhost:3000/restaurants");
    console.warn(result)
    this.restaurant=result.data;
}
},
     async mounted ()
     {
        this.loadData();
     } } 
</script>
<style>
td{
    width:160px;
    height:40px;
}

</style>
