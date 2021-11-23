<template>
	<div class="bg-secondary-dotted">
		<!-- HERO -->
		<Hero />

		<!-- DEALS -->
		<BContainer fluid class="bg-white">
			<BContainer class="bg-white main-section bg-primary">
				<!--  -->
				<BRow class="">
					<!-- DEALS CONTENT COLUMN -->
					<BCol cols="12" lg="5" class="">
						<div
							class="
								mx-auto
								mb-5
								hero-message-box
							"
						>
							<div class="px-5 py-4 bg-light-svg rounded-lg shadow hero-message-box-content">
								<BRow class="w-100 m-0 text-center text-secondary">
									<BCol cols="12" class="text-center">
										<h2 class="mb-4 text-secondary">
											Fuel Prices
										</h2>
									</BCol>
								</BRow>

								<BRow class="w-100 m-0 text-center text-secondary rounded bg-shade-light ">
									<BCol cols="6" md="6" class="py-2 border-bottom">
										<h2 class="m-0 text-primary">Regular</h2>
									</BCol>

									<BCol cols="6" md="6" class="py-2 border-bottom">
										<h2 class="m-0 text-success">2.753</h2>
									</BCol>

									<BCol cols="6" md="6" class="py-2 border-bottom">
										<h2 class="m-0 text-primary">Plus</h2>
									</BCol>

									<BCol cols="6" md="6" class="py-2 border-bottom">
										<h2 class="m-0 text-success">3.134</h2>
									</BCol>

									<BCol cols="6" md="6" class="py-2 border-bottom">
										<h2 class="m-0 text-primary">Super</h2>
									</BCol>

									<BCol cols="6" md="6" class="py-2 border-bottom">
										<h2 class="m-0 text-success">3.129</h2>
									</BCol>
								</BRow>
							</div>
						</div>
					</BCol>

					<!-- DEALS TEXT COLUMN -->
					<BCol cols="12" lg="7" class="text-center">
						<div
							class="
								mx-auto
								px-md-5
								hero-message-box
							"
						>
							<h1 class="my-0 text-secondary hero-message" style="font-size: 4em;">
								<span
									class="py-1 bg-secondary text-light"
								>Daily Deals</span>
								to Help You Save Money!
							</h1>
						</div>
					</BCol>
				</BRow>
			</BContainer>
		</BContainer>

		<ImgLinks />

		<Loyalty />

		<Info />
	</div>
</template>

<script>
	import ImgLinks from '../components/ImgLinks.vue'
	import Hero from '../components/home/Hero'
	import Info from '../components/home/Info'
	import Loyalty from '../components/home/Loyalty'

	export default {
		data() {
			return {
				serviceImg: require('../assets/images/service.jpeg')
			}
		},

		components: {
			ImgLinks,
			Hero,
			Info,
			Loyalty,
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
	// Main Section //
	.main-section {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	// Hero Box Message //
	.hero-message-box {
		max-width: 100%;

		.hero-message-box-content {
			-webkit-transform: translateY(-70px);
			transform: translateY(-70px);
		}

		.hero-message {
			-webkit-transform: translateY(-70px);
			transform: translateY(-70px);
		}
	}
</style>