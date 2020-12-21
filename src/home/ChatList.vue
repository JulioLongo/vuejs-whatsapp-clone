<template >
  <section class="chats-container">
    <div v-for="chat in chats.data" :key="chat.index" class="chat-container">
      <img :src="chat.avatar" :alt="chat.first_name" />
      {{ chat.email }}
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      chats: [],
    };
  },
  methods: {
    getChats() {
      fetch('https://reqres.in/api/users?page=2')
        .then((res) => res.json())
        .then((res) => {
          this.chats = res;
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
