<template>
	<BContainer fluid class="px-0">
		<section class="hero-section">
			<br><br><br><br>
			<h1 class="text-light">We'd Love For You to Stop By!</h1>
			<br>
			<br>

			<!-- WAVE 1 -->
			<div class="wave">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						class="shape-fill"
					></path>
				</svg>
			</div>
		</section>

		<section class="bg-white main-section">
			<BContainer>
				<BRow class="">
					<BCol cols="12" md="8" class="">
						<div
							class="m-auto hero-message-box-container"
							v-rellax
							data-rellax-speed="0"
							data-rellax-xs-speed="0"
							data-rellax-mobile-speed="0"
							data-rellax-tablet-speed="0"
							:data-rellax-desktop-speed="3"
						>
							<div class="p-5 bg-white rounded-lg shadow hero-message-box">
								<h3 class="text-center">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam libero illum commodi suscipit consequatur cumque sint possimus, fugit, consequuntur voluptas fugiat maiores quidem aliquam repellendus est quod assumenda enim? Repellendus!
								</h3>
							</div>
						</div>
					</BCol>

					<BCol cols="12" md="4">
						<img
							:src="serviceImg"
							class="w-100"
						>
					</BCol>
				</BRow>
			</BContainer>
		</section>
	</BContainer>
</template>

<script>
	export default {
		data() {
			return {
				serviceImg: require('../assets/images/service.jpeg')
			}
		},
		created() {
			this.$store.state.isHomePage = true

			this.loading = false			
		},

		destroyed() {
			this.$store.state.isHomePage = false
		},
	}
</script>

<style lang="scss" scoped>
	@import '../assets/styles/bootstrap-override.scss';

	section {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.hero-section {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 640px;
		padding: 100px 20vw;

		background: rgb(21,110,183);
		background:
			linear-gradient(
				0deg,
				rgba(21,110,183,1) 0%,
				rgba(93,187,70,1) 100%
			)
		;
	}

	// Wave Under Hero
	.wave {
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
			width: calc(150% + 1.3px);
			height: 302px;
		}

		.shape-fill {
			fill: white;
		}
	}

	// Main Section //
	.main-section {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 400px;
	}

	// Hero Box Message //
	.hero-message-box-container {
		max-width: 600px;

		.hero-message-box {
			-webkit-transform: translateY(-80px);
			transform: translateY(-80px);
		}
	}

</style>