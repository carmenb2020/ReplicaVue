<script setup>
    import PinkButton from '../components/PinkButton.vue';
    import SquareButton from '../components/SquareButton.vue'
</script>

<template>
    <section class="section-organize">
      <div class="section-organize__img">
        <img id="organize-image" src="src/assets/Images/description-1-app.png" alt="imagen fondo 1" />
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
        <PinkButton msg="lightbox" imageURI="src/assets/Images/googleplay.svg"
        classOption="alternativeNoImgPinkStyle"/>
      </div>
    </section>

    <section class="section-calendar">
      <div class="section-calendar__left">
        
          <div class="section-calendar__container">
            <SquareButton msg="Schedule" srcPath="src/assets/Images/schedule.svg"/>
            <SquareButton msg="Tracking" srcPath="src/assets/Images/tracking.svg"/>
            <SquareButton msg="Organize" srcPath="src/assets/Images/organize.svg"/>
          </div>

          <div>
            <p>
              <strong>Schedule tasks to keep</strong> to keep track of their
              completion. Sync provides multiple scheduling options including
              alarms and reminders
            </p>

            <div>

              <div class="section-calendar__checklist">
                <img class="check-icon" src="src/assets/Images/checkIcon.png" alt="icono check" />
                <p>
                  You can always add new tasks or change the settings of existing
                  ones in your calendar view or the app control panel
                </p>
              </div>

              <div class="section-calendar__checklist">
                <img class="check-icon" src="src/assets/Images/checkIcon.png" alt="icono check" />
                <p>
                  It's easy to stay focused on your most important daily activities
                  that get you closer to meeting your goals
                </p>
              </div>
              <div class="section-calendar__checklist">
                <img class="check-icon" src="src/assets/Images/checkIcon.png" alt="icono check" />
                <p>
                  Use phone reminders to free up your long term memory wich will
                  reduce stress and make you more productive
                </p>
              </div>
            </div>

            <div class="container-buttons__privacy">
              <PinkButton classOption="alternativeNoImgPinkStyle"/>
                <PinkButton classOption="alternativeStyle" msg="Privacy"/>
              
            </div>
          </div>
        </div>
        
        <img id="calendar-image" src="src/assets/Images/description-2-app.png" alt="imagen fondo 2" />
      </section>   
</template>

<style scoped>

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

#calendar-image {
    width: 497px;
    height: 586px;
    position: relative;
}
.check-icon {
    width: 22px;
    height: 22px;
}
.check-icon {
filter: invert(56%) sepia(95%) saturate(370%) hue-rotate(111deg)
    brightness(96%) contrast(93%);
}

.section-calendar__checklist{
    display: flex;
    align-items: center;
    margin-left: 10px;
}

.section-calendar__checklist p {
    margin-left: 10px;
}
.button-schedule {
    background-color: #9a67e7;
    color: #fff;
}

.button-schedule svg {
    stroke: #fff;
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
    display: flex;
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
</style>