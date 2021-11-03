
<template>
<router-link to="/">Home</router-link>
<router-link to="/login">Login</router-link>
<router-link to="/signup">Signup</router-link>

<router-view></router-view>
</template>

<script>
export default {
  name:'App',

}
</script>