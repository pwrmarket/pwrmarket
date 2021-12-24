<template>
	<BContainer fluid class="m-0 p-0">
		<BRow class="w-100 m-0">
			<BCol cols="12" lg="6" class="d-none d-lg-block py-5 bg-gradient-weak">
				<div class="h-100 title-col">
					<h1
						class="text-center text-light"
						style="font-size: 3em; max-width: 600px;"
					>
						<span class="p-3 bg-frost-lightest shadow">
							Looking for a Career?
						</span>
					</h1>
				</div>
			</BCol>

			<BCol cols="12" lg="6" class="p-0 bg-light">
				<div class="img-container w-100">
					<div class="child bg-one">
						<span class="" style="max-width: 600px;">
							<h3
								class="text-center text-light"
							>Start your Journey With Us!</h3>

							<a href="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=fe247937-30ea-42e9-897c-7e49746c78f8&ccId=9200028200615_2&lang=en_US" target="_blank">
								<BButton variant="outline-light" size="lg" style="border-width: 2px;">
									<p class="m-0 h2">Apply Now</p>
								</BButton>
							</a>
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
				backdrop-filter: blur(4px) !important;
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
		background-image: url('https://source.unsplash.com/1920x800/?career');
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
				border-left: 20px solid $primary;
			}
		}
	}
</style>