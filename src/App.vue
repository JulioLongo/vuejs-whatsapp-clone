<template>
  <div>
    <div id="app">{{ mensagem }}</div>
    <Header></Header>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
  data() {
    return {
      mensagem: "oioi",
    };
  },
};
</script>

<style></style>
