<template>
  <div>
  <div class="container">

  <div class="headertext">Header Text
  <img class="image" src="../assets/logo.png">
</div>
</div>
    <nav>
      <router-link class="spacing" v-for="routes in links"
      v-bind:key="routes.id"
      :to="`${routes.page}`" tag="button">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
       {
          id: 0,
          text: 'Home',
          page:'/'
        },
        {
          id: 1,
          text: 'About',
          page:'/about'
        },
        {
          id: 2,
          text: 'Contact',
          page:'/contact'
        }
      ]
    }
  }
}
</script>
<style>
  .spacing {
    Margin-right: 10px;
  }
  .container {

overflow:hidden;
position:relative;
width:90%;
min-width:300px;
margin-bottom:20px;
margin-top:20px;
margin-left:auto;
margin-right:auto;
}
.headertext{
    font-size: 40px;

}
img {
height: 50px;
width: 50px;
padding-top: 30px;
position:relative;
}
</style>
