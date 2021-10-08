<template>
  <div>
    <!-- コンポーネントはパスカルケースで書く -->
    <LikeHeader>
      <!-- v-slotを使用できるのはtemplateタグのみ -->
      <h2>みなさん</h2>

      <template v-slot:title="slotProps">
        <h2>こんにちは</h2>
        <!-- 子コンポーネントのデータを持ってこれる -->
        <h2>{{ slotProps.user.firstName }}</h2>
      </template>

      <h3>はじめまして</h3>
      
      <template v-slot:number>
        <p>{{ number }}</p>
      </template>

      <p>よろしくお願いします</p>
    </LikeHeader>
      <!-- propsはケバブケースで書く -->
      <!-- $emitで作るカスタムイベントはケバブケースで書く -->
      <LikeNumber :total-number="number" :message="message" @my-click="number = $event"></LikeNumber>
      <LikeNumber :total-number="number" :message="message" @my-click="number = $event"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from './components/LikeLHeader.vue';

export default {
  data() {
    return {
      number: 14,
      message: '親のメッセージ',
    };
  },
  components: {
    // LikeHeaderをローカル登録する
    // ↓LikeHeader: LikeHeaderの短縮系
    LikeHeader
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

div {
  color: #567;
  margin: 10px;
}

</style>