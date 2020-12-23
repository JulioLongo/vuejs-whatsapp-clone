<template>
  <form>
    <div class="search-container">
      <img src="../assets/search.svg" />
      <input type="text" name="busca" class="search" v-model="busca" placeholder="Buscar" />
      <input type="submit" class="search-button" value="Buscar" @click.prevent="searchChats" />
      {{ busca }}
    </div>
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
      this.$router.push({ query: { page: this.busca } });
    },
  },
};
</script>

<style>
.search-container {
  display: flex;
  width: 340px;
  background-color: green;
  background-color: rgb(160, 160, 160);
  border-radius: 16px;
  padding: 4px;
  height: 36px;
}

.search {
  border: none;
  color: #000;
  background-color: rgb(160, 160, 160);
}

.search:focus {
  outline: none;
}
</style>
