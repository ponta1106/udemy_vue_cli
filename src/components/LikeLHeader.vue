<template>
  <div>
    <h1>LikeHeader.vueのコンポーネント</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "Jack",
        lastName: "Donald"
      }
    }
  }
}
</script>

<style scoped>
div {
  background: #dbafa0;
  padding: 10px;
  border-right: 5px solid #555;
}

</style>