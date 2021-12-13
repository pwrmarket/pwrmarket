<template>
	<BContainer fluid class="mb-6 p-0 pb-5">
		<div class="py-5 bg-gradient">
			<h2 class="m-0 text-center text-light" data-aos="fade">
				Deals
			</h2>
		</div>

		<BContainer class="py-5">
			<BRow>
				
			</BRow>
		</BContainer>
	</BContainer>
</template>

<script>
import defaultData from '../defaults/companyInfo'

export default {
	data() {
		return {
			defaultData: defaultData,
			image: require('../assets/images/about.jpg')
		}
	},
}
</script>