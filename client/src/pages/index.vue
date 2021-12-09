<template>
	<div class="">
		<Hero />

		<BContainer fluid class="py-5 bg-white">
			<BContainer>
				<ImgLinks />
			</BContainer>
		</BContainer>

		<Conveyor
			:images="conveyorImages"
			:totalOnLg="4"
			class="pb-5 bg-white"
		/>

		<Loyalty />

		<Info />

		
		
		<CurrentPrices />
	</div>
</template>

<script>
	import Conveyor from '../components/display/Conveyor.vue'
	import ImgLinks from '../components/ImgLinks.vue'
	import Hero from '../components/home/Hero'
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