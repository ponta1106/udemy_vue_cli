<template>
  <div>
    <h3>Home</h3>
    <img style="width: 100px;" src="../assets/maritozzo.png" alt="maritozzo">
    <button @click="toUsers">Usersのページに行く</button>
  </div>
</template>

<script>
export default {
  methods: {
    toUsers() {
      this.$router.push({
        name: 'users-id-profile',
        params: { id: 1 }
      });
    }
  }
}
</script>