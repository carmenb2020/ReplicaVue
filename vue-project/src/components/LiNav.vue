<script setup>
    defineProps({
    msg: {
        type: String,
        required: true
        },
        refh: {
            type: String,
            default:"#"
        },
        classparam: {
            type: String,
            default:""
        }
    })
</script>

<template>
    <li :class="classparam"><a :href="refh">{{ msg }}</a></li>
</template>

<style scoped>
.top-menu li {
    list-style: none;
    margin: 0 10px;
    text-transform: uppercase;
    font-family: 'Open sans', sans-serif;
    font-weight: 700;
}

a {
    text-decoration: none;
    color: #000000;
}

</style>