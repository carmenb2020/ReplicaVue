<script setup>
  defineProps({
    srcPath: {
      type: String,
      required: true
    },

    pMsg: {
      type: String,
      required: true
    },

    pCount: {
      type: String,
      required: true,
      default: ""
    },

    pCountClass: {
      type: String,
      required: true
    },

    propClass: {
      type: String,
      required: true
    },

    pClass: {
      type: String
    },
    
    imgClass: {
      type: String,
      required: true
    }
  })
</script>

<template>
      <div v-bind:class="propClass">
        <img v-bind:class="imgClass" v-bind:src="srcPath" alt="users icon" />
        <p v-bind:class="pCountClass">{{ pCount }}</p>
        <p v-bind:class="pClass">{{ pMsg }}</p>
      </div>   
</template>

<style scoped>

.container-middle {
    margin-top: 50px;
    margin-bottom: 200px;
}
.section-numbers__container {
    text-align: center;
    font-size: 16px;
    margin-left: 50px;
    margin-right: 50px;
}

.section-numbers__container img {
    width: 60px;
    height: 60px;
}

.section-numbers__container__number {
    font-size: 2rem;
    font-weight: 700;
    opacity: 0.8;
}
.container-icons-middle {
    display: flex;
    justify-content: space-evenly;
}

.container-icons-middle__img {
    align-self: center;
    width: 65px;
    height: 65px;
    margin: 0 auto;
    padding-top: 30px;
}

.container-icons-middle__icon {
    display: flex;
    width: 120px;
    height: 120px;
    flex-direction: column;
    background-color: #ebe7fa;
    border-radius: 50%;

}

.icons-middle__text {
    font-weight: 700;
    text-align: center;
    margin-top: 50px;
}
</style>