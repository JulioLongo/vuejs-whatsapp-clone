<template>
  <div class="sidebar">
    <header>
      <img class="header-avatar" src="https://www.w3schools.com/howto/img_avatar2.png" />
      <div class="header-buttons">
        <div class="header-button">
          <chart-donut class="icon"></chart-donut>
        </div>
        <div class="header-button">
          <message-text class="icon"></message-text>
        </div>
        <div class="header-button">
          <dots-vertical class="icon"></dots-vertical>
        </div>
      </div>
    </header>

    <div class="search-container">
      <div class="search-input">
        <magnify style="font-size:18px; color: #919191;">menu</magnify>
        <input type="search" placeholder="Procurar conversa" />
      </div>
    </div>

    <transition mode="out-in">
      <div v-if="chats && chats.data.length">
        <div class="chats-container" v-for="(item, index) in chats.data" :key="`item-${index}`">
          <ChatListItem :chatItem="item"></ChatListItem>
        </div>
      </div>
      <div v-else-if="chats && chats.data.length === 0" key="no-results">
        <p>Sem chats</p>
      </div>
      <Loading v-else></Loading>
    </transition>
  </div>
</template>

<script>
import { ChartDonut, MessageText, DotsVertical, Magnify } from 'mdue';
import Loading from '@/components/Loading.vue';
import ChatListItem from './ChatListItem.vue';

import api from '../services';

export default {
  name: 'SideBar',
  components: {
    ChartDonut,
    MessageText,
    DotsVertical,
    Magnify,
    ChatListItem,
    Loading,
  },

  data() {
    return {
      chats: null,
    };
  },
  computed: {},
  methods: {
    getChats() {
      this.chats = null;
      this.url = '/users?p=1';
      setTimeout(() => {
        api.get(this.url).then((res) => {
          this.chats = res.data;
          console.log(this.chats);
        });
      }, 1500);
    },
  },
  created() {
    this.getChats();
  },
};
</script>

<style>
.sidebar {
  width: 35%;
  max-width: 415px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd;
}

header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}

.header-avatar {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
}

.header-buttons {
  display: flex;
}

.header-button {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.icon {
  color: #919191;
  font-size: 24px;
}

.search-container {
  background-color: #f6f6f6;
  border-bottom: 1px solid #eee;
  padding: 5px 15px;
}

.search-input {
  background-color: #fff;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 10px;
}

.search-input input {
  flex: 1;
  border: 0;
  outline: 0;
  background-color: transparent;
  margin-left: 10px;
}

.chats-container {
  flex: 1;
  background-color: #fff;
}
</style>
