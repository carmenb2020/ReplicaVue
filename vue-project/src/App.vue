<script setup>
  import PinkButton from './components/PinkButton.vue'
  import LiNav from './components/LiNav.vue'
  import LiAButton from './components/LiAButton.vue'
  import SquareButton from './components/SquareButton.vue'
  import HappyUsers from './components/HappyUsers.vue'
</script>

<template>
  <body>
  <header>
    <div>
      <a href="#"><img id="top-icon" src="./assets/Images/logo.svg" alt="top left icon" /></a>
    </div>
    <div>
      <nav>
        <ul class="top-menu">
          <LiNav msg="Description"/>
          <LiNav msg="Features"/>
          <LiNav msg="Screens"/>
          <li class="dropdown">
            <a href="#">Extra</a>
            <div class="dropdown-content">
              <a href="#">Article Details</a>
              <a href="#">Terms Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </li>
          <LiAButton classButton="button-download__top" msg1="Login" refh="https://vuejs.org/guide/introduction.html"/>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <section>
      <div class="mobile-landing">
        <h1 class="mobile-landing__title">Mobile App Landing Page</h1>
        <p class="mobile-landing__p">
          Start focusing on your goals and get more things done with Sync
          mobile application. It's the first app to harness the power of
          social connections to help stay focused and get organized
        </p>
      </div>

      <div class="button-download">
        <PinkButton altText="Apple logo" hrefTo="http://https://factoriaf5.org/" msg="Download" imageURI="./src/assets/Images/apple.svg"/>
        <PinkButton msg="Download" imageURI="./src/assets/Images/googleplay.svg"/>
       
      </div>
    </section>

    <div class="container-image-phone">
      <img class="phone-image" src="./assets/Images/header-iphone.png" alt="iphone header" />
    </div>

    <section class="container-middle">

        
      <div class="container-icons-middle">
        <HappyUsers propClass="container-icons-middle__icon" imgClass="container-icons-middle__img" srcPath="src/assets/Images/usersIconFix.png" pClass="icons-middle__text" pCount="" pMsg="Identify Goals"/>

        <HappyUsers propClass="container-icons-middle__icon" imgClass="container-icons-middle__img" srcPath="src/assets/Images/keyIconFix.png" pClass="icons-middle__text" pCount="" pMsg="Situation Analysis"/>

        <HappyUsers propClass="container-icons-middle__icon" imgClass="container-icons-middle__img" srcPath="src/assets/Images/gearIconFix.png" pClass="icons-middle__text" pCount="" pMsg="Task Settings"/>

        <HappyUsers propClass="container-icons-middle__icon" imgClass="container-icons-middle__img" srcPath="src/assets/Images/messageIconFix.png" pClass="icons-middle__text" pCount="" pMsg="Social Interaction"/>
        
        <HappyUsers propClass="container-icons-middle__icon" imgClass="container-icons-middle__img" srcPath="src/assets/Images/rocketIconFix.png" pClass="icons-middle__text" pCount="" pMsg="Get Things Done"/>

      </div>
    </section>
    <section class="section-organize">
      <div class="section-organize__img">
        <img id="organize-image" src="./assets/Images/description-1-app.png" alt="imagen fondo 1" />
      </div>
      <div class="section-organize__content">
        <h2 id="organize-title">Organize Your Time And Start Getting Results</h2>
        <p>
          Sync is the first mobile app on the market to harness the power of
          social connections to help you stop procrastinating and start
          getting things done. Give it a try and see the changes right away
        </p>

        <ul>
          <li>Analyse and evaluate your current status and productivity</li>
          <li>Begin monitoring your day to day routine with Sync app</li>
          <li>See the improved results in no more than a couple of weeks</li>
        </ul>
        <!--<button class="lightbox-button">LIGHTBOX</button>-->        
        <PinkButton msg="lightbox" imageURI="./src/assets/Images/googleplay.svg"
        classOption="alternativeNoImgPinkStyle"/>
      </div>
    </section>

    <section class="section-calendar">
      <div class="section-calendar__left">
        
          <div class="section-calendar__container">
            <SquareButton msg="Schedule" srcPath="./src/assets/Images/schedule.svg"/>
            <SquareButton msg="Tracking" srcPath="./src/assets/Images/tracking.svg"/>
            <SquareButton msg="Organize" srcPath="./src/assets/Images/organize.svg"/>
          </div>

          <div>
            <p>
              <strong>Schedule tasks to keep</strong> to keep track of their
              completion. Sync provides multiple scheduling options including
              alarms and reminders
            </p>

            <div>

              <div class="section-calendar__checklist">
                <img class="check-icon" src="./assets/Images/checkIcon.png" alt="icono check" />
                <p>
                  You can always add new tasks or change the settings of existing
                  ones in your calendar view or the app control panel
                </p>
              </div>

              <div class="section-calendar__checklist">
                <img class="check-icon" src="./assets/Images/checkIcon.png" alt="icono check" />
                <p>
                  It's easy to stay focused on your most important daily activities
                  that get you closer to meeting your goals
                </p>
              </div>
              <div class="section-calendar__checklist">
                <img class="check-icon" src="./assets/Images/checkIcon.png" alt="icono check" />
                <p>
                  Use phone reminders to free up your long term memory wich will
                  reduce stress and make you more productive
                </p>
              </div>
            </div>

            <div class="container-buttons__privacy">
              <!--<button class="button-terms">TERMS</button>
              <button class="button-privacy">PRIVACY</button>-->
              <PinkButton classOption="alternativeNoImgPinkStyle"/>
                <PinkButton classOption="alternativeStyle" msg="Privacity"/>
              
            </div>
          </div>
        </div>
        
          <img id="calendar-image" src="./assets/Images/description-2-app.png" alt="imagen fondo 2" />
        

    </section>

    <section class="section-user">
      <h2>User Testimonials</h2>

      <div class="section-user__rick">
        <img class="section-user__rick__img" src="./assets/Images/iconoEstrellasFix.png" alt="icono valoraciones" />
        <p class="section-user__rick__p">
          I love using Sync for my personal development needs. It meets all my
          requirements and it actually helps a lot with focusing skills.
        </p>
        <p class="section-user__rick__p"><strong>Rick Jones - Designer</strong></p>
      </div>

      <div class="section-user__lynda">
        <img class="section-user__lynda__img class=" src="./assets/Images/iconoEstrellasFix.png" alt="icono valoraciones" />
        <p class="section-user__lynda__p">
          After trying out a large number of personal coaching apps I decided
          to give Sync a try and what a wonderful surprise it was.
        </p>
        <p class="section-user__lynda__p"><strong>Lynda Marquez - Developer</strong></p>
      </div>

      <div class="section-user__jay">
        <img class="section-user__jay__img" src="./assets/Images/iconoEstrellasFix.png" alt="icono valoraciones" />
        <p class="section-user__jay__p">
          Never dreamed I could learn so fast how to focus on my personal
          goals and improve my life to levels I never thought possible.
        </p>
        <p class="section-user__jay__p"><strong>Jay Frisco - Marketer</strong></p>
      </div>

      <div class="section-user__customers">
    	<img class="section-user__customers__img" src="./assets/Images/customer-logo-1.png" alt="customer logo 1" />
    	<img class="section-user__customers__img" src="./assets/Images/customer-logo-2.png" alt="customer logo 2" />
    	<img class="section-user__customers__img" src="./assets/Images/customer-logo-3.png" alt="customer logo 3" />
    	<img class="section-user__customers__img" src="./assets/Images/customer-logo-4.png" alt="customer logo 4" />
    	<img class="section-user__customers__img" src="./assets/Images/customer-logo-5.png" alt="customer logo 5" />
      </div>

      <div class="section-user__frank">
        <img class="section-user__frank__img" src="./assets/Images/iconoEstrellasFix.png" alt="icono valoraciones" />
        <p class="section-user__frank__p">
          I got so much value from using Sync in my daily life for wich I am
          very grateful and would recommend it to everybody
        </p>
        <p class="section-user__frank__p"><strong>Frank Gibson - Manager</strong></p>
      </div>

      <div class="section-user__rita">
        <img class="section-user__rita__img" src="./assets/Images/iconoEstrellasFix.png" alt="icono valoraciones" />
        <p class="section-user__rita__p">
          If you have great goals but can't figure out a way to keep focused
          then you should definitely give Sync a try and see the results
        </p>
        <p class="section-user__rita__p"><strong>Rita Longmile - Designer</strong></p>
      </div>

      <div class="section-user__jones">
        <img class="section-user__jones__img" src="./assets/Images/iconoEstrellasFix.png" alt="icono valoraciones" />
        <p class="section-user__jones__p">
          I've been looking for a great organizer app for such a long time but
          now I am really happy that I found Sync. It's been working great
        </p>
        <p class="section-user__jones__p"><strong>Jones Smith - Developer</strong></p>
      </div>
    </section>

    <section class="section-numbers">
      <HappyUsers propClass="section-numbers__container section-numbers__users" srcPath="src/assets/Images/usersIconFix.png" pCount="350" pCountClass="section-numbers__container__number" pMsg="Happy Users"/>
      
      <HappyUsers propClass="section-numbers__container section-numbers__issues"  srcPath="src/assets/Images/keyIconFix.png" pCount="137" pCountClass="section-numbers__container__number" pMsg="Issues Solved"/>

      <HappyUsers propClass="section-numbers__container section-numbers__reviews" srcPath="src/assets/Images/gearIconFix.png" pCount="233" pCountClass="section-numbers__container__number" pMsg="Good Reviews"/>

      <HappyUsers propClass="section-numbers__container section-numbers__case" srcPath="src/assets/Images/messageIconFix.png" pCount="127" pCountClass="section-numbers__container__number" pMsg="Case Studies"/>

      <HappyUsers propClass="section-numbers__container section-numbers__orders" srcPath="src/assets/Images/rocketIconFix.png" pCount="211" pCountClass="section-numbers__container__number" pMsg="Orders Received"/>
    </section>

    <section class="section-bottom">
      <div class="section-bottom__image">
        <img id="phone-image-bottom" src="./assets/Images/download-iphone.png" alt="imagen fondo 4" />
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
  </main>

  <footer>
    <section class="section-footer">
    <div class="footer-div">
        
        <ul>
            <h5>Contact Info</h5>
            <li><svg class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com/ License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>22 Innovation Street, CA, US</li>
            <li><svg class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com/ License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>office@syncmobile.com</li>
            <li><svg class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com/ License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>+44 376 945 23</li>
        </ul>
    </div>
    <div class="footer-div">
      
        <ul>  
            <h5>Value Links</h5>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Article Details</li>
        </ul>
    </div>
    <div class="footer-div">
        
        <ul>
            <h5>Other Apps</h5>
            <li>Scientific Calculator</li>
            <li>Advanced Timer</li>
            <li>Music Store</li>
        </ul>
    </div>
    <div class="footer-div">
        <div class="div-icons">
        <ul>
            <li><svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook footer-icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="#fff" fill="#fff" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg></li>
            
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter footer-icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="#fff" fill="#fff" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
            </svg>
        </li>
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-pinterest footer-icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M8 20l4 -9" />
                <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            </svg>
        </li>
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram footer-icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="0.5" stroke="#000000" fill="#fff" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
            </svg>
        </li>
        </ul>
        </div>
    </div>
