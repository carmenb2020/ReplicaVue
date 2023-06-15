<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import LiNav from './components/LiNav.vue'
  import LiAButton from './components/LiAButton.vue'
  import LiFooter from './components/LiFooter.vue'
  import LiImg from './components/LiImg.vue'
</script>

<template>
 
  <header>
    <div>
		<RouterLink to="/"><img id="top-icon" src="./assets/Images/logo.svg" alt="top left icon" /></RouterLink>
    </div>
    <div>
      <nav>
        <ul class="top-menu">
          <RouterLink to="/"><LiNav msg="Description"/></RouterLink>
          <RouterLink to="features"><LiNav msg="Features"/></RouterLink>
          <RouterLink to="review"><LiNav msg="Reviews"/></RouterLink>
          <RouterLink to="screens"><LiNav msg="Screens"/></RouterLink>
          <li class="dropdown">
            <a href="#">Extra</a>
            <div class="dropdown-content">
              <a href="#">Article Details</a>
              <a href="#">Terms Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </li>
          <RouterLink to="login"><LiAButton classButton="button-download__top" msg1="Login" /></RouterLink>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
    <section class="section-footer">
      <div class="footer-div">
        <ul>
          <h5>Contact Info</h5>
          <LiFooter viewBoxp="0 0 384 512" pathd="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" msg="22 Innovation Street, CA, US"/>
          <LiFooter viewBoxp="0 0 512 512" pathd="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" msg="office@syncmobile.com"/>
          <LiFooter viewBoxp="0 0 512 512" pathd="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" msg="+44 376 945 23"/>
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
            <LiImg classP="footer-icon" srcPath="./src/assets/Images/facebook.svg" altP="Logo Facebook"/>
            <LiImg classP="footer-icon" srcPath="./src/assets/Images/twitter.svg" altP="Logo Twitter"/> 
            <LiImg classP="footer-icon" srcPath="./src/assets/Images/pinterest.svg" altP="Logo Pinterest"/>
            <LiImg classP="footer-icon" srcPath="./src/assets/Images/instagram.svg" altP="Logo Instagram"/>
          </ul>
        </div>
      </div>
    </section>
    <div class="copyright">
      <p>Copyright &copy; 2020 Inovatik - All rights reserved</p>
    </div>
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

h1 {
    text-align: center;
    font-size: 64px;
    opacity: 0.8;
}

#phone-image-bottom {
    width: 968px;
    height: 580px;
    padding-top: 100px;
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
