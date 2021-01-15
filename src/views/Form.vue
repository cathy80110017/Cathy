<template>
  <div class="form">
    <form>
      <input
        required
        v-for="(input, index) in inputs"
        :key="index"
        :name="input.name"
        :placeholder="input.placeholder"
        :class="input.class"
        v-model="input.enter"
        type="text"
      />
      <input type="file" accept="image/*" />
      <input @click.prevent="submit" type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import {db} from '@/main'
import firebase from '@/main'
// @ is an alias to /src
export default {
  name: "Form",
  methods: {
    async submit(){
      await db.collection("todolists").add({
        title: this.inputs[0].enter,
        subtitle: this.inputs[1].enter,
        text: this.inputs[2].enter,
        time: firebase.firestore.Timestamp.fromDate(new Date()),
      });
      this.inputs[0].enter = "";
      this.inputs[1].enter = "";
      this.inputs[2].enter = "";
    },
  },
  components: {},
  data: () => ({
    inputs: [
      {
        name: "title",
        placeholder: "Title...",
        class: "title",
        enter: "",
      },
      {
        name: "subtitle",
        placeholder: "Subtitle...",
        class: "subtitle",
        enter: "",
      },
      {
        name: "text",
        placeholder: "Text...",
        class: "text",
        enter: "",
      },
    ],
    todolist: {
      title: "",
      subtitle: "",
      text: "",
      time: "",
    },
  }),
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/Form.scss";
</style>
