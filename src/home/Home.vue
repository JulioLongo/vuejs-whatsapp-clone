<template>
  <Sidebar></Sidebar>
  <ContentArea></ContentArea>
</template>

<script>
import Sidebar from '@/home/Sidebar.vue';
import ContentArea from '@/home/ContentArea.vue';
// import Chat from '@/home/Chat.vue';

export default {
  name: 'Home',
  components: {
    Sidebar,
    ContentArea,
    // ChatSearch,
    // Chat,
  },
};
</script>

<style></style>
