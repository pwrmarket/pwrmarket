<template>
	<BRow class="w-100 m-0">
		<BCol cols="12" v-if="small" class="">
			<h3 class="mb-3 text-center text-light">
				Download Our App
			</h3>
		</BCol>

		<BCol cols="12" lg="7" class="p-0 text-center">
			<h1 v-if="!small" class="mb-4 mb-xl-5 text-center text-light">
				Download Our App
			</h1>

			<a :href="companyInfo.app.apple.link" target="_blank">
				<img
					:src="appStoreImage"
					alt="Download From Apple App Store"
					class="w-100 mb-4"
					style="max-width: 280px;"
				>
			</a>

			<a :href="companyInfo.app.google.link" target="_blank">
				<img
					:src="googleStoreImage"
					alt="Download From Google App Store"
					class="w-100 mb-4"
					style="max-width: 280px;"
				>
			</a>
		</BCol>

		<BCol cols="12" lg="5" class="d-none d-lg-block text-left">
			<img
				:src="loyaltyImage"
				alt="Power Market Rewards App Image Here"
				class="w-100"
				style="max-width: 200px;"
				data-aos="fade-up"
			>
		</BCol>
	</BRow>
</template>

<script>
import companyInfo from '@/defaults/companyInfo'

export default {
	props: {
		small: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			companyInfo,
			loyaltyImage: require('../assets/images/app.png'),
			googleStoreImage: require('../assets/images/google-store.png'),
			appStoreImage: require('../assets/images/app-store.png'),
		}
	},
}
</script>