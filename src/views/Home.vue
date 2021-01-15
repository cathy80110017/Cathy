<template>
  <div class="home">
    <header style="position:relative;">
      <img :src="require('@/assets/img/work.png')" style="width:100%;" />
    </header>
    <section id="self-intro">
      <div class="head-sticker">
        <img :src="require('@/assets/img/me.jpg')" class="" />
      </div>
      <div class="info-text">
        <p>{{ selfInfoText }}</p>
      </div>
    </section>
    <hr />
    <section id="work-display">
      <div class="box" v-for="(todolist, index) in todolists" :key="index">
        <!-- <img src=""> -->
        <div class="title">{{ todolist.title }}</div>
        <div class="subtitle">{{ todolist.subtitle }}</div>
        <div class="text">{{ todolist.text }}</div>
      </div>
    </section>
    <hr />
    <div id="carousel">
      <div class="slides">
        <div class="left" @click="previous">
          <img :src="require('@/assets/icons/left-arrow.svg')" />
        </div>
        <div class="right" @click="next">
          <img :src="require('@/assets/icons/right-arrow.svg')" />
        </div>
        <transition-group name="slide-fade" class="carousel" tag="div">
          <div v-for="(slide, index) in slides" class="slide" :key="index">
            <img :src="slide.img" />
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/main";
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  data: () => ({
    selfInfoText:
      "Hi, I am Cathy, I study at National Taipei University of Technology.",
    todolists: [{}],
    slides: [
      {
        img: require("@/assets/img/Amy01.jpg"),
      },
      {
        img: require("@/assets/img/Amy02.jpg"),
      },
      {
        img: require("@/assets/img/Amy03.jpg"),
      },
    ],
    active: 1,
  }),
  methods: {
    async getLists() {
      let dbLists = await db.collection("todolists").get();
      const todolists = [];
      dbLists.forEach((doc) => {
        let data = doc.data();
        data.id = doc.id;
        todolists.push({
          id: data.id,
          title: data.title,
          subtitle: data.subtitle,
          text: data.text,
          img: data.img,
          time: data.time,
        });
      });
      this.todolists = todolists;
    },
    next() {
      const first = this.slides.shift();
      this.slides = this.slides.concat(first);
    },
    previous() {
      const last = this.slides.pop();
      this.slides = [last].concat(this.slides);
    },
  },
  mounted() {
    this.getLists();
  },
  computed: {},
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/home.scss";
</style>
