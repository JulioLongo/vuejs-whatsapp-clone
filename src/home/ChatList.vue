<template >
  <section class="chats-container">
    <div v-for="chat in chats.data" :key="chat.index" class="chat-container">
      <img :src="chat.avatar" :alt="chat.first_name" />
      {{ chat.email }}
    </div>
  </section>
</template>

<script>
import { api } from '@/services.js';

export default {
  data() {
    return {
      chats: [],
    };
  },
  methods: {
    getChats() {
      api.get('/users?page=2').then((res) => {
        this.chats = res.data;
      });
    },
  },
  created() {
    this.getChats();
  },
};
</script>

<style>
.chat-container {
  flex: 1;
  color: brown;
  flex-direction: row;
}
</style>
