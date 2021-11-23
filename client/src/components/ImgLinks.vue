<template>
	<BRow class="w-100 m-0 p-0">
		<BCol md="4" class="m-0 p-0">
			<div class="img-wrapper">
				<img class="tri-img" src="https://source.unsplash.com/600x400/?supermarket" />

				<div class="content-holder">
					<h1 class="m-0 text-light">Shop</h1>
				</div>
			</div>
		</BCol>

		<BCol md="4" class="m-0 p-0">
			<div class="img-wrapper">
				<img class="tri-img" src="https://source.unsplash.com/600x400/?energy" />

				<div class="content-holder">
					<h1 class="m-0 text-light">Charge</h1>
				</div>
			</div>
		</BCol>

		<BCol md="4" class="m-0 p-0">
			<div class="img-wrapper">
				<img class="tri-img" src="https://source.unsplash.com/600x400/?food" />

				<div class="content-holder">
					<h1 class="m-0 text-light">Save</h1>
				</div>
			</div>
		</BCol>
	</BRow>
</template>

<style lang="scss" scoped>
	@import '../assets/styles/override.scss';

	/* relevant styles */
	.img-wrapper {
		position: relative;
		height: 100%;
		width: 100%;

		&:hover {
			.content-holder {
				visibility: visible;
				opacity: 1;

				background: $primary-shine;
			}
		}

		.tri-img {
			width: 100%;
		}
	
		.content-holder {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background: $dark-shine;
			visibility: hidden;
			opacity: 0;
			visibility: visible;
			opacity: 1;

			/* transition effect. not necessary */
			transition: opacity .2s, visibility .2s;

			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>