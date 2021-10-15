<template>
  <div class="container">
    <h3>{{ transition }}</h3>

    <button @click="myAnimation = 'slide'">Slide</button>
    <button @click="myAnimation = 'fade'">Fade</button>
    <p>{{ myAnimation }}</p>
    <button @click="show = !show">切り替え</button>
    <br>

    <button @click="myComponent = 'ComponentA'">ComponentA</button>
    <button @click="myComponent = 'ComponentB'">ComponentB</button>

    <transition name="fade" mode="out-in">
      <component :is="myComponent"></component>
    </transition>

    <transition
    name="fade"
    mode="out-in"
    >
      <!-- transitionタグ内で同じpタグを使用する際は -->
      <!-- keyを指定しないとアニメーションが発動しない！ -->
      <p
      v-if="show"
      key="bye"
      >
      さよなら</p>

      <p
      v-if="!show"
      key="hello"
      >
      こんにちは</p>
    </transition>

    <transition
    enter-active-class="animate__animated animate__bounce"
    leave-active-class="animate__animated animate__shakeX"
    appear
    >
      <p v-if="show">hello</p>
    </transition>

    <transition
    :name="myAnimation"
    appear
    >
      <p v-show="show">bye</p>
    </transition>

  </div>
</template>

<script>
import ComponentA from '@/components/ComponentA.vue';
import ComponentB from '@/components/ComponentB.vue';

export default {
  components: {
    ComponentA,
    ComponentB
  },
  data() {
    return {
      transition: 'トランジションのコンポーネントです。',
      show: true,
      myAnimation: '',
      myComponent: 'ComponentA',
    }
  }
}
</script>

<style scoped>
.container {
  padding: 10px;
  background-color: #dcdbd6;
  /* background-color: #e3be82; */
  border-right: 5px solid #555;
  min-height: 400px;
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

/* スライド */
.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in .5s;
  transition: opacity 1s;
  }

.slide-leave-active {
  animation: slide-in .5s reverse;
  transition: opacity 1s;
  }

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}
</style>