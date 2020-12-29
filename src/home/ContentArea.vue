<template>
  <div class="content-area">
    <ChatWindow v-if="this.$store.state.chatId.index !== null"></ChatWindow>

    <div v-else class="chat-intro">
      <img src="../assets/holding-phone.svg" alt="" />
      <h1>dddd</h1>
      <h2>dddd</h2>
    </div>
  </div>
</template>

<script>
import ChatWindow from './ChatWindow.vue';

export default {
  name: 'ContentArea',
  props: ['chatId'],
  components: {
    ChatWindow,
  },
  data() {
    return {
      activeChat: {
        chatId: undefined,
      },
    };
  },
};
</script>

<style>
.content-area {
  flex: 1;
}

.chat-intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-bottom: 6px solid #4adf83;
}

.chat-intro img {
  width: 250px;
  height: auto;
}

.chat-intro h1 {
  font-size: 32px;
  color: #525252;
  font-weight: normal;
  margin-top: 30px;
}

.chat-intro h2 {
  font-size: 14px;
  color: #777;
  font-weight: normal;
  margin-top: 20px;
  line-height: 20px;
  text-align: center;
}
</style>
