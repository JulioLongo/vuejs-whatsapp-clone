<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
// import Header from '@/components/Header.vue';

export default {
  // components: { Header },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
p {
  margin: 0px;
}

ul {
  list-style: none;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  color: #41b883;
  background-color: #eeedef;
  background: url('./assets/pattern.svg') repeat top;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.btn {
  display: block;
  padding: 10px 30px;
  border-radius: 4px;
  text-align: center;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
}

.btn:hover {
  transform: scale(1.1);
}

.app {
  display: flex;
  height: 100vh;
  background-color: #eeedef;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
