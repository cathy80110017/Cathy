<template>
  <div class="form">
    <form>
      <input
        v-for="(input, index) in inputs"
        :key="index"
        :name="input.name"
        :placeholder="input.placeholder"
        :class="input.class"
        type="text"
      />
      <input type="file" accept="image/*"/>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Form",
  components: {},
  data: () => ({
    inputs: [
      {
        name: "title",
        placeholder: "Title...",
        class: "title",
      },
      {
        name: "subtitle",
        placeholder: "Subtitle...",
        class: "subtitle",
      },
      {
        name: "text",
        placeholder: "Text...",
        class: "text",
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/Form.scss";
</style>
