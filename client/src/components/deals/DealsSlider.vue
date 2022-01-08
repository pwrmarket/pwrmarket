<template>
	<!-- Slide Holder -->
	<div class="slider-holder" >
		<VueTinySlider v-bind="options" class="slider">
			<div
				v-for="(d, i) in slides"
				:key="i"
				class="p-3 slide"
			>
				<BCard no-body border-variant="white" class="w-100 mb-4 border-0 shadow">
					<BCardBody class="img-container bg-secondary p-0 text-center">
						<BRow>
							<BCol cols="12" md="7" class="center-content" style="height: 340px;">
								<div class="">
									<h1 class="m-0 mx-2 text-center text-light" style="font-size: 3em;">
										{{ d.title }}
									</h1>
								</div>
							</BCol>

							<BCol cols="12" md="5" class="px-4 py-2 enter-content" style="height: 340px;">
								<img
									:src="d.img"
									v-lazy="d.img"
									alt="Image"
									class="w-100 deal-img"
									style="max-width: 300px;"
								/>
							</BCol>

							<BCol cols="12">
								<div class="bg-primary">
									<h1 class="m-0 text-center text-light" style="font-size: 4em;">
										{{ d.price }}
										<span class="font-weight-bold small" style="font-size: .5em;">
											{{ d.priceTag }}
										</span>
									</h1>
								</div>
							</BCol>
						</BRow>
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
					items: 2,
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