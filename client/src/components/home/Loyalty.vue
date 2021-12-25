<template>
	<BContainer fluid class="m-0 p-0">
		<BRow class="w-100 m-0 bg-light" >
			<BCol cols="12" lg="6" class=" py-5 bg-primary-light">
				<div class="h-100 title-col">
					<DownloadOurApp />
				</div>
			</BCol>

			<BCol cols="12" lg="6" class="p-0 bg-light">
				<div class="img-container w-100" >
					<div class="child" :style="`background-image: url(${bgImage});`">
						<span data-aos="fade-up" class="p-3 bg-light-frost-lighter rounded-xxl" style="max-width: 600px;">
							<h5 class="mb-3 text-light" style="font-size: 3em !important;">
								Save More With Power Market Loyalty
							</h5>

							<RouterLink to="/loyalty">
								<BButton variant="primary" pill size="lg" style="border-width: 2px;">
									<p class="m-0 h3">Learn More</p>
								</BButton>
							</RouterLink>
						</span>
					</div>
				</div>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	import DownloadOurApp from '../../components/DownloadOurApp.vue'
	import companyInfo from '../../defaults/companyInfo'

	export default {
		data() {
			return {
				companyInfo,
				loyaltyImage: require('../../assets/images/app.png'),
				googleStoreImage: require('../../assets/images/google-store.png'),
				appStoreImage: require('../../assets/images/app-store.png'),

				bgImage: require('../../assets/images/small/loyalty2.jpg')
			}
		},

		components: {
			DownloadOurApp,
		},
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/styles/index.scss';

	.title-col {
		display: flex;
		justify-content: center;
		align-items: center;

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
				border-left: 20px solid $primary-light;
			}
		}
	}

	.img-container {
		height: 500px;
		overflow: hidden;

		.child {
			background-image: url('https://source.unsplash.com/1920x800/?points');

			height: 100%;
			width: 100%;
			background-size: cover;
			background-repeat: no-repeat;
			-webkit-transition: all .5s;
			-moz-transition: all .5s;
			-o-transition: all .5s;
			transition: all .5s;

			display: flex;
			justify-content: center;
			align-items: center;

			span {
				position: absolute;
				text-align: center;
			}

			&:before {
				content: "";
				display: block;
				height: 100%;
				width: 100%;
				position: absolute;
				top: 0;
				left: 0;
				background-color: $secondary-shine;
				backdrop-filter: blur(4px) !important;
			}
		}
	}
</style>