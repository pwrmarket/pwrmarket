<template>
	<div class="">
		<Hero />

		<BContainer fluid class="d-none d-md-block py-5 bg-white">
			<BContainer>
				<ImgLinks />
			</BContainer>
		</BContainer>

		<Loyalty />

		<Info />

		<h3 class="m-0 py-5 bg-light text-center">
			<span
				class="
					m-0 p-3 bg-primary-light text-light text-uppercase rounded-lg
				"
			>Our Affiliates</span>
		</h3>

		<Conveyor
			:images="conveyorImages"
			:totalOnLg="4"
			class="pb-5 bg-light"
		/>

		<Careers />

		<CurrentPrices />
	</div>
</template>

<script>
	import Conveyor from '../components/display/Conveyor.vue'
	import ImgLinks from '../components/ImgLinks.vue'
	import Hero from '../components/home/Hero'
	import Careers from '../components/home/Careers'
	import CurrentPrices from '../components/home/CurrentPrices'
	import Info from '../components/home/Info'
	import Loyalty from '../components/home/Loyalty'

	export default {
		data() {
			return {
				serviceImg: require('../assets/images/service.jpeg'),
				conveyorImages: [
					require('../assets/images/affiliates/1.png'),
					require('../assets/images/affiliates/2.png'),
					require('../assets/images/affiliates/3.png'),
					require('../assets/images/affiliates/4.png'),
					require('../assets/images/affiliates/5.png'),
					require('../assets/images/affiliates/6.png'),
				]
			}
		},

		components: {
			Conveyor,
			ImgLinks,
			Hero,
			Careers,
			CurrentPrices,
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