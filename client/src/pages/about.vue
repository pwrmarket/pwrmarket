<template>
	<BContainer class="py-5">
		<BRow>
			<BCol cols="12" md="6">
				<p v-html="defaultData.aboutHTML"></p>
			</BCol>

			<BCol cols="12" md="6">
				<img :src="image" class="w-100 rounded">
			</BCol>
		</BRow>
		<br><br><br>
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