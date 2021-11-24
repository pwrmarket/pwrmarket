<template>
	<BContainer fluid class="py-5 bg-secondary-shine">
		<BContainer class="main-section">
			<!--  -->
			<BRow class="w-100">
				<!-- DEALS CONTENT COLUMN -->
				<BCol cols="12" lg="5" class="mx-auto">
					<div class="mx-auto hero-message-box">
						<div class="px-5 py-4 rounded-lg shadow bg-light-svg hero-message-box-content">
							<BRow class="w-100 m-0 text-center text-secondary">
								<BCol cols="12" class="text-center">
									<h2 class="mb-4 text-secondary">
										Fuel Prices
									</h2>
								</BCol>
							</BRow>

							<BRow class="w-100 m-0 text-center text-secondary rounded">
								<BCol cols="6" md="6" class="py-2 border-bottom">
									<h2 class="m-0 text-primary">Regular</h2>
								</BCol>

								<BCol cols="6" md="6" class="py-2 border-bottom">
									<h2 class="m-0 text-success">2.753</h2>
								</BCol>

								<BCol cols="6" md="6" class="py-2 border-bottom">
									<h2 class="m-0 text-primary">Plus</h2>
								</BCol>

								<BCol cols="6" md="6" class="py-2 border-bottom">
									<h2 class="m-0 text-success">3.134</h2>
								</BCol>

								<BCol cols="6" md="6" class="py-2 border-bottom">
									<h2 class="m-0 text-primary">Super</h2>
								</BCol>

								<BCol cols="6" md="6" class="py-2 border-bottom">
									<h2 class="m-0 text-success">3.129</h2>
								</BCol>
							</BRow>
						</div>
					</div>
				</BCol>
			</BRow>
		</BContainer>
		<br><br>
	</BContainer>
</template>

<style lang="scss" scoped>
	@import '../../assets/styles/variables.scss';

	// Main Section //
	.main-section {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.bg-light-svg {
		//background-image: $bg-light-svg;
		background-repeat: repeat;
		background-size: 200%;
	}
</style>