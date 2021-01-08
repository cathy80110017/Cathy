<template>
  <div id="navbar">
    <p @click="changePath(navbarItems[0])">Cathy</p>
    <ul>
      <li
        v-for="(navbarItem, index) in navbarItems"
        :key="index"
        @click="changePath(navbarItem)"
        :class="{ active: routeName === navbarItem.name }"
      >
        {{ navbarItem.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    routeName() {
      return this.$route.name;
    },
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
  data() {
    return {
      navbarItems: [
        {
          name: "Home",
          path: "/Home",
        },
        {
          name: "About",
          path: "/About",
        },
        {
          name: "Form",
          path: "/Form",
        },
        {
          name: "Page3",
          path: "/Page3",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/navbar.scss";
</style>
