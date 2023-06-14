<script setup>
    import PinkButton from '../components/PinkButton.vue'
</script>
<template>
    <section class="section-bottom">
        <div class="section-bottom__image">
            <img id="phone-image-bottom" src="../assets/Images/download-iphone.png" alt="imagen fondo 4" />
        </div>
    
        <div class="section-bottom__container">
            <p class="section-bottom__container__p">
            Do you feel like you're wasting time with small stuff instead of
            working towards your goals? Start using Sync to organize your time and
            get a grip on your personal development
            </p>

            <div class="button-download">
                <PinkButton altText="Apple logo" hrefTo="http://https://factoriaf5.org/" msg="Download" imageURI="./src/assets/Images/apple.svg"/>
                <PinkButton msg="Download" imageURI="./src/assets/Images/googleplay.svg"/>
            </div>
        </div>
    </section>
</template>
<style scoped>
    .section-bottom {
    padding-top: 100px;
    padding-bottom: 100px;
    }

    .section-bottom__image {
        display: flex;
        justify-content: center;
    }

    #phone-image-bottom {
        width: 968px;
        height: 580px;
        padding-top: 100px;
    }

    .section-bottom__container {
        text-align: center;
    }

    .section-bottom__container__p {
        width: 50%;
        margin: 0 auto;
    }
    
    .button-download {
        display: flex;
        justify-content: center;
        margin-top: 50px;
    }
</style>
