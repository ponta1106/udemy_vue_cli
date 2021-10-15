<template>
  <div>
    <h2>イベントのフォーム</h2>
    <p>インプット</p>
    <label for="title">タイトル</label>
    <!-- .lazyはフォーカスが外れた時にv-modelを反映させるメソッド -->
    <input
    id="title"
    type="text"
    :value="value"
    @input="$emit('input', $event.target.value)"
    >
    <pre>{{ value }}</pre>
  </div>
</template>

<script>
export default {
  props: ["value"]
}
</script>