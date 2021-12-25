<template>
	<BRow class="w-100 m-0 p-0 content" style="height: ;">
		<BCol cols="12" md="4">
			<RouterLink to="/our-locations">
				<div class="w-100 rounded shadow-sm img-container rounded-xxl">
					<div class="child bg-one" :style="`background-image: url(${imgOne});`">
						<h5 style="max-width: 600px;">
							Find Us
						</h5>
					</div>
				</div>
			</RouterLink>
		</BCol>

		<BCol cols="12" md="4">
			<RouterLink to="/deals">
				<div class="w-100 rounded shadow-sm img-container rounded-xxl">
					<div class="child bg-two" :style="`background-image: url(${imgTwo});`">
						<h5 style="max-width: 600px;">
							Deals
						</h5>
					</div>
				</div>
			</RouterLink>
		</BCol>

		<BCol cols="12" md="4">
			<RouterLink to="/rewards">
				<div class="w-100 rounded shadow-sm img-container rounded-xxl">
					<div class="child bg-three" :style="`background-image: url(${imgThree});`">
						<h5 style="max-width: 600px;">
							Loyalty
						</h5>
					</div>
				</div>
			</RouterLink>
		</BCol>
	</BRow>
</template>

<script>
export default {
	data() {
		return {
			imgOne: require('../assets/images/small/find-us.jpg'),
			imgTwo: require('../assets/images/small/deal.jpg'),
			imgThree: require('../assets/images/small/loyalty.jpg'),
		}
	},
}
</script>

<style lang="scss" scoped>
	@import '../assets/styles/index.scss';

	// CONTENT //
	//.content {
		//-webkit-transform: translateY(-150px);
		//transform: translateY(-150px);
	//}

	.img-container {
		height: 300px;
		overflow: hidden;
		cursor: pointer;

		.bg-one {
			background-image: url('https://source.unsplash.com/600x400/?supermarket');
		}

		.bg-two {
			background-image: url('https://source.unsplash.com/600x400/?energy');
		}

		.bg-three {
			background-image: url('https://source.unsplash.com/600x400/?discount');
		}

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

			h5 {
				position: absolute;
				
				text-align: center;
				
				font-size: 3em !important;

				cursor: pointer;

				color: $light;

				@media (max-width: 500px) {
					font-size: 2em !important;
				}
			}

			&:before {
				content: "";
				display: block;
				height: 100%;
				width: 100%;
				top: 0;
				left: 0;
				background-color: $secondary-shine-light;
			}
		}


		&:hover {
			.child {
				-ms-transform: scale(1.2);
				-moz-transform: scale(1.2);
				-webkit-transform: scale(1.2);
				-o-transform: scale(1.2);
				transform: scale(1.2);

				// Show Text //
				span {
					color: $light;
				}

				&:before {
					background-color: $dark-shine;
				}
			}
		}
		
		&:focus {
			.child {
				-ms-transform: scale(1.2);
				-moz-transform: scale(1.2);
				-webkit-transform: scale(1.2);
				-o-transform: scale(1.2);
				transform: scale(1.2);

				span { display: block; }

				&:before {
					display: block;
				}
			}

		}

		@media (max-width: 768px) {
			height: 100px;
			margin-bottom: 30px;
		}
	}
</style>