<template>
    <nav>
      <h2>UsersHeader</h2>
    <!-- vue-router -->
    <!-- URLの変更はaタグではなくrouter-lnkタグを使う -->
    <!-- router-linkタグ内ではhrefではなくtoを使う -->
    <!-- active-classは現在表示されているページのリンクタグに適用される -->
    <router-link
    to="/"
    active-class="link-active"
    exact
    class="link"
    >Home</router-link>
    <router-link
    to="/users/1"
    active-class="link-active"
    class="link"
    >Users</router-link>
  </nav>
</template>

<style scoped>

.link {
  margin-right: 10px;
}

.link-active {
  font-size: 20px;
}

</style>