<template>
  <div class="container">
    <h3>{{ animation }}</h3>

    <button @click="myAnimation = 'slide'">Slide</button>
    <button @click="myAnimation = 'fade'">Fade</button>
    <p>{{ myAnimation }}</p>
    <button @click="show = !show">切り替え</button>
    <br>
    <transition
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
    >
      <div
      class="circle"
      v-if="show"></div>
    </transition>
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
    <br>
    <button @click="add">追加</button>
    <ul style="width: 200px; margin: auto; cursor: pointer;">
    <!-- 複数要素にトランジションを適用できる -->
    <!-- 必ずkeyをつける必要がある -->
    <transition-group name="fade" tag="div">
      <li
      v-for="(number, index) in numbers"
      @click="remove(index)"
      :key="number"
      >{{ number }}</li>
    </transition-group>
  </ul>

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
      animation: 'アニメーションのコンポーネントです。',
      show: true,
      myAnimation: '',
      myComponent: 'ComponentA',
      numbers: [0, 1, 2],
      nextNumber: 3,
    }
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length);
    },
    add() {
      this.numbers.splice(this.randomIndex(), 0, this.nextNumber);
      this.nextNumber += 1;
    },
    remove(index) {
      this.numbers.splice(index, 1);
    },
    // cssを使わない場合はdoneを必ずつける
    beforeEnter(el) {
      el.style.transform = 'scale(0)';
    },
    enter(el, done) {
      let scale = 0;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale += 0.1
        if( scale > 1) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    leave(el, done) {
      let scale = 1;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale -= 0.1
        if( scale < 0 ) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    // v-showのみ使用可能
    leaveCancelled() {

    },
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

.circle {
  width: 200px;
  height: 200px;
  margin: auto;
  background-color: deeppink;
  border-radius: 100px;
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
.fade-move {
    transition: transform 1s;
  }

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
  position: absolute;
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