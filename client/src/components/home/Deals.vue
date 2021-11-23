<template>
	<BContainer fluid class="m-0 p-0">
		<BRow class="w-100 m-0">
			<BCol cols="12" lg="5" class="p-0 bg-primary">
				<div class="text-center text-light follow-us">
					<h1 class="my-3 text-center text-uppercase">
						Follow Us
					</h1>

					<SocialMediaPlug size="4x" />
				</div>
			</BCol>

			<BCol cols="12" lg="7" class="p-0 bg-light">
				<div class="text-center text-light">
				</div>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	import SocialMediaPlug from '../SocialMediaPlug.vue'

	export default {
		components: {
			SocialMediaPlug
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