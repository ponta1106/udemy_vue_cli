<template>
  <div>
    <h1>LikeFooter.vueのコンポーネント</h1>
    <p v-for="member in members" :key="member.id">{{ member }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        'messi',
        'neymar',
        'drogba',
        'totti',
        'ibra',
      ]
    }
  }
}
</script>

<style scoped>
div {
  padding: 10px;
  background-color: #e3be82;
  background-color: #dcdbd6;
  background-color: #e3be82;
  border-right: 5px solid #555;
}
</style>