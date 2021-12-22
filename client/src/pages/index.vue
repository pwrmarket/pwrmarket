<template>
	<div class="">
		<!-- Caraousel -->
		<FancySlider
			:showContent="true"
			:mainText="'Everything You Need Right Around the Corner!'"
			:slideObjs="caraousel"
			:maxHeight="700"
			:rellaxNumber="1"
			class=""
			data-aos="fade"
		/>

		<BContainer fluid class="py-5 bg-white">
			<BContainer class="">
				<ImgLinks />
			</BContainer>
		</BContainer>

		<Loyalty />

		<Info />

		<div class="py-5 bg-light">
			<h2 class="m-0 py-2 mx-auto text-center text-light bg-primary-light rounded-lg"
				style="max-width: 300px;"
			>Our Affiliates</h2>
		</div>

		<Conveyor
			:images="conveyorImages"
			:totalOnLg="3"
			class="pb-5 bg-light"
		/>

		<Careers />

		<CurrentPrices v-if="0 == 1" />

		<div class="bg-primary-lighter" style="min-height: 0px;">
		</div>
	</div>
</template>

<script>
	import Conveyor from '../components/display/Conveyor'
	import FancySlider from '../components/display/FancySlider.vue'
	import ImgLinks from '../components/ImgLinks.vue'
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
				],

				caraousel: [
					{
						caption: '',
						text: '',
						img: require('../assets/images/slider/slide0.jpg'),
					},
					{
						caption:'',
						text: '',
						img: require('../assets/images/slider/slide1.jpg'),
					},
					{
						caption: '',
						text: '',
						img: require('../assets/images/slider/slide2.jpg'),
					},
					{
						caption: '',
						text: '',
						img: require('../assets/images/slider/slide3.jpg'),
					},
				],
			}
		},

		components: {
			FancySlider,
			Conveyor,
			ImgLinks,
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