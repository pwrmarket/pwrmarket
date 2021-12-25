<template>
	<BContainer fluid class="m-0 p-0">
		<BRow class="w-100 m-0">
			<BCol cols="12" lg="4" order="1" order-lg="0" class="p-0 bg-secondary-light">
				<div class="first-section">
					<div class="child" :style="`background-image: url(${ourStoryImage});`">
						<span>
							<h2 class="my-3 text-center text-uppercase text-light">
								See Our Ongoing Story
							</h2>

							<SocialMediaPlug size="4x" class="" />
						</span>
					</div>
				</div>
			</BCol>

			<BCol cols="12" lg="8" order="0" order-lg="1" class="p-0 ">
				<div class="second-section">
					<div class="child">
						<span
							class="p-3 p-lg-4 border border-light"
							style="max-width: 1000px; border-width: 2px !important; border-radius: 20px !important"
						>
							<h2 class="text-center text-uppercase text-light">
								Our Story
							</h2>
							
							<p
								v-html="
									companyInfo.aboutHTML.length > 400 ?
										companyInfo.aboutHTML.substring(0, 400 - 3) + '...' :
										companyInfo.aboutHTML
								"
								class="h5 my-3 text-center text-light"
							>
							</p>

							<div class="mx-auto">
								<RouterLink to="/about">
									<BButton
										variant="outline-light"
										size="lg"
										pill
										style="border-width: 2px !important;"
									>Read More About Us</BButton>
								</RouterLink>
							</div>
						</span>
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
				ourStoryImage: require('../../assets/images/small/our-story.jpg')
			}
		},

		components: {
			SocialMediaPlug,
		},
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/styles/index.scss';

	.first-section {
		height: 500px;
		overflow: hidden;

		.child {
			display: flex;
			justify-content: center;
			align-items: center;

			height: 100%;
			width: 100%;

			background-image: url('https://source.unsplash.com/1920x500/?points');
			background-size: cover;
			background-repeat: repeat;

			-webkit-transition: all .5s;
			-moz-transition: all .5s;
			-o-transition: all .5s;
			transition: all .5s;

			span {
				position: absolute;
				text-align: center;
			}

			&:before {
				display: block;
				height: 100%;
				width: 100%;
				position: absolute;
				
				top: 0;
				left: 0;

				content: "";
				
				background-color: $secondary-shine;
				backdrop-filter: blur(4px) !important;
			}
		}
	}

	.second-section {
		height: 500px;
		overflow: hidden;

		.child {
			display: flex;
			justify-content: center;
			align-items: center;

			height: 100%;
			width: 100%;

			background-image: url('https://images2.imgbox.com/44/d5/3xl6owee_o.jpg');
			background-size: cover;
			background-repeat: repeat;

			-webkit-transition: all .5s;
			-moz-transition: all .5s;
			-o-transition: all .5s;
			transition: all .5s;

			span {
				position: absolute;
				text-align: center;
			}

			&:before {
				display: block;
				height: 100%;
				width: 100%;
				position: absolute;
				
				top: 0;
				left: 0;

				content: "";
				
				background-color: $primary-shine;
				backdrop-filter: blur(4px) !important;
			}
		}
	}
</style>