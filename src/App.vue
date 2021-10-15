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
      <p><button @click="currentComponent = 'Home'">Home</button></p>
      <p><button @click="currentComponent = 'About'">About</button></p>
      <p><button @click="currentComponent = 'LikeNumber'">LikeNumber</button></p>
      <p><button @click="currentComponent = 'LikeHeader'">LikeHeader</button></p>
      <p><button @click="currentComponent = ''">コンポーネントを削除</button></p>
      <p>{{ currentComponent }}</p>

      <!-- 動的コンポーネント -->
      <!-- currentConponentで指定されているコンポーネントが表示される -->
      <transition name="fade" mode="out-in" appear>
        <component :is="currentComponent"></component>
      </transition>
      <div>
        <EventTitle v-model="eventData.title"></EventTitle>
        <!-- .numberは数値型に変換してくれる -->
        <label for="maxNumber">最大人数</label>
        <input
        id="maxNumber"
        type="number"
        v-model.number="eventData.maxNumber"
        >
        <pre>{{ eventData.maxNumber }}</pre>

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
    <Animation></Animation>
    <LikeFooter></LikeFooter>
  </div>
</template>

<script>
import LikeHeader from './components/LikeLHeader.vue';
import About from './components/About.vue';
import Home from './components/Home.vue';
import EventTitle from './components/EventTitle.vue';
import Animation from './components/Animation.vue';

export default {
  data() {
    return {
      number: 30,
      currentComponent: '',
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
    Home,
    EventTitle,
    Animation,
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

button:hover {
  margin-left: 5px;
  box-shadow: none;
}

.flex {
  display: flex;
}

/* トランジション */
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity .5s;
  }

.fade-enter-to {
  opacity: 1;
}

.fade-leave {
  opacity: 1;
  }

.fade-leave-active {
  transition: opacity .5s;
  }

.fade-leave-to {
  opacity: 0;
}


</style>