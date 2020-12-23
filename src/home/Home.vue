<template>
  <section>
    <div class="a">
      <div class="container-teste">
        <div class="container">
          <ChatSearch></ChatSearch>
          <ChatList></ChatList>
        </div>
        <Chat></Chat>
      </div>
    </div>
  </section>
</template>

<script>
import ChatList from '@/home/ChatList.vue';
import ChatSearch from '@/home/ChatSearch.vue';
import Chat from '@/home/Chat.vue';

export default {
  name: 'Home',
  components: {
    ChatList,
    ChatSearch,
    Chat,
  },
};
</script>

<style>
.a {
  height: 100%;
  background-color: lightskyblue;
}

.container-teste {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.container {
  display: flex;
  flex-direction: column;
}
</style>
