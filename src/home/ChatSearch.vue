<template>
  <form>
    <input type="text" name="busca" id="id-search" v-model="busca" />
    <input type="submit" id="button-search" value="Buscar" @click.prevent="searchChats" />
    {{ busca }}
  </form>
</template>

<script>
export default {
  data() {
    return {
      busca: '',
    };
  },
  methods: {
    searchChats() {
      this.$router.push({ query: { busca: this.busca } });
    },
  },
};
</script>

<style></style>
