<template>
	<BRow class="w-100 m-0 p-0 content" style="height: 200px;">
		<BCol md="4">
			<div class="w-100 rounded shadow img-container">
				<div class="child bg-one">
					<span style="max-width: 600px;">
						Shop
					</span>
				</div>
			</div>
		</BCol>

		<BCol md="4">
			<div class="w-100 rounded shadow img-container">
				<div class="child bg-two">
					<span style="max-width: 600px;">
						Charge
					</span>
				</div>
			</div>
		</BCol>

		<BCol md="4">
			<div class="w-100 rounded shadow img-container">
				<div class="child bg-three">
					<span style="max-width: 600px;">
						Save
					</span>
				</div>
			</div>
		</BCol>
	</BRow>
</template>

<style lang="scss" scoped>
	@import '../assets/styles/override.scss';

	// CONTENT //
	.content {
		-webkit-transform: translateY(-150px);
		transform: translateY(-150px);
	}

	.img-container {
		height: 300px;
		overflow: hidden;
		cursor: pointer;

		.bg-one {
			background-image: url('https://source.unsplash.com/600x400/?food');
		}

		.bg-two {
			background-image: url('https://source.unsplash.com/600x400/?energy');
		}

		.bg-three {
			background-image: url('https://source.unsplash.com/600x400/?money');
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
	}
</style>