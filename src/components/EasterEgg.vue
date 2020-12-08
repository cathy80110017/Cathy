<template>
  <div id="easterEgg" :class="{'hidden': ishidden}">
    <div class="run-track">
      <div class="nyan-animate">
        <div class="nyan-bg"></div>
        <img :src="nyanPath" />
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  name: "EasterEgg",
  data(){
    return {
      nyanPath: require('@/assets/easterEgg/nyancatnobg.gif'),
      ishidden: true,
    }
  },
  mounted() {
    var konami = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];

    var pos = 0;
    const _this = this
    document.addEventListener("keyup", function(e) {
      e.preventDefault();

      if (e.key === konami[pos]) {
        if (pos === konami.length - 1) {
          _this.changeHidden();
          pos = 0;
        } else {
          pos++;
        }
      } else {
        pos = 0;
      }
    });
  },
  methods: {
    changeHidden() {
      this.ishidden = !this.ishidden;
      setTimeout(() => {
        this.ishidden = !this.ishidden;
      }, 8000)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/EasterEgg.scss";
</style>
