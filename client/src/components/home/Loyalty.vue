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
					<div class="child bg-one">
						<span class="" style="max-width: 600px;">
							Save More With Power Market Loyalty
							<br>

							<RouterLink to="/loyalty">
								<BButton variant="light" size="lg">
									Learn More
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
			}
		},

		components: {
			DownloadOurApp,
		},
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/styles/index.scss';

	.img-container {
		height: 500px;
		overflow: hidden;
		cursor: pointer;

		.child {
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
				font-size: 3em !important;
				color: $light;
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
				backdrop-filter: blur(6px) !important;
			}
		}


		&:hover {
			.child {
				-ms-transform: scale(1);
				-moz-transform: scale(1);
				-webkit-transform: scale(1);
				-o-transform: scale(1);
				transform: scale(1);

				// Show Text //
				span {
					color: $light;
				}
			}
		}
		
		&:focus {
			.child {
				-ms-transform: scale(1);
				-moz-transform: scale(1);
				-webkit-transform: scale(1);
				-o-transform: scale(1);
				transform: scale(1);

				span { display: block; }

				&:before {
					display: block;
				}
			}

		}
	}
	
	.bg-one {
		background-image: url('https://source.unsplash.com/1920x800/?points');
	}

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
</style>