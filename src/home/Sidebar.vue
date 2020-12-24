<template>
  <div class="sidebar">
    <header>
      <img class="header-avatar" src="https://www.w3schools.com/howto/img_avatar2.png" />
      <div class="header-buttons">
        <div class="header-button">
          <md-icon>menu</md-icon>
        </div>
        <div class="header-button">
          <md-icon>menu</md-icon>
        </div>
        <div class="header-button">
          <md-icon>menu</md-icon>
        </div>
      </div>
    </header>

    <div class="search">
      <div class="search-input">
        <md-icon>menu</md-icon>
        <input type="search" placeholder="Procurar conversa" />
      </div>
    </div>

    <div class="chatlist">...</div>
  </div>
</template>

<script>
export default {};
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

.search {
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
</style>
