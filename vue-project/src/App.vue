<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
  <header>        
        <nav>
            <img src="images/logo.svg" alt="Logotipo Sync">

            <ul class="dropdown" id="dropdown">
                <li class="nav_option"><a href="#tab_description">DESCRIPTION</a></li>
                <li class="nav_option"><a href="#tab_features">FEATURES</a></li>
                <li class="nav_option"><a href="#tab_user_testimonials">SCREENS</a></li>
                <li class="nav_option"><a href="#tab_extras">EXTRA <img src="images/down-arrow.png" id="menu_arrow"></a>
                    <ul class="dropdown_menu">
                        <li class="nav_subm_option"><a href="#">ARTICLE DETAILS</a></li>
                        <hr>
                        <li class="nav_subm_option"><a href="#">TERMS CONDITIONS</a></li>
                        <hr>
                        <li class="nav_subm_option"><a href="#">PRIVACY POLICY</a></li>
                    </ul>
                </li>
                <li class="nav_option"><a href="https://factoriaf5.org/" target="_blank">DOWNLOAD</a></li>
            </ul>

        </nav>
    </header>

    <main>       

        <section>
            <h1>Mobile App Landing Page</h1>
            <p>Start focusing on your goals and get more things done with Sync mobile application. It's the first app to harness the power of social connections to help you stay focused and get organized
            </p>
            <div class="button_ribbon_download_app">
                <a href="#"><img src="images/apple.png" alt="logo Apple">DOWNLOAD</a>
                <a href="#"><img src="images/playstore.png" alt="logo Google Play">DOWNLOAD</a>
            </div>
            
            <img src="images/header-iphone.png" alt="Imagen de movil con la pantalla de la app" class="main_section_image">
            
        </section>
        <section class="circles_area">
            <a href="" class="each_topic_circle">
                <img src="images/grupo_circulo.png" alt="Identify Goals">
                Identify Goals
            </a>
            <a href="" class="each_topic_circle">
                <img src="images/etiqueta_circulos.png" alt="Situational Analysis">
                Situational Analysis
            </a>
            <a href="" class="each_topic_circle">
                <img src="images/engranaje_circulo.png" alt="Task Settings">
                Task Settings
            </a>
            <a href="" class="each_topic_circle">
                <img src="images/burbuja-de-dialogo.png" alt="Social Interaction">
                Social Interaction
            </a>
            <a href="" class="each_topic_circle">
                <img src="images/rocket-solid.svg" alt="Get Things Done">
                Get Things Done
            </a>
        </section>
        
        <section id="tab_description">            
            <img src="images/description-1-app.png" alt="Imagenes de la app">
            <article>
                <h2>Organize Your Time And Start Getting Resoults</h2>

                <p class="tab_description_inner_text">
                    Sync is the first mobile app on the market to harness the power of social connections to help you stop procastinating and start getting thing done. Give it try and see the changes right away.
                </p>
                    
                <ul class="tab_description_inner_text">
                    <li>Analyse and evaluate your current status and productivity</li>
                    <br>
                    <li>Begin monitoring your day routine with Sync app</li>
                    <br>
                    <li>See the improved resoults in no more than a couple of weeks</li>
                </ul>

                <a href="#" class="lonely_button_link">LIGHTBOX</a>

            </article>
        </section>
           
        
        

        <section id="tab_features">
            <article>
                <div>
                    <a href="#"><img src="images/reloj_2.png" alt="Reloj">Schedule</a>
                    <a href="#"><img src="images/menu_hamb_2.png" alt="Tracking">Tracking</a>
                    <a href="#"><img src="images/calendario_2.png" alt="Calendario">Organize</a>                    
                </div>
                <p>
                    Schedule tasks to keep track of their completion. Sync provides multiple scheduling options including alarms and reminders.
                </p>
                <ul>
                    <li>You can always add new tasks or change the settings of existing ones in your calendar view or the app control panel
                    </li>
                    <br>
                    <li>It's easy to stay focused on your most important daily activities that will get you closer to meeting your goals
                    </li>
                    <br>
                    <li>Use phone reminders to free up your long term memory which will reduce stress and make you more productive
                    </li>
                </ul>

            </article>
            <img src="images/description-2-app.png" alt="Capturas de pantalla de la agenda">
        </section>

        

        <section id="tab_user_testimonials">
            <h2>User Testimonials</h2>
            <article>
                <div class="tab_users_ratings">
                    <img src="images/estrella.png" alt="Estrella">
                    <img src="images/estrella.png" alt="Estrella">
                    <img src="images/estrella.png" alt="Estrella">
                    <img src="images/estrella.png" alt="Estrella">
                    <img src="images/estrella.png" alt="Estrella">
                </div>
                <hr>
                <p>
                    love using Sync for my personal development needs. It meets all my requirements and it actually helps a lot with focusing skills.
                </p>  
                <p>
                    Rick Jones - Designer
                </p>              
            </article>
            <article>
                <div class="tab_users_ratings">
                    <img src="images/estrella.png" alt="Estrella">
                    <img src="images/estrella.png" alt="Estrella">
                    <img src="images/estrella.png" alt="Estrella">
                    <img src="images/estrella.png" alt="Estrella">
                    <img src="images/estrella.png" alt="Estrella">
                </div>
                <hr>
                <p>
                    After trying out a large number of
                    Never dreamed I could learn so fast how
                    personal coaching apps I decided to give to focus on my personal goals and Sync a try and what a wonderful surprise improve my life to levels I never thought
                    it was.
                    possible.
                </p>    
                <p>
                    Lynda Marquez - Developer
                </p>               
            </article>
            <article>
                <div class="tab_users_ratings">
                    <img src="images/estrella.png" alt="Estrella">
                    <img src="images/estrella.png" alt="Estrella">
                    <img src="images/estrella.png" alt="Estrella">
                    <img src="images/estrella.png" alt="Estrella">
                    <img src="images/estrella.png" alt="Estrella">
                </div>
                <hr>
                <p>
                   Never dreamed I could learn so fast how to focus on my personal goals and improve my life to leveles I never thought possible.
                </p>    
                <p>
                    Jay Frisco - Marketer
                </p>               
            </article>

            <div class="tab_users_partners">
                <img src="images/customer-logo-1.png" alt="Primester">
                <img src="images/customer-logo-2.png" alt="GreenApp">
                <img src="images/customer-logo-3.png" alt="Voltmeter">
                <img src="images/customer-logo-4.png" alt="Keyrunner">
                <img src="images/customer-logo-5.png" alt="Amplifier">
            </div>

            <article>
                <div class="tab_users_ratings">
                    <img src="images/estrella.png" alt="Estrella">
                    <img src="images/estrella.png" alt="Estrella">
                    <img src="images/estrella.png" alt="Estrella">
                    <img src="images/estrella.png" alt="Estrella">
                    <img src="images/estrella.png" alt="Estrella">
                </div>
                <hr>
                <p>
                    I got so much value from using Sync in my daily life for which I am very grateful and would recommend it to everybody
                </p>    
                <p>
                    Frank Gibson - Manager
                </p>               
            </article>

            <article>
                <div class="tab_users_ratings">
                    <img src="images/estrella.png" alt="Estrella">
                    <img src="images/estrella.png" alt="Estrella">
                    <img src="images/estrella.png" alt="Estrella">
                    <img src="images/estrella.png" alt="Estrella">
                    <img src="images/estrella.png" alt="Estrella">
                </div>
                <hr>
                <p>
                    If you have great goals but can't figure out a way to keep focused then you should definitely give Sync a try and see the results
                </p>    
                <p>
                    Rita Longmile - Designer
                </p>               
            </article>
            <article>
                <div class="tab_users_ratings">
                    <img src="images/estrella.png" alt="Estrella">
                    <img src="images/estrella.png" alt="Estrella">
                    <img src="images/estrella.png" alt="Estrella">
                    <img src="images/estrella.png" alt="Estrella">
                    <img src="images/estrella.png" alt="Estrella">
                </div>
                <hr>
                <p>
                    I've been looking for a great organizer app for such a long time but now I am really happy that I found Sync. It's been working great
                </p>    
                <p>
                    Jones Smith - Developer
                </p>               
            </article>
        </section>

        <section id="tab_users_ratings_wrapup" class="circles_area">
            <a href="#" class="each_topic_circle"><img src="images/grupo_circulo.png" alt="Happy Users"><span>231</span>Happy Users</a>
            <a href="#" class="each_topic_circle"><img src="images/etiqueta_circulos.png" alt="Happy Users"><span>385</span>Issues Solved</a>
            <a href="#" class="each_topic_circle"><img src="images/engranaje_circulo.png" alt="Happy Users"><span>159</span>Good Reviews</a>
            <a href="#" class="each_topic_circle"><img src="images/burbuja-de-dialogo.png" alt="Happy Users"><span>127</span>Case Studies</a>
            <a href="#" class="each_topic_circle"><img src="images/rocket-solid.svg" alt="Happy Users"><span>211</span>Orders Recieved</a>
        </section>

        <section>

            <img src="images/download-iphone.png" alt="Imagen de movil con la pantalla de la app" class="main_section_image">

            <p>Do you feel like you're wasting time with small stuff instead of working towards your goals? Start using Sync to organize your time and get a grip on your personal development
            </p>
            <div class="button_ribbon_download_app">
                <a href="#"><img src="images/apple.png" alt="logo Apple">DOWNLOAD</a>
                <a href="#"><img src="images/playstore.png" alt="logo Google Play">DOWNLOAD</a>
            </div>           
        </section>   
        <img src="images/decorative-green-diamond.svg" alt="diamante verde decorativo" id="dec_green_diamond">
    <img src="images/decorative-blue-circle.svg" alt="circunferencia azul decorativa" id="dec_blue_circle">
    <img src="images/decorative-white-circle.svg" alt="circulo blanco grande decorativo" id="dec_white_circle">
    <img src="images/decorative-white-circle.svg" alt="circulo blanco grande decorativo" id="dec_white_circle_2">
    <img src="images/decorative-yellow-circle.svg" alt="circulo amarillo decorativo" id="dec_yellow_circle">

        
    </main>

    <footer>
        <section id="tab_extras">
            <article>
                <h6>Contact Info</h6>
                <ul>                        
                    <li>
                        <img src="images/location-dot-solid.svg" alt="Ubicacion"> 22 Innovation Street, CA, US
                    </li>
                    <li>
                        <img src="images/envelope-solid.svg" alt="Direccion de email"> office@syncmobile.com
                    </li>
                    <li>
                        <img src="images/phone-solid.svg" alt="Telefono"> +44 375 945 23
                    </li>
                </ul>
            </article>
            <article>
                <h6>Value Links</h6>
                    <ul>
                        <li>
                            Terms & Conditions
                        </li>
                        <li>
                            Privacy Policy
                        </li>
                        <li>
                            Article Details
                        </li>
                    </ul>
            </article>
            <article>
                <h6>Other Apps</h6>
                    <ul>
                        <li>
                            Scientific Calculator
                        </li>
                        <li>
                            Advanced Timer
                        </li>
                        <li>
                            Music Store
                        </li>
                    </ul>
            </article>
            <article id="social_networks">
                <a href="#"><img src="images/facebook.svg" alt="Facebook"></a>
                <a href="#"><img src="images/twitter.svg" alt="Facebook"></a>
                <a href="#"><img src="images/pinterest.svg" alt="Facebook"></a>
                <a href="#"><img src="images/instagram.svg" alt="Facebook"></a>
            </article>            
           
        </section>
        <h6>Copyright © 2020 Inovatik - All rights reserved</h6>
    </footer>
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

/*   desde aqui             */
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
/*     hasta aqui        */

.top-menu a:hover{
    color: #ff556e;
}

/* Main */
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

/* Correccion icono apple boton download */
.button-download:hover .button-download__icon {
    stroke: #ff556e;
}

.button-download {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}

.button-download__button p {
    margin: auto;
    margin-left: 5px;
}

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

/* Seccion organize */

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

/* section calendar */
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

.section-calendar__button {
    display: flex;
    width: 150px;
    height: 40px;
    border: none;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    padding: 0 5px;  
}

.section-calendar__button:hover {
    background-color: #9a67e7;
    color: #fff;
}

.section-calendar__button:hover svg {
    stroke: #fff;
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

.section-numbers__container {
    text-align: center;
    font-size: 16px;
    margin-left: 50px;
    margin-right: 50px;
}

.section-numbers__container img {
    width: 60px;
    height: 60px;
}

.section-numbers__container__number {
    font-size: 2rem;
    font-weight: 700;
    opacity: 0.8;
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
