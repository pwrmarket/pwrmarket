<template>
	<BContainer fluid class="py-5 bg-white">
		<BContainer class="bg-white main-section bg-primary">
			<!--  -->
			<BRow class="w-100">
				<!-- DEALS CONTENT COLUMN -->
				<BCol cols="12" lg="5" class="">
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

				<!-- DEALS TEXT COLUMN -->
				<BCol cols="12" lg="7" class="text-center">
					<div
						class="
							mx-auto
							px-md-5
							hero-message-box
						"
					>
					
					</div>
				</BCol>
			</BRow>
		</BContainer>
	</BContainer>
</template>

<style lang="scss" scoped>
	// Main Section //
	.main-section {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>