</section>
    <div class="copyright">
        <p>Copyright &copy; 2020 Inovatik - All rights reserved</p>
    </div>
</footer>
</body>
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

.button-download__icon {
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
}
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
}

#organize-title {
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
}

.section-calendar {
    display: flex;
    justify-content: center;
    background-color: #e8eff6;
    padding: 128px 0;
}

.section-calendar__left {
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
}

.button-schedule {
    background-color: #9a67e7;
    color: #fff;
}

.button-schedule svg {
    stroke: #fff;
}

#calendar-image {
    width: 497px;
    height: 586px;
    position: relative;
}

.check-icon {
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
}

.button-terms {
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
}

.section-user {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: #f7fafd;
}

.check-icon {
filter: invert(56%) sepia(95%) saturate(370%) hue-rotate(111deg)
    brightness(96%) contrast(93%);
}

.section-user {
    font-size: 16px;
}

.section-user p {
    width: 300px;
}

.section-user h2 {
    grid-column: 2;
    font-size: 2.75rem;
    margin: auto auto;
    padding-top: 20px;
}

.section-user__rick {
    grid-row: 2;
    width: 336px;
    height: 180px;
    text-align: center;
    padding-top: 50px;
margin: 0 auto;
}

.section-user__rick__p {
    margin: 0 auto;
    opacity: 0.7;
    padding-top: 20px;
}

