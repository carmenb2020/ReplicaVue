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

        <!-- <svg xmlns="http://www.w3.org/2000/svg" class="section-calendar__image button-schedule icon icon-tabler icon-tabler-clock-hour-4" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 12l3 2" />
            <path d="M12 7v5" />
        </svg> -->
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