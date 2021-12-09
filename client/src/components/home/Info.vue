<template>
	<BContainer fluid class="m-0 p-0">
		<BRow class="w-100 m-0">
			<BCol cols="12" lg="3" class="p-0 center bg-secondary">
				<div class="text-center text-light">
					<h1 class="my-3 text-center text-uppercase">
						Follow Us
					</h1>

					<SocialMediaPlug size="4x" />
					<br><br>
				</div>
			</BCol>

			<BCol cols="12" lg="9" class="p-0 ">
				<div class="wrap bg-white">
					<div class="p-3 p-lg-5 m-auto rounded-lg content" style="max-width: 1000px;">
						<div class="p-3 p-lg-5 shadow bg-gradient">
							<h1 class="text-center text-uppercase text-light">
								Our Story
							</h1>
							
							<p
								v-html="
									companyInfo.aboutHTML.length > 400 ?
										companyInfo.aboutHTML.substring(0, 400 - 3) + '...' :
										companyInfo.aboutHTML
								"
								class="my-5 text-light"
							></p>

							<div class="text-center">
								<RouterLink to="/about">
									<BButton variant="outline-light" size="lg">Read More About Us</BButton>
								</RouterLink>
							</div>
						</div>
					</div>

					<!-- ARROW -->
					<div class="arrow"></div>
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
	@import '../../assets/styles/index.scss';

	.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.wrap {
		position: relative;
		overflow: hidden;
		margin: 0 auto;

		.content {
			width: 97%;
			height: auto;
			display: block;
		}


		@media (min-width: 992px) {
			.arrow {
				position: absolute;
				left: -3%;
				top: 0;
				width: 3%;
				height: 100%;
				background-color: $secondary;

				&:before {
					content: '';
					position: absolute;
					left: 100%;
					width: 100%;
					height:50%;
					background-color: inherit;

					bottom: 50%;
					-ms-transform-origin: 0 100%;
					-webkit-transform-origin: 0 100%;
					transform-origin: 0 100%;
					-ms-transform: skewY(-45deg);
					-webkit-transform: skewY(-45deg);
					transform: skewY(-45deg);
				}

				&:after {
					content: '';
					position: absolute;
					left: 100%;
					width: 100%;
					height: 50%;
					background-color: inherit;

					top: 50%;
					-ms-transform-origin: 0 0;
					-webkit-transform-origin: 0 0;
					transform-origin: 0 0;
					-ms-transform: skewY(45deg);
					-webkit-transform: skewY(45deg);
					transform: skewY(45deg);
				}
			}
		}
	}	
</style>