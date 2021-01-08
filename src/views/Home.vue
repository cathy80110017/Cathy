<template>
  <div class="home">
    <header style="position:relative;">
      <img :src="require('@/assets/img/work.png')" style="width:100%;">
    </header>
    <section id="self-intro">
      <div class="head-sticker">
        <img :src="require('@/assets/img/me.jpg')" class="">
      </div>
      <div class="info-text">
        <p>{{selfInfoText}}</p>
      </div>
    </section>
    <hr>
    <section id="work-display">

    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data:()=>({
    selfInfoText:"Hi, I am Cathy, I study at National Taipei University of Technology.",
  })
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/home.scss";
</style>