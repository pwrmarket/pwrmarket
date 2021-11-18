<template>
	<div>
		<!--
		-->
		<BCarousel
			id="carousel-1"
			v-model="slide"
			:interval="3000"
			controls
			indicators
			fade
			background="#ababab"
			img-width="1024"
			img-height="680"
			@sliding-start="onSlideStart"
			@sliding-end="onSlideEnd"
			style="text-shadow: 1px 1px 2px #333;"
		>
			<!-- For loop for slideObj array -->
			<BCarouselSlide
				v-for="(slideObj, i) in slideObjs"
				:key="i"
				:caption="slideObj.caption"
				:text="slideObj.text"
				:img-src="slideObj.img"
				v-rellax
				data-rellax-xs-speed="0"
				data-rellax-mobile-speed="0"
				data-rellax-tablet-speed="0"
				:data-rellax-desktop-speed="rellaxNumber"
				class="h-100"
				:style="`max-height: ${maxHeight}px;`"
			>
				<!-- isHero -->
				<div v-if="showContent" class="h-100 my-auto py-2 rounded">
					<h1
						class="title d-none d-md-block font-weight-light text-white hero-text"
						style="font-size: 4em;"
					>
						{{ mainText }}
						<br><br>
					</h1>

					<h3
						class="
							title
							d-none
							d-sm-block
							d-md-none
							font-weight-light
							text-white
							hero-text
						"
					>
						{{ mainText }}
						<br><br>
					</h3>

					<h5 class="title d-block d-sm-none font-weight-light text-white">
						{{ mainText }}
					</h5>

					<RouterLink to="/book" class="text-decoration-none">
						<BButton
							variant="secondary"
							size="lg"
							class="d-none d-sm-block m-auto shadow"
						>Book Apointment</BButton>

						<BButton
							variant="secondary"
							size=""
							class="d-block d-sm-none m-auto shadow"
						>Book Apointment</BButton>
					</RouterLink>

					<div class="title d-none d-md-block font-weight-bold text-white">
						<br><br><br>
					</div>
				</div>
			</BCarouselSlide>
		</BCarousel>
	</div>
</template>

<script>
	export default {
		props: {
			showContent: {
				type: Boolean,
				default: false,
			},

			slideObjs: {
				type: Array,
				required: true,
			},

			maxHeight: {
				type: Number,
				default: 400,
			},

			rellaxNumber: {
				type: Number,
				default: 0,
			},

			mainText: {
				type: String,
				default: '',
			},
		},

		data() {
			return {
				slide: 0,
				sliding: null,
				currentSlid: null,
			}
		},
		methods: {
			onSlideStart(slide) {
				this.currentSlid = slide
				this.sliding = true
			},

			onSlideEnd(slide) {
				this.currentSlid = slide
				this.sliding = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');

	.hero-text {
		font-family: 'Caveat', cursive !important;
	}

	.content {
		background: rgba(0, 0, 0, 0.30);
	}
</style>