<template>
	<BRow class="py-5">
		<BCol cols="12" md="6">
			<h1 class="text-center font-weight-bold text-primary">
				About {{ companyInfo.companyShortName }}
			</h1>
			<h6 class="text-center text-muted">
				{{ companyInfo.companyCaption1 }}
			</h6>
			<br>

			<!-- HIDDEN -->
			<div
				class="d-block d-md-none w-100 mx-auto mb-5 p-4 bg-white shadow"
				style="max-width: 400px;"
			>
				<img
					:src="companyInfo.locationImage"
					class="w-100"
				>
			</div>

			<p
				v-html="companyInfo.aboutHTML"
				class="text-center mb-4 h5 text-dark"
				data-aos="fade-up"
			></p>

			

			<div class="text-center">
				<RouterLink to="/pml">
					<BButton size="lg" class="">Contact Us</BButton>
				</RouterLink>
			</div>
		</BCol>

		<!-- IMAGE -->
		<BCol cols="12" md="6">
			<div
				class="d-none d-md-block text-center mx-4 mb-4 p-4 bg-white shadow"
				style="max-width: 500px;"
				v-rellax
				data-rellax-xs-speed="0"
				data-rellax-mobile-speed="0"
				data-rellax-tablet-speed="0"
				data-rellax-desktop-speed="1"
			>
				<img
					:src="companyInfo.locationImage"
					class="w-100"
				>
			</div>
		</BCol>
	</BRow>
</template>

<script>
import companyInfo from '@/defaults/companyInfo'

export default {
	data() {
		return {
			companyInfo
		}
	},
}
</script>