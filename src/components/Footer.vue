<template>
  <div id="footer">
    <div>
      <img
        class="icon"
        v-for="(footerIcon, index) in footerIcons"
        :key="index"
        :src="footerIcon.imgPath"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footerIcons: [
        {
          name: "github",
          imgPath: require("@/assets/icons/github.svg"),
          url: "https://www.google.com/",
        },
        {
          name: "Home",
          imgPath: require("@/assets/icons/home.svg"),
          url: "",
        },
        {
          name: "email",
          imgPath: require("@/assets/icons/envelope.svg"),
          url: "",
        },
      ],
    };
  },
  methods: {
    changePath({ path }) {
      // console.log(this.$route.name)
      this.$router.push(path).catch((error) => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/footer.scss";
</style>
