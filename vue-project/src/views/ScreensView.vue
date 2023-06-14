<script setup>
import Review from '../components/ReviewSection.vue';
</script>

<template>
    
    <Review :optionA="true" />
    <Review :imgs="true" />  
    <Review :optionB="true" />
        
</template>

<style scoped>
:root {
    --background-color: #fff;
    --button-color: #ff556e;
    --main-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

body{
    background-color: #f7fafd;
    font-family: 'Open sans', sans-serif;
}

#top-icon {
    width: 6.688rem;
    margin-left: 100px; 
}

header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    position: sticky;
    top: 0px;
    background-color: #f7fafd;
    z-index: 1030;
    box-shadow: 0.0625rem 0.375rem 0 rgba(0, 0, 0, 0.1);
}

nav {
    width: 70%;
}

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

.top-menu {
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
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


.top-menu a:hover{
    color: #ff556e;
}

.mobile-landing {
    justify-content: center;
    text-align: center;
}

h1 {
    text-align: center;
    font-size: 64px;
    opacity: 0.8;
}

.mobile-landing__p {
    width: 60%;
    text-align: center;
    font-weight: 550;
    opacity: 0.6;
    justify-content: center;
    margin: 0px auto 2rem auto ;
}

/* .button-download__icon {
    width: 22px;
    height: 22px;
}

.button-download button {
    display: flex;
    margin: 5px;
    padding: 5px 20px;
    color: #ffff;
    text-transform: uppercase;
    border: 2px solid #ff556e;
    font-size: 14px;
    font-weight: 700;
    border-radius: 28px;
    background-color: #ff556e;
}

.button-download button:hover {
    background-color: #fff;
    border: 2px solid #ff556e;
    color: #ff556e;
}

.button-download:hover .button-download__icon {
    stroke: #ff556e;
}

.button-download {
    display: flex;
    justify-content: center;
    margin-top: 50px;
} */
/*
.button-download__button p {
    margin: auto;
    margin-left: 5px;
}
*/
.container-image-phone {
    display: flex;
    justify-content: center;
}

.phone-image {
    width: 929px;
    margin-top: 50px;
}

.phone-image:hover {
    transform: scale(1.2);
    transition: all 0.2s;
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

.container-middle {
    margin-top: 50px;
    margin-bottom: 200px;
}

.icons-middle__text {
    font-weight: 700;
    text-align: center;
    margin-top: 50px;
}
/* 
.section-organize {
    display: flex;
    justify-content: space-around;
    margin-bottom: 100px;
}

.section-organize__img img {
    width: 497px;
    height: 586px;
}

.section-organize__content {
    width: 580px;
    height: 586px;
    margin-top: 5rem;
    margin-left: 2.5rem;
    justify-content: center;
}

.section-organize__content p {
    line-height: 30px;
    font-size: 16px;
    opacity: 0.7;
}

.section-organize__content ul {
    line-height: 40px;
    padding: 15px;
    list-style: square;
    opacity: 0.6;
} */

/* #organize-title {
    font-size: 40px;
    margin-bottom: 1.5rem;
}

.lightbox-button {
    background-color: #ff556e;
    border-radius: 28px;
    border: 2px solid #ff556e;
    width: 150px;
    height: 40px;
    font-weight: 700;
    color: #fff;
}

.lightbox-button:hover {
    background-color: #fff;
    color: #ff556e;
    border: 2px solid #ff556e;
    transition: all 0.2s;
} */

/* .section-calendar {
    display: flex;
    justify-content: center;
    background-color: #e8eff6;
    padding: 128px 0;
} */

/* .section-calendar__left {
    display: flex;
    flex-direction: column;
    width: 570px;
    height: 586px;
    font-size: 16px;
    padding: 96px 40px 0 0 ;
    opacity: 0.6;
}

.section-calendar__container {
    display: flex;
    gap: 10px;
    padding: 10px;
}

.section-calendar__image {
    width: 22px;
    height: 22px;
}

.section-calendar__p {
    padding: 0 5px;
    font-weight: 700;
} */

/* .button-schedule {
    background-color: #9a67e7;
    color: #fff;
}

.button-schedule svg {
    stroke: #fff;
} */

/* #calendar-image {
    width: 497px;
    height: 586px;
    position: relative;
} */

/* .check-icon {
    width: 22px;
    height: 22px;
}

.section-calendar__checklist{
    display: flex;
    align-items: center;
    margin-left: 10px;
}

.section-calendar__checklist p {
    margin-left: 10px;
} */

/* .button-terms {
    background-color: #ff556e;
    color: #fff;
    border-radius: 28px;
    border: 2px solid #ff556e;
    font-size: 14px;
    font-weight: 700;
    width: 100px;
    height: 50px;
}

.button-privacy {
    background-color: #e8eff6;
    border: 2px solid #000;
    border-radius: 28px;
    width: 100px;
    height: 50px;
    font-size: 14px;
    font-weight: 700;
}

.container-buttons__privacy {
    margin-bottom: 50px;
}

.button-terms:hover {
    background-color: #ebe7fa;
    border: 2px solid #ff556e;
    color: #ff556e;
    transition: all 0.2s;
}

.button-privacy:hover {
    background-color: #000000;
    color: #ebe7fa;
    transition: all 0.2s;
} */

/* .check-icon {
filter: invert(56%) sepia(95%) saturate(370%) hue-rotate(111deg)
    brightness(96%) contrast(93%);
} */

.section-numbers {
    display: flex;
    justify-content: center;
    background-color: #e8eff6;
    padding: 60px;
}

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

.section-footer {
    display: flex;
    justify-content: space-around;
    padding-top: 4rem;
    padding-bottom: 1rem;
    border-top: 1px solid #c8d4d6;
    background-color: #f7fafd;
    color: #777;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.75rem;
    font-family: "Open Sans", sans-serif;
  }
  
  h5 {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.625rem;
  }
  .footer-div ul {
    list-style: none;
    text-align: left;
  }
  
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
  
  .footer-svg {
    width: 14px;
    height: 20px;
    margin-right: 10px;
    fill: #777;
  }
  
  .footer-icon {
    padding-left: 10px;
    padding-top: 3px;
    width: 30px;
  }
  
  .copyright {
    display: flex;
    justify-content: center;
  }
  
  .copyright p {
    color: #999;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.5rem;
    font-family: "Open Sans", sans-serif;
  }


</style>