<template>
	<BContainer fluid class="m-0 p-0">
		<BRow class="w-100 m-0">
			<BCol cols="12" lg="5" class="p-0 bg-primary">
				<div class="text-center text-light">
					<h1 class="my-3 text-center text-uppercase">
						Follow Us
					</h1>

					<SocialMediaPlug size="4x" />
					<br><br>
				</div>
			</BCol>

			<BCol cols="12" lg="7" class="p-4 p-lg-5">
				<div class="wrap2">
					<img src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg" />

					<svg class="arrow" xmlns="http://www.w3.org/2000/svg" height="100%">
						<path d="M-1 -1 H10 V45 L5 50 L10 55 V101 H-1z" fill="red" fill-opacity="0.8" stroke-width="0"/>
					</svg>
				</div>

				<div class="p-5 text-secondary bg-white rounded-lg follow-us">
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
				left: -20px;
				width: 0;
				height: 0;
				border-top: 20px solid transparent;
				border-bottom: 20px solid transparent;
				border-right: 20px solid $light;
			}
		}
	}

	.wrap2 {
		position: relative;
		overflow: hidden;
		width: 70%;
		margin: 0 auto;
	}
	.wrap2 img {
		height: 200px;
		display: block;
	}
	.arrow {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
	}
	.wrap {background: yellow; width:400px; height:300px;}

	.wrap img {
		-webkit-clip-path: polygon(10% 0%, 90% 0%, 90% 100%, 90% 40%, 100% 50%, 90% 60%, 90% 100%, 10% 100%, 10% 60%, 0% 50%, 10% 40%);  
		clip-path: polygon(10% 0%, 90% 0%, 90% 100%, 90% 40%, 100% 50%, 90% 60%, 90% 100%, 10% 100%, 10% 60%, 0% 50%, 10% 40%);
	}
</style>