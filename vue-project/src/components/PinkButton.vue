<script setup>
defineProps({
  msg: {
    type: String,
    default: "DOWNLOAD"
  },
  imageURI: {
    type: String,
  }

})


</script>

<template>

<a href="#"><img v-bind:src="imageURI" alt="logo Apple">{{ msg }}</a>

</template>

<style lang="scss" scoped>
$background_color_3: #FF566E;

a{
    height: 3vh;
    font-size: 0.6rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    width:fit-content;
    background: $background_color_3;
    color: aqua;
}

img{
    height: 2vh;
    background: $background_color_3;
    margin-right: 1vw;
}

a:link{
    border: 2px solid $background_color_3;
    border-radius: 25px;
    padding: 5px 3vw;
    margin-right:2vw;
    margin-left:0;
    background: $background_color_3;
    color: aqua;
}

a:visited{
    color:white;
    background: $background_color_3;
    
}

a:hover{    
    box-shadow: 0px 0px 5px 2px violet;
}

</style>