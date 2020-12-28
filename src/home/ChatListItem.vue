<template>
  <div class="chat-list-item">
    <img className="chat-list-item-avatar" :src="chatItem.avatar" alt="" />
    <div className="chat-list-item-lines">
      <div className="chat-list-item-line">
        <div className="chat-list-item-name">{{ chatItem.first_name }}</div>
        <div className="chat-list-item-date">18:30</div>
      </div>
      <div className="chat-list-item-line">
        <div className="chat-list-item-lastMsg">
          <p>
            {{ chatItem.email }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatListItem',
  props: ['chatItem'],
};
</script>

<style>
.chat-list-item {
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 70px;
}
.chat-list-item:hover {
  background-color: #f5f5f5;
}
.chat-list-item.active {
  background-color: #ebebeb;
}
.chat-list-item-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 15px;
}
.chat-list-item-lines {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #eee;
  padding-right: 15px;
  margin-left: 15px;

  /* cheat para ... */
  flex-wrap: wrap;
  min-width: 0;
}
.chat-list-item-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.chat-list-item-name {
  font-size: 17px;
  color: #000;
}
.chat-list-item-date {
  font-size: 12px;
  color: #999;
}
.chat-list-item-lastMsg {
  font-size: 14px;
  color: #999;
  display: flex;
  width: 100%;
}
.chat-list-item-lastMsg p {
  /* cheat para ... */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
}
</style>
