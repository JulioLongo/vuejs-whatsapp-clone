<template>
  <section class="chats-container">
    <div v-for="chat in chats.data" :key="chat.index" class="chat-item">
      <img class="avatar" :src="chat.avatar" :alt="chat.first_name" />
      <div class="name-container">
        <label>{{ chat.email }}</label>
        <label> {{ chat.first_name }}</label>
      </div>
      <div class="hour-container">
        <label>20 PM</label>
        <label> {{ chat.first_name }}</label>
      </div>
    </div>
  </section>
</template>

<script>
import api from '../services';

export default {
  data() {
    return {
      chats: [],
    };
  },
  computed: {
    url() {
      return this.$route.query;
    },
  },
  methods: {
    getChats() {
      api.get('/users?page=2').then((res) => {
        this.chats = res.data;
        console.log(this.chats);
      });
    },
  },
  created() {
    this.getChats();
  },
};
</script>

<style>
.chats-container {
  display: flex;
  flex-direction: column;
  background-color: gainsboro;
  width: 340px;
}

.chat-item {
  display: flex;
  flex-direction: row;
  color: black;
  justify-content: space-between;
  margin-bottom: 12px;
}

.avatar {
  max-width: 50px;
  border-radius: 50%;
}

.name-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  color: black;
  background-color: greenyellow;
}

.hour-container {
  display: flex;
  flex-direction: column;
  color: black;
  background-color: lightpink;
  flex: 0.3;
}
</style>
