<template>
  <div class="chat-window">
    <div class="chat-window-header">
      <div class="chat-window-header-info">
        <img class="chat-window-header-avatar" :src="this.$store.state.chatId.item.avatar" alt="" />
        <div class="chat-window-header-name">{{ this.$store.state.chatId.item.first_name }}</div>
      </div>

      <div class="chat-window-header-buttons">
        <div class="chat-window-btn">
          <paperclip class="chat-icon"></paperclip>
        </div>
        <div class="chat-window-btn">
          <dots-vertical class="chat-icon"></dots-vertical>
        </div>
        <div class="chat-window-btn">
          <magnify class="chat-icon"></magnify>
        </div>
      </div>
    </div>

    <div class="chat-window-body">www</div>

    <div class="chat-window-footer">
      <div class="chat-window-pre">
        <div class="chat-window-btn">
          <Emoji />
          <close class="chat-icon"></close>
        </div>

        <div class="chat-window-btn">
          <emoticon-happy-outline class="chat-icon"></emoticon-happy-outline>
        </div>
      </div>

      <div class="chat-window-inputarea">
        <input class="chat-window-input" type="text" placeholder="Digite uma mensagem" />
      </div>

      <div class="chat-window-pos">
        <div class="chat-window-btn">
          <send class="chat-icon"></send>
        </div>
        <div class="chat-window-btn">
          <microphone class="chat-icon"></microphone>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Paperclip,
  DotsVertical,
  Magnify,
  EmoticonHappyOutline,
  Close,
  Send,
  Microphone,
} from 'mdue';

export default {
  name: 'ChatWindow',
  components: {
    Paperclip,
    DotsVertical,
    Magnify,
    EmoticonHappyOutline,
    Close,
    Send,
    Microphone,
  },
};
</script>

<style>
.chat-window {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.chat-window-header {
  height: 60px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-window-header-info {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.chat-window-header-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 15px;
}

.chat-window-header-name {
  font-size: 17px;
  color: #000;
}

.chat-window-header-buttons {
  display: flex;
  align-items: center;
  margin-right: 15px;
}

.chat-window-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.chat-window-body {
  flex: 1;
  overflow-y: auto;
  background-color: #e5ddd5;
  background-size: cover;
  background-position: center;
}

.chat-window-footer {
  height: 62px;
  display: flex;
  align-items: center;
  background-color: #eeedef;
}

.chat-window-pre {
  display: flex;
  margin: 0 15px;
}

.chat-window-inputarea {
  flex: 1;
}

.chat-window-input {
  width: 100%;
  height: 40px;
  border: 0;
  outline: 0;
  background-color: #fff;
  border-radius: 20px;
  font-size: 15px;
  color: #4a4a4a;
  padding-left: 15px;
}

.chat-window-pos {
  display: flex;
  margin: 0 15px;
}

.chat-icon {
  font-size: 24px;
  color: #919191;
}
</style>
