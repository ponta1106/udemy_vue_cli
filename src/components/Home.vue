<template>
  <div>
    <h3>Home</h3>
    <p v-border.round.shadow.padding="{width: '0.1px', color: '#9fb2ba'}">{{ tmpData }}</p>
    <!-- main.jsで定義したfilterを適用 -->
    <h2>{{ title | lowerCase | upperCase }}</h2>
    <!-- ローカルで定義したfilterを適用 -->
    <p>{{ subTitle | upperCase | lowerCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
    <CountNumber></CountNumber>
    <p>Vuexで表示した{{ count }}</p>
  </div>
</template>

<script>
import CountNumber from "./CountNumber.vue";
import { tokyoNumber } from "@/tokyoNumber";

export default {
  mixins: [tokyoNumber],
  data() {
    return {
      tmpData: "hello",
      title: "Welcom to Tokyo",
      subTitle: "Tokyo is a great city",
      number: 0,
    };
  },
  components: {
    CountNumber
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
  directives: {
    // v-borderを使用する為にカスタムディレクティブを記述
    border(el, binding) {
      // directive内ではthisは使えない
      // this.tmpData = 'こんにちは';
      el.style.border = "solid";
      // v-borderで指定した値を使用する
      el.style.borderWidth = binding.value.width;
      el.style.color = binding.value.color;
      // 引数がある時に記述
      el.style.borderStyle = binding.arg;
      // 修飾子
      if (binding.modifiers.round) {
        el.style.borderRadius = '0.5rem';
      }
      // 修飾子
      if (binding.modifiers.shadow) {
        el.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 2.26)';
      }
      // 修飾子
      if (binding.modifiers.padding) {
        el.style.padding = '5px';
      }
    }
  },
}
</script>