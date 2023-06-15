<script setup>
    defineProps({
        msg: {
            type: String
        },

        srcPath: {
            type: String
        }
    })
</script>

<template>
    <button class="section-calendar__button">
        <img v-bind:src="srcPath" alt="Clock icon">

        <p class="section-calendar__p">{{ msg }}</p>
    </button>
</template>

<style lang="css" scoped>
    .section-calendar__button {
    display: flex;
    width: 150px;
    height: 40px;
    border: none;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    padding: 0 5px;  
    }

    .section-calendar__button:hover {
        background-color: #9a67e7;
        color: #fff;
    }

    .section-calendar__button:hover svg {
        stroke: #fff;
    }
</style>