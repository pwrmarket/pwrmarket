<template>
	<BContainer fluid class="m-0 p-0">
		<BRow class="w-100 m-0">
			<BCol cols="12" lg="6" class="py-5 title-col bg-light">
				<h1
					class="my-5 text-center text-primary"
					style="font-size: 3em; max-width: 600px;"
				>Learn About Our Reward System</h1>
			</BCol>

			<BCol cols="12" lg="6" class="p-0 bg-light">
				<div class="img-container w-100">
					<div class="child bg-one">
						<span class="" style="max-width: 600px;">
							Save More With Rewards
						</span>
					</div>
				</div>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	import companyInfo from '../../defaults/companyInfo'

	export default {
		data() {
			return {
				companyInfo,
			}
		},

		components: {
		},
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/styles/override.scss';

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

				cursor: pointer;

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
					color: $secondary;
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
	}
	
	.bg-one {
		background-image: url('https://source.unsplash.com/1920x800/?deals');
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
				border-left: 20px solid $light;
			}
		}
	}
</style>