<template>
  <div>
    <nav>
      <h2>HomeHeader</h2>
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
  <p>Vuexで表示した{{ count }}</p>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    increment() {
      this.$store.state.count++;
    },
    decrement() {
      this.$store.state.count--;
    },
  }
}
</script>

<style scoped>

.link {
  margin-right: 10px;
}

.link-active {
  font-size: 20px;
}

</style>