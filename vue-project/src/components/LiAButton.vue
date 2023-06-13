<script setup>
    import PinkButton from './PinkButton.vue';
    defineProps({
    msg1: {
        type: String,
        required: true
        },
        refh: {
            type: String,
            default:"#"
        },
        classButton: {
            type: String,
            default:""
        }
        
    })


</script>
<template>
<li>      
    <PinkButton  :class="classButton" classOption="alternativeStyle" :msg="msg1" :hrefTo="refh"/>
</li>
</template>

<style scoped>

.button-download__top {
    -webkit-border-radius: 28px;
    -moz-border-radius: 28px;
    border-radius: 1.75rem;
    border: 2px solid #ff556e;
    padding: 5px 20px;
    color: var(--button-color);
    text-transform: uppercase;
    font-size: 0.875rem;
    font-family: 'Open sans', sans-serif;
    background-color: #fff;
    font-weight: 700;
}

.button-download__top:hover {
    background-color: #ff556e;
    color: white;
    transition: all 0.4s;
}

.dropdown {
    display: inline-block;
    position: relative;
}

.dropdown-content {
    display: none;
    position: absolute;
    overflow: auto;
    box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.4);
    padding: 5px;
    z-index: 5;
}

.dropdown:hover .dropdown-content {
    display: block;
    white-space: nowrap;
}

.dropdown-content a {
    display: block;
    color: #000000;
    padding: 5px;
    text-decoration: none;
}

.dropdown-content a:hover {
    color: #ff556e;
}


</style>
