<template>
	<BContainer fluid class="m-0 p-0 pb-5 bg-white">
		<TitleHeader
			:imageURL="require('../assets/images/slider/slide1.jpg')"
			:text="`Everyday Deals!`"
		/>

		<!-- Caraousel -->
		<BContainer fluid class="p-0 offset-content">
			<DealsSlider
				:slides="caraousel"
				:maxHeight="700"
				data-aos="fade"
				class=""
			/>
		</BContainer>

		<RegularDeals
			:deals="deals.main"
		/>

		<third-section
			:deals="deals.sub"
		/>

		<RegularDeals
			:deals="deals.subSub"
		/>
	</BContainer>
</template>

<script>
	import DealsSlider from '@/components/deals/DealsSlider.vue'
	import RegularDeals from '@/components/deals/RegularDeals.vue'
	import ThirdSection from '../components/deals/ThirdSection.vue'
	import TitleHeader from '@/components/UI/TitleHeader'
	import deals from '@/defaults/deals'

	export default {
		data() {
			return {
				caraousel: deals.featured,

				deals: deals,
			}
		},

		components: {
			TitleHeader,
			DealsSlider,
			RegularDeals,
			ThirdSection,
		},
	}
</script>