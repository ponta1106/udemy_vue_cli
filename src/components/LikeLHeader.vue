<!-- App.vueで書いたLikeHeaderタグの内容が入る -->
<template>
  <div>
    <slot name="title" :user="user" text="text"></slot>
    <slot></slot>
    <p>いいねの数</p>
    <slot name="number"></slot>
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