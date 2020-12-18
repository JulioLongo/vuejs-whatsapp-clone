<template >
  <section class="chat-container" v-for="chat in chats" :key="chat.index">
    <div>{{ chat }}</div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      chats: ['eee', 'ee', 'aa'],
    };
  },
};
</script>

<style>
</style>
