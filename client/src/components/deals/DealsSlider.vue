<template>
	<!-- Slide Holder -->
	<div class="slider-holder" >
		<VueTinySlider v-bind="options" class="slider">
			<div
				v-for="(slide, i) in slides"
				:key="i"
				class="p-3 slide"
			>
				<BCard no-body border-variant="white" class="w-100 mb-4 border-0 shadow">
					<BCardBody class="img-container bg-secondary p-0 text-center">
						<img
							:src="slide.img"
							v-lazy="slide.img"
							alt="Image"
							class="w-100 deal-img"
						/>
					</BCardBody>
				</BCard>
			</div>
		</VueTinySlider>
	</div>
</template>

<script>
	// [PERSONAL] //
	import VueTinySlider from 'vue-tiny-slider'

	export default {
		props: {
			slides: {
				type: Array,
				required: true,
			},
		},

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
					items: 3,
					autoplayTimeout: 2500,
					speed: 1000,
					"edgePadding": 50,
					"autoHeight": true,
				},
			}
		},

		components: {
			VueTinySlider,
		},

		created() {
			if (this.$store.state.window.innerWidth < 1250) {
				this.options.edgePadding = 0
			}

			if (this.$store.state.window.innerWidth < 1000) {
				this.options.items = 1
				this.options.edgePadding = 0
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/styles/variables.scss';

	.title {
		font-size: 3em !important;

		@media (max-width: 1200px) {
			font-size: 2em !important;
		}

		@media (max-width: 900px) {
			font-size: 2em !important;
		}

		@media (max-width: 500px) {
			font-size: 2em !important;
		}
	}

	.slider-holder {
		position: relative;
		text-align: center;

		.slider {
			> .slide {
				max-height: 100vh;
				overflow: hidden;
			}
		}

		.slide-content {
			position: relative;
			text-align: center;
		}
	}

</style>