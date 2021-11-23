<template>
	<BContainer
		fluid
		class="hero-section"
		:class="
			$store.state.node_env == 'production' ? 'bg-gradient' : 'bg-gradient-weak'
		"
	>
		<BContainer>
			<BRow class="w-100">
				<!-- HERO INFO -->
				<BCol cols="12" md="6" class="py-md-3">
					<div class="hero-info-holder">
						<h1
							class="my-5 text-center text-light"
							style="font-size: 4em;"
						>We'd Love See You to Stop By!</h1>

						<div class="text-center">
							<RouterLink to="/deals">
								<BButton variant="outline-light" size="lg">
									Check Out our Current Deals
								</BButton>
							</RouterLink>
						</div>
					</div>		
				</BCol>

				<!-- HERO IMAGE -->
				<BCol cols="12" md="6" class="d-none d-sm-block">
					<div
						class="
							h-100
							mx-auto
							hero-img-holder
						"
					>
						<lottie-player
							src="https://assets2.lottiefiles.com/packages/lf20_DEjwMw.json"
							class="w-100 lottie"
							background="transparent"
							speed="1"
							loop
							autoplay
						/>
					</div>
				</BCol>
			</BRow>

			<!-- WAVE 1 -->
			<div class="wave">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="
							M321.39,56.44
							c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39
							C823.78,31,906.67,72,985.66,92.83
							c70.05,18.48,146.53,26.09,214.34,3
							V0
							H0
							V27.35
							A600.21,600.21,0,0,0,321.39,56.44Z
						"
						class="shape-fill"
					></path>
				</svg>
			</div>
		</BContainer>
	</BContainer>
</template>

<style lang="scss" scoped>
	@import '../../assets/styles/override.scss';

	.hero-section {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 640px;
		padding-bottom: 180px;

		@media (max-width: 768px) {
			padding-bottom: 100px;
		}

		.hero-img-holder {
			max-width: 500px;

			@media (max-width: 768px) {
				max-width: 300px;
			}
		}

		.hero-info-holder {
			padding: 100px 0 0 0;

			@media (max-width: 768px) {
				padding: 100px 0 0 0;
			}
		}

		// Wave Under Hero
		.wave {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			overflow: hidden;
			line-height: 0;
			transform: rotate(180deg);

			svg {
				position: relative;
				display: block;
				width: calc(150% + 1.3px);
				height: 302px;

				@media (max-width: 768px) {
					height: 100px;
				}
			}

			.shape-fill {
				fill: white;
			}
		}
	}
</style>