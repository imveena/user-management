 <template>
 <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/AddRestaurant">Add Restaurant</router-link>
    <a v-on:click="logout" href="#">Logout</a>
 </div>
</template>
<script>
export default {
    name:'HeaderLine',    
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:"LogIn"})

        }

    }
}
</script>
<style scoped>
.nav{
    background-color: black;
    overflow:hidden;
}
.nav a{
    float:left;
    color:beige;
    padding:14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 15px;
}
.nav a:hover{
    background-color: antiquewhite;
    color: black;
}


</style>




