<template>
	<div class="bg-secondary-dotted">
		<Hero />

		<BContainer fluid class="py-5 bg-white">
			<BContainer>
				<ImgLinks />
			</BContainer>
		</BContainer>

		<Loyalty />

		<Info />
		
		<CurrentPrices />
		<br><br><br><br>
	</div>
</template>

<script>
	import ImgLinks from '../components/ImgLinks.vue'
	import Hero from '../components/home/Hero'
	import CurrentPrices from '../components/home/CurrentPrices'
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