.section-user__rick__img {
    width: 150px;
}

.section-user__lynda {
    grid-row: 2;
    grid-column: 2;
    width: 336px;
    height: 180px;
    text-align: center;
    padding-top: 50px;
    margin: 0 auto;
}

.section-user__lynda__p {
    margin: 0 auto;
    opacity: 0.7;
    padding-top: 20px;
}

.section-user__lynda__img {
    width: 150px;
}

.section-user__jay {
    grid-row: 2;
    width: 336px;
    height: 180px;
    text-align: center;
    padding-top: 50px;
    margin: 0 auto;
}

.section-user__jay__p {
    margin: 0 auto;
    opacity: 0.7;
    padding-top: 20px;
}

.section-user__jay__img {
    width: 150px;
}

.section-user__customers {
    display: flex;
    justify-content: center;
    width: 1110px;
    height: 111px;
    margin: 200px auto;
    align-items: center;
    grid-row: 3;
    grid-column: 1 / 4;
    background-color: #fff;
}

.section-user__customers__img {
    width: 175px;
    height: 35px;
    padding: 50px;
    background-color: #fff;
}

.section-user__frank {
    grid-column: 1;
    grid-row: 4;
    width: 336px;
    height: 180px;
    text-align: center;
    margin: 0 auto;
}

.section-user__frank__p {
    margin: 0 auto;
    opacity: 0.7;
    padding-top: 20px;
}

.section-user__frank__img {
    width: 150px;    
}

.section-user__rita {
    grid-column: 2;
    grid-row: 4;
    width: 336px;
    height: 180px;
    text-align: center;
    padding-bottom: 100px;
    margin: 0 auto;
}

.section-user__rita__p {
    margin: 0 auto;
    opacity: 0.7;
    padding-top: 20px;
}

.section-user__rita__img {
    width: 150px;
}

.section-user__jones {
    grid-row: 4;
    width: 336px;
    height: 180px;
    text-align: center;
    margin: 0 auto;
}

.section-user__jones__p {
    margin: 0 auto;
    opacity: 0.7;
    padding-top: 20px;
}

.section-user__jones__img {
    width: 150px;
}

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
