<template>
  <section>
    <h1>teste</h1>
    <ChatSearch></ChatSearch>
    <ChatList></ChatList>
  </section>
</template>

<script>
import ChatList from '@/home/ChatList.vue';
import ChatSearch from '@/home/ChatSearch.vue';

export default {
  name: 'Home',
  components: {
    ChatList,
    ChatSearch,
  },
};
</script>
