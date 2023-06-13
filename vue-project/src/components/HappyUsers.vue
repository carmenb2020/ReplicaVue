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
      type: Number,
      required: true
    }
  })
</script>

<template>
      <div class="section-numbers__container section-numbers__users">
        <img v-bind:src="srcPath" alt="users icon" />
        <p class="section-numbers__container__number">{{ pCount }}</p>
        <p>{{ pMsg }}</p>
      </div>   
</template>

<style lang="css">


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
</style>