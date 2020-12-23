<template>
  <section>
    <div class="teste">
      <transition mode="out-in">
        <ul v-if="chats && chats.data.length" class="chats-container" key="chats">
          <li class="chat-item" v-for="chat in chats.data" :key="chat.index">
            <img class="avatar" :src="chat.avatar" :alt="chat.first_name" />
            <div class="name-container">
              <label>{{ chat.email }}</label>
              <label> {{ chat.first_name }}</label>
            </div>
            <div class="hour-container">
              <label>20 PM</label>
              <label> {{ chat.first_name }}</label>
            </div>
          </li>
        </ul>
        <div v-else-if="chats && chats.data.length === 0" key="no-results">
          <p>Sem chats</p>
        </div>
        <Loading v-else key="loading" class="teste2"></Loading>
      </transition>
    </div>
  </section>
</template>

<script>
import Loading from '@/components/Loading.vue';
import serialize from '@/helpers';
import api from '../services';

export default {
  components: {
    Loading,
  },
  data() {
    return {
      chats: null,
    };
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);

      console.log(query);
      return `/users?${query}`;
    },
  },
  methods: {
    getChats() {
      this.chats = null;
      setTimeout(() => {
        api.get(this.url).then((res) => {
          this.chats = res.data;
          console.log(this.chats);
        });
      }, 1500);
    },
  },
  watch: {
    url() {
      this.getChats();
    },
  },
  created() {
    this.getChats();
  },
};
</script>

<style>
ul {
  height: 100%;
  width: 18%;
  overflow: hidden;
  overflow-y: scroll;
}

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.teste {
  display: flex;
  width: 340px;
}

.teste2 {
  flex: 1;
}

.chats-container {
  display: flex;
  flex-direction: column;
  background-color: gainsboro;
  width: 340px;
}

.chat-item {
  display: flex;
  width: 340px;
  flex-direction: row;
  color: black;
  justify-content: space-between;
  margin-top: 10px;
  border-top: 1px solid black;
  padding-top: 10px;
}

.chat-item:first-child {
  margin-top: 0;
  border-top: none;
  padding-top: 0;
}

.chats-container > * :hover {
  cursor: pointer;
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
