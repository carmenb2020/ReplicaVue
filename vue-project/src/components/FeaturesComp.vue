<script setup>
  import PinkButton from './PinkButton.vue'

    defineProps({
        sectClass: {
            type: String,
            required: true
        }
    })
</script>

<template>
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
              <PinkButton classOption="alternativeNoImgPinkStyle"/>
                <PinkButton classOption="alternativeStyle" msg="Privacity"/>
              
            </div>
          </div>
        </div>
        
        <img id="calendar-image" src="./assets/Images/description-2-app.png" alt="imagen fondo 2" />
      </section>
</template>

<style scoped>

</style>