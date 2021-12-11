<template>
	<BContainer class="py-5">
		<BCard no-body bg-variant="white" class="mb-6 shadow">
			<BCardHeader class="bg-gradient">
				<h1 class="my-3 text-center text-light">About Power Market</h1>
			</BCardHeader>

			<BCardBody>
				<BRow>
					<BCol cols="12" md="7">
						<p v-html="defaultData.aboutHTML"></p>
					</BCol>

					<BCol cols="12" md="5">
						<img :src="image" class="w-100 rounded">
					</BCol>
				</BRow>
			</BCardBody>
		</BCard>
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