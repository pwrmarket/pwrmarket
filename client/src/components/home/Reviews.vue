<template>
	<div class="testimonials">
		<BContainer class="py-1">
			<div class="text-center">
				<h1 class="title-1">
					Customer
					<span
						class="text-primary"
						style="font-family: 'Dancing Script', cursive !important;"
					>Reviews</span>
				</h1>
				<h5 class="mb-5 text-info">What they say</h5>
				<div class="space-30"></div>
			</div>

			<VueTinySlider v-bind="options" class="slider">
				<div
					v-for="(r, i) in reviews" :key="i"
					class="testimonials-slider text-center"
				>
					<ul class="slides list-unstyled">
						<li class="clone">
							<p>{{ r.quote }}</p>
							<div class="testimonials-info">
								<img
									:src="r.img"
									width="50"
									class="rounded-circle"
									draggable="false"
								>
								<h4>
									{{ r.name }}
									<small>Dino's Customer</small>
								</h4>
								<i class="ion-star">★</i>
								<i class="ion-star">★</i>
								<i class="ion-star">★</i>
								<i class="ion-star">★</i>
								<i class="ion-star">★</i>
							</div>
						</li>
					</ul>
				</div>
			</VueTinySlider>
		</BContainer>
	</div>
</template>

<script>
	import VueTinySlider from 'vue-tiny-slider'

	export default {
		data() {
			return {
				options: {
					mouseDrag: true,
					loop: true,
					controls: false,
					swipeAngle: false,
					nav: false,
					autoplay: true,
					autoplayButtonOutput: false,
					items: 1,
					autoplayTimeout: 5000,
					speed: 1000,
				},

				reviews: [
					{
						name: 'Vanessa C.',
						img: require('../../assets/images/avtar-1.jpg'),
						quote: 'Love this place! Great atmosphere and delicious food.',
					},
					{
						name: 'Lisa D.',
						img: require('../../assets/images/avtar-2.png'),
						quote: 'Great food and beer selection.  The chef came out and recommended the ravioli.  They were excellent.'
					},
					{
						name: 'Beatriz M.',
						img: require('../../assets/images/avtar-3.png'),
						quote: 'Great place. Service was most accommodating and the food was delicious.',
					},
				],
			}
		},
		components: {
			VueTinySlider,
		},
	}
</script>

<style lang="scss" scoped>
	@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

	/*testimonial slider*/
	.testimonials {
		padding-top: 70px;
		padding-bottom: 70px;
		position: relative;
		background-color: #dfd6cd;
	}

	.testimonials-slider {
		position: relative;
		padding-bottom: 30px;
	}

	.testimonials-slider p {
		font-size: 22px;
		font-weight: 300;
		font-style: italic;
		line-height: 32px;
		opacity: 1;
		color: #777;
	}

	.testimonials-slider .testimonials-info {
		padding-top: 20px;
	}

	.testimonials-slider .testimonials-info img {
		margin-bottom: 10px;
	}

	.testimonials-slider .testimonials-info h4 {
		margin-bottom: 3px;
		font-family: "Poppins", sans-serif;
		font-weight: 500;
		color: #c0996b;
	}

	.testimonials-slider .testimonials-info h4 small {
		font-family: "Lato", sans-serif;
		color: #777;
	}

	.testimonials-slider .testimonials-info i {
		color: #c0996b;
	}

	.testimonials-slider .flex-control-nav {
		bottom: -20px;
		text-align: center;
	}

	.testimonials-slider .flex-control-paging li a {
		background: transparent;
		border: 2px solid #fff;
	}

	.testimonials-slider .flex-control-paging li a.flex-active {
		background-color: #fff;
		border-color: #c0996b;
		-webkit-box-shadow: none;
		-moz-box-shadow: none;
		-ms-box-shadow: none;
		box-shadow: none;
	}

	@media (max-width: 991px) {
		.main-slider h1 {
			font-size: 4rem;
		}
	}
</style>