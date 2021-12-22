<template>
	<BRow class="m-0 p-0 w-100">
		<BCol cols="12" class="p-0 text-center">
			<a :href="companyInfo.app.apple.link" target="_blank">
				<img
					:src="appStoreImage"
					alt="Download From Apple App Store"
					class="w-100 mb-3"
					style="max-width: 130px;"
				>
			</a>
		</BCol>

		<BCol cols="12" class="p-0 text-center">
			<a :href="companyInfo.app.google.link" target="_blank">
				<img
					:src="googleStoreImage"
					alt="Download From Google App Store"
					class="w-100 mb-3"
					style="max-width: 130px;"
				>
			</a>
		</BCol>
	</BRow>
</template>

<script>
import companyInfo from '@/defaults/companyInfo'

export default {
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