<script setup>
    defineProps({
        viewBoxp: {
            type: String,
            required: true,
        },
        xmlnsp: {
            type: String,
            default: "http://www.w3.org/2000/svg"
        },
        classp: {
            type: String,
            default: "footer-svg",
        },
        pathd: {
            type: String,
            default: "",
        },
        msg: {
            type: String,
            default: "",
        }
    });
</script>
<template>
    <li>
        <svg :class=classp :xmlns=xmlnsp :viewBox=viewBoxp><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com/ License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path v-bind:d=pathd /></svg>
        {{msg}}
    </li>
</template>
<style scoped>
.footer-svg {
    width: 14px;
    height: 20px;
    margin-right: 10px;
    fill: #777;
  }

</style>