<template>
	<BContainer fluid class="m-0 p-0">
		<BRow class="w-100 m-0">
			<BCol cols="12" lg="5" class="p-0 bg-primary">
				<div class="text-center text-light follow-us">
					<h1 class="my-3 text-center text-uppercase">
						Follow Us
					</h1>

					<SocialMediaPlug size="4x" />
					<br><br>
				</div>
			</BCol>

			<BCol cols="12" lg="7" class="p-4 p-lg-5">
				<div class="p-5 text-secondary bg-white rounded-lg">
					<h1 class="text-center text-uppercase text-primary">
						Our Story
					</h1>
					<p
						v-html="
							companyInfo.aboutHTML.length > 400 ?
								companyInfo.aboutHTML.substring(0, 400 - 3) + '...' :
								companyInfo.aboutHTML
						"
						class="my-5"
					></p>

					<div class="text-center">
						<RouterLink to="/about">
							<BButton size="lg">Read More About Us</BButton>
						</RouterLink>
					</div>
				</div>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	import companyInfo from '../../defaults/companyInfo'
	import SocialMediaPlug from '../SocialMediaPlug'

	export default {
		data() {
			return {
				companyInfo,
			}
		},

		components: {
			SocialMediaPlug,
		},
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/styles/override.scss';

	.follow-us {
		padding: 200px 0px;

		@media (min-width: 992px) {
			&::after {
				content: "";
				position: absolute;
				z-index: 1;
				top: 30%;
				right: -20px;
				width: 0;
				height: 0;
				border-top: 20px solid transparent;
				border-bottom: 20px solid transparent;
				border-left: 20px solid $primary;
			}
		}
	}
</style>