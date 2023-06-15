<script setup>
    import PinkButton from '../components/PinkButton.vue'
	import HappyUsers from '../components/HappyUsers.vue';
</script>
<template>
	  <section class="section-numbers">
        <HappyUsers propClass="section-numbers__container section-numbers__users" srcPath="src/assets/Images/usersIconFix.png" pCount="350" pCountClass="section-numbers__container__number" pMsg="Happy Users"/>
      
        <HappyUsers propClass="section-numbers__container section-numbers__issues"  srcPath="src/assets/Images/keyIconFix.png" pCount="137" pCountClass="section-numbers__container__number" pMsg="Issues Solved"/>

        <HappyUsers propClass="section-numbers__container section-numbers__reviews" srcPath="src/assets/Images/gearIconFix.png" pCount="233" pCountClass="section-numbers__container__number" pMsg="Good Reviews"/>

        <HappyUsers propClass="section-numbers__container section-numbers__case" srcPath="src/assets/Images/messageIconFix.png" pCount="127" pCountClass="section-numbers__container__number" pMsg="Case Studies"/>

        <HappyUsers propClass="section-numbers__container section-numbers__orders" srcPath="src/assets/Images/rocketIconFix.png" pCount="211" pCountClass="section-numbers__container__number" pMsg="Orders Received"/>
    </section>
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

	.container-middle {
    margin-top: 50px;
    margin-bottom: 200px;
}

.section-numbers {
    display: flex;
    justify-content: center;
    background-color: #e8eff6;
    padding: 60px;
}


.section-numbers img {
    width: 60px;
    height: 60px;
}

.section-numbers__container__number {
    font-size: 2rem;
    font-weight: 700;
    opacity: 0.8;
}
.container-icons-middle {
    display: flex;
    justify-content: space-evenly;
}

.container-icons-middle__img {
    align-self: center;
    width: 65px;
    height: 65px;
    margin: 0 auto;
    padding-top: 30px;
}

.container-icons-middle__icon {
    display: flex;
    width: 120px;
    height: 120px;
    flex-direction: column;
    background-color: #ebe7fa;
    border-radius: 50%;

}

.icons-middle__text {
    font-weight: 700;
    text-align: center;
    margin-top: 50px;
}
</style>
