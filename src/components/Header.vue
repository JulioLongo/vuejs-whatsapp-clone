<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img alt="logo" />
      </router-link>
      <router-link class="btn" to="/login">Login</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}
</style>
