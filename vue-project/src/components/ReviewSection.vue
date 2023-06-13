<script setup>

import { ref } from 'vue';

defineProps(
	{
		optionA: {
			type: Boolean,
			default: false,
		},
		optionB: {
			type: Boolean,
			default: false,
		}
	}
);

const	reviewsA = ref([
	{ id: 0, text: 'I love using Sync for my personal development needs. It meets all my\
	 	requirements and it actually helps a lot with focusing skills.', name: 'Rick Jones - Designer' },
	{ id: 1, text: 'After trying out a large number of personal coaching apps I decided\
          to give Sync a try and what a wonderful surprise it was.', name: 'Lynda Marquez - Developer' },
	{ id: 2, text: 'Never dreamed I could learn so fast how to focus on my personal\
          goals and improve my life to levels I never thought possible.', name: 'Jay Frisco - Marketer' }
])

const	reviewsB = ref([
	{ id: 0, text: 'I got so much value from using Sync in my daily life for wich I am\
          very grateful and would recommend it to everybody', name: 'Frank Gibson - Manager' },
	{ id: 1, text: 'If you have great goals but can\'t figure out a way to keep focused\
          then you should definitely give Sync a try and see the results', name: 'Rita Longmile - Designer' },
	{ id: 2, text: 'I\'ve been looking for a great organizer app for such a long time but\
          now I am really happy that I found Sync. It\'s been working great', name: 'Jones Smith - Developer' }
])

//const	customerLogos = ref(`./assets/Images/customer-logo-${imgs}.png`)

</script>

<template>
	<h2 class="review-heading" v-if="optionA">User Testimonials</h2>
	<section class="review-section" v-if="optionA">
		<div class="user-review-div" v-for="review in reviewsA" :key="review.id">
			<img class="user-review-img" src="../assets/Images/iconoEstrellasFix.png" alt="review icon" />
			<p class="user-review">{{ review.text }}</p>
			<p class="user-name"><strong>{{ review.name }}</strong></p>
    	</div>
	</section>
	<section class="review-section" v-if="optionB">
		<div class="user-review-div" v-for="review in reviewsB" :key="review.id">
			<img class="user-review-img" src="../assets/Images/iconoEstrellasFix.png" alt="review icon" />
			<p class="user-review">{{ review.text }}</p>
			<p class="user-name"><strong>{{ review.name }}</strong></p>
    	</div>
	</section>
</template>

<style scoped>
.review-section {
	display: flex;
  }

.review-heading {
	font-size: 2.75rem;
    margin: auto auto;
    padding-top: 20px;
	text-align: center;
}
.user-review-div {
	width: 33%;
	display: flex;
    flex-direction: column;
    align-items: center;
	margin: 0 auto;
	padding-top: 50px;
}
.user-review-img {
    width: 150px;
}

.user-review {
	text-align: center;
	margin: 0 auto;
    opacity: 0.7;
    padding: 20px;
}

</style>