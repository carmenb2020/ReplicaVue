<script setup>
defineProps({
  msg: {
    type: String,
    default: "DOWNLOAD"
  },
  imageURI: {
    type: String
  },
  hrefTo: {
    type: String,
    default: "#"
  },
  classOption:{
    type:String, 
    default:""
  },
  altText:{
    type: String,
    default: "Image"
  }
})


</script>

<template>

<a v-bind:href="hrefTo" v-bind:class="classOption"><img v-bind:src="imageURI" v-bind:alt="altText">{{ msg }}</a>

</template>

<style lang="scss" scoped>

$background_color_3: #FF566E;
$background_color_4:white;
$font_color_1:white;
$font_color_2:black;

a{
    height: 3.5vh;
    font-size: 0.9rem;
    font-weight: bolder;
    display: flex;
    align-items: center;
    width:fit-content;
    background: $background_color_3;
    text-transform:uppercase;
    color:$font_color_1;   

}

img{
    height: 3vh;
    background: $background_color_3;
    margin-right: 1vw;
}

:visited{
    border: 2px solid $background_color_3;
    color:$font_color_1;
}

a:link{
    border: 2px solid $background_color_3;
    border-radius: 25px;
    padding: 5px 3vw;
    margin-right:2vw;
    margin-left:0;
    background: $background_color_3;
    color: $font_color_1;
}

a:hover{    
    box-shadow: 0px 0px 5px 2px violet;
}

.alternativeStyle{
    background: $background_color_4;
    border:2px solid $background_color_3;
    color:$font_color_2;
    height: 2.5vh;

    img{
        background: $background_color_4;
        content-visibility:hidden;
        margin:0;
    }

    :visited{
        color:$font_color_2;
    }    
}

.alternativeNoImgPinkStyle{
    height: 2.5vh;
    img{        
        content-visibility:hidden;
        margin:0;
    }
}

</style>