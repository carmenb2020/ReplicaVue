<script setup>
    defineProps({
        altP: {
            type: String,
            default:"",
        },
        srcPath: {
            type: String,
            default:"",
        },
        classP: {
            type: String,
            default:"footer-icon"
        }
    })
</script>
<template>
<li><img :src="srcPath" :alt="altP" :class="classP"/></li>
</template>
<style scoped>
    .div-icons ul {
        display: flex;
    }
    
    .div-icons ul li {
        width: 50px;
        height: 50px;
        flex-direction: column;
        background-color: #777;
        border-radius: 50%;
        margin-left: 10px;
    }
    .footer-icon {
        padding-left: 10px;
        padding-top: 3px;
        width: 30px;
    }
</style>