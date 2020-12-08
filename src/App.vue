<template>
  <div id="container">
    <Navbar></Navbar>
    <router-view style="padding-top:70px;"></router-view>
    <Footer></Footer>
    <EasterEgg></EasterEgg>
  </div>
</template>

<script>
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import EasterEgg from '../src/components/EasterEgg'


export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    EasterEgg,
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/index.scss";
</style>
