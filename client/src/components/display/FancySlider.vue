<template>
	<!-- Slide Holder -->
	<div class="slider-holder" >
		<VueTinySlider v-bind="options" class="slider">
			<div v-for="(s, i) in slides" :key="i" class="slide">
				<!-- Slide Content -->
				<div class="slide-content">
					<img
						:src="s.img"
						class="w-100"
						v-rellax
						data-rellax-speed="0"
						data-rellax-xs-speed="0"
						data-rellax-mobile-speed="0"
						data-rellax-tablet-speed="0"
						:data-rellax-desktop-speed="
							$store.state.window.innerWidth >= 1367 ? -9 : -3
						"
					>
				</div>
			</div>
		</VueTinySlider>

		<!-- [CENTER] OF SLIDER -->
		<div class="d-none d-sm-block slider-center" style="max-width: 750px;">
			<BRow class="w-100 mx-auto p-3 bg-light rounded shadow">
				<BCol cols="12">
					<h1
						class="
							d-lg-block
							d-none
							mb-3
							title
							font-weight-light
							text-gradient
						"
						style="font-size: 3em;"
					>{{ mainText }}</h1>

					<h1
						class="
							d-lg-none
							d-md-block
							d-none
							mb-0
							title
							font-weight-light
							text-gradient
						"
						style="font-size: 2.3em;"
					>Power Market</h1>

					<h3
						class="
							d-none
							d-md-none
							d-sm-block
							mb-0
							title
							font-weight-light
							text-gradient
						"
					>Power Market</h3>
				</BCol>

				<BCol cols="12" md="6" class="d-none d-lg-block">
					<div class="text-center mb-3">
						<RouterLink to="/deals">
							<BButton variant="secondary" class="w-100">
								Current Deals
							</BButton>
						</RouterLink>
					</div>
				</BCol>

				<BCol cols="12" md="6" class="d-none d-lg-block">
					<div class="text-center">
						<RouterLink to="/our-locations">
							<BButton variant="primary" class="w-100">
								Find a Location
							</BButton>
						</RouterLink>
					</div>
				</BCol>
			</BRow>
		</div>

		<div class="wave">
			<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
				<path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill-0"></path>
				<path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill-1"></path>
				<path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill-2"></path>
			</svg>
		</div>
	</div>
</template>

<script>
	// [PERSONAL] //
	import VueTinySlider from 'vue-tiny-slider'

	// [IMPORT] Personal //
	import companyInfo from '../../defaults/companyInfo'

	export default {
		props: {
			showContent: {
				type: Boolean,
				default: false,
			},

			slides: {
				type: Array,
				required: true,
			},
		},

		data() {
			return {
				companyInfo: companyInfo,

				mainText: 'Everything You Need Right Around the Corner!',

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
			}
		},

		components: {
			VueTinySlider,
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
			font-size: 1em !important;
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

		.slide-center {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		.slide-text {
			font-size: 1em;
			border-width: 1px !important;
			box-shadow: 1px 1px red;
			text-shadow: 1px 1px red;

			@media (min-width: 768px) {
				font-size: 2em;
				border-width: 2px !important;
			}

			@media (min-width: 992px) {
				font-size: 3em;
				border-width: 4px !important;
			}

			@media (min-width: 1200px) {
				font-size: 4em;
				border-width: 6px !important;
			}

			@media (min-width: 1400px) {
				font-size: 5em;
				border-width: 6px !important;
			}
		}

		.center-float {
			// Only Move images on screen abouve 800px //
			@media (min-width: 800px) {
				-webkit-animation: mover 1.5s infinite  alternate;
				animation: mover 1.5s infinite  alternate;
			}
		}

		.google-maps-btn-text {
			font-size: 2.5vw;
		}

		@-webkit-keyframes mover {
			0% { transform: translateY(0); }
			100% { transform: translateY(-30px); }
		}
		@keyframes mover {
			0% { transform: translateY(0); }
			100% { transform: translateY(-30px); }
		}

		// [CENTER] //
		.slider-center {
			position: absolute;
			top: 50%;
			left: 50%;
			justify-content: center;
			align-items: center;
			transform: translate(-50%, -50%);
		}

		// [WAVE] //
		.wave {
			z-index: 1000;
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			overflow: hidden;
			line-height: 0;
			transform: rotate(180deg);

			svg {
				position: relative;
				display: block;
				width: calc(152% + 1.3px);
				height: 100px;

				@media (max-width: 600px) {
					height: 40px;
				}
			}

			.shape-fill-0 {
				fill: $primary;
			}

			.shape-fill-1 {
				fill: $secondary;
			}

			.shape-fill-2 {
				fill: rgb(255, 255, 255);
			}
		}
	}

</style>