<template>
  <div>
    <!-- コンポーネントはパスカルケースで書く -->
    <LikeHeader>
      <!-- v-slotを使用できるのはtemplateタグのみ -->
      <!-- 子コンポーネントのデータを持ってこれる -->
      <h3>はじめまして</h3>
      <!-- 名前付きのv-slot:は#に置き換えられる -->
      <!-- <template #[title]></template> -->
    </LikeHeader>
      <!-- propsはケバブケースで書く -->
      <!-- $emitで作るカスタムイベントはケバブケースで書く -->
      <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>

      <p>ボタン押下で切り替え</p>
      <button @click="currentComponent = 'Home'">Home</button>
      <button @click="currentComponent = 'About'">About</button>
      <!-- 動的コンポーネント -->
      <!-- currentConponentで指定されているコンポーネントが表示される -->
      <keep-alive>
        <component :is="currentComponent"></component>
      </keep-alive>
      <div>
        <!-- v-modelを使用してフォームを作成 -->
        <h2>イベントのフォーム</h2>
        <p>インプット</p>
        <label for="title">タイトル</label>
        <!-- .lazyはフォーカスが外れた時にv-modelを反映させるメソッド -->
        <input
        id="title"
        type="text"
        v-model.lazy="eventData.title"
        >
        <pre>{{ eventData.title }}</pre>

        <!-- .numberは数値型に変換してくれる -->
        <label for="maxNumber">最大人数</label>
        <input
        id="maxNumber"
        type="number"
        v-model.number="eventData.maxNumber"
        >
        <pre>{{ typeof eventData.maxNumber }}</pre>

        <!-- .trimは先頭と末尾の余白を削除してくれる -->
        <label for="host">主催者</label>
        <input
        id="host"
        type="text"
        v-model.trim="eventData.host"
        >
        <pre>{{ eventData.host }}</pre>

        <!-- textarea -->
        <p>テキストエリア</p>
        <label for="detail">イベントの内容</label>
        <textarea
        id="detail"
        cols="30"
        rows="10"
        v-model="eventData.detail"
        ></textarea>
        <pre>{{ eventData.detail }}</pre>

        <!-- checkbox -->
        <input
        type="checkbox"
        id="isPrivate"
        v-model="eventData.isPrivate"
        >
        <label for="isPrivate">非公開</label>
        <p>{{ eventData.isPrivate }}</p>
      </div>
  </div>
</template>

<script>
import LikeHeader from './components/LikeLHeader.vue';
import About from './components/About.vue';
import Home from './components/Home.vue';

export default {
  data() {
    return {
      number: 14,
      currentComponent: 'Home',
      eventData: {
        title: "",
        maxNumber: 0,
        host: "",
        detail: "",
        isPrivate: false,
        target: [],
        price: "無料",
        location: [],
      }
    };
  },
  components: {
    // LikeHeaderをローカル登録する
    // ↓LikeHeader: LikeHeaderの短縮系
    LikeHeader,
    About,
    Home
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  background-color: #eee;
}

div {
  color: #567;
  margin: 10px;
}

button {
  border: none;
  outline: none;
  padding: 10px;
  color: #567;
  box-shadow: 5px 0px #555;
  margin-right: 10px;
}

button:active {
  margin-left: 5px;
  box-shadow: none;
}

.flex {
  display: flex;
}

</style>