// 単一ファイルコンポーネントはtemplateかレンダー関数のどちらか一方があれば良い
<template>
<!-- 複数要素を記述する際は、divで囲ってあげる必要がある -->
  <div>
    <h1>LikeNumber.vueのコンポーネント</h1>
    <p>いいね({{ halfNumber }})</p>
    <p>{{ desumasu }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: ["totalNumber", "message"],
  computed: {
    halfNumber() {
      return this.totalNumber / 2;
    },
    desumasu() {
      return this.message + 'だよ'
    }
  },
  methods: {
    increment() {
      // 子から親へデータを送る
      // $emitは好きなタイミングでイベントを作成できる
      this.$emit("my-click", this.totalNumber + 1);
    }
  }
}
</script>

<style scoped>
div {
  background-color: #9fb2ba;
  padding: 10px;
  border-right: 5px solid #555;
}

button {
  border: none;
  outline: none;
  padding: 10px;
  color: #567;
  box-shadow: 5px 0px #555;
}

button:active {
  margin-left: 5px;
  box-shadow: none;
}
</style>