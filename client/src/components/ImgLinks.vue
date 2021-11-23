<template>
	<BRow class="w-100">
		<BCol md="4" class="m-0 p-0">
			<div class="img-wrapper">
				<img class="tri-img" src="https://source.unsplash.com/600x400/?supermarket" />

				<div class="content-holder">
					<p class="">This image looks super neat.</p>
				</div>
			</div>
		</BCol>

		<BCol md="4" class="m-0 p-0">
			<div class="img-wrapper">
				<img class="tri-img" src="https://source.unsplash.com/600x400/?energy" />

				<div class="content-holder">
					<p class="">This image looks super neat.</p>
				</div>
			</div>
		</BCol>

		<BCol md="4" class="m-0 p-0">
			<div class="img-wrapper">
				<img class="tri-img" src="https://source.unsplash.com/600x400/?food" />

				<div class="content-holder">
					<p class="">This image looks super neat.</p>
				</div>
			</div>
		</BCol>
	</BRow>
</template>

<style lang="scss" scoped>
	/* relevant styles */
	.img-wrapper {
		position: relative;
		height: 100%;
		width: 100%;

		&:hover {
			.content-holder {
				visibility: visible;
				opacity: 1;
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
			background: rgba(255, 255, 255, 0.72);
			visibility: hidden;
			opacity: 0;

			/* transition effect. not necessary */
			transition: opacity .2s, visibility .2s;

			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>