<template>
	<BContainer fluid class="mb-6 p-0 pb-5">
		<TitleHeader
			:imageURL="require('../assets/images/slider/slide4.jpg')"
			:text="`Power Market Loyalty (Rewards)`"
		/>

		<BContainer class="content p-0 py-4">
			<BRow>
				<BCol cols="12" md="7">
					<BCard class="border-0">
						<BRow>
							<BCol cols="12">
								<h1 class="mb-5 text-center text-gradient">How It Works</h1>
							</BCol>

							<BCol cols="12" sm="6" lg="4">
								<div class="text-center" data-aos="fade-right" data-aos-delay="0" data-aos-offset="-400">
									<SmartphoneIcon size="5x" class="mb-3 text-secondary" />

									<h5 class="mb-3 text-primary">
										1. Download our app
									</h5>
								</div>
							</BCol>

							<BCol cols="12" sm="6" lg="4">
								<div class="text-center" data-aos="fade-right" data-aos-delay="200" data-aos-offset="-400">
									<ClipboardIcon size="5x" class="mb-3 text-secondary" />

									<h5 class="mb-3 text-primary">
										2. Sign up for your free Power Market membership
									</h5>
								</div>
							</BCol>

							<BCol cols="12" sm="6" lg="4">
								<div class="text-center" data-aos="fade-right" data-aos-delay="400" data-aos-offset="-400">
									<MapPinIcon size="5x" class="mb-3 text-secondary" />

									<h5 class="mb-3 text-primary">
										3. Find a participating location or select an offer that you like
									</h5>
								</div>
							</BCol>

							<BCol cols="12" sm="6" lg="4">
								<div class="text-center" data-aos="fade-right" data-aos-delay="600" data-aos-offset="-400">
									<DollarSignIcon size="5x" class="mb-3 text-secondary" />

									<h5 class="mb-3 text-primary">
										4. Scan your barcode before you pay inside to earn and redeem rewards
									</h5>
								</div>
							</BCol>

							<BCol cols="12" sm="6" lg="4">
								<div class="text-center"  data-aos="fade-right" data-aos-delay="800" data-aos-offset="-400">
									<BatteryChargingIcon size="5x" class="mb-3 text-secondary" />

									<h5 class="mb-3 text-primary">
										5. Just getting gas? Enter your Alt ID at the pump to apply your reward balance and pay less for fuel
									</h5>
								</div>
							</BCol>
						</BRow>
					</BCard>
				</BCol>

				<BCol cols="12" md="5">
					<BCard class="shadow bg-gradient rounded-0" data-aos="fade-up">
						<BCardBody class="p-1 h-100 title-col">
							<DownloadOurApp />
						</BCardBody>
					</BCard>
				</BCol>
			</BRow>
		</BContainer>
	</BContainer>
</template>

<script>
	import {
		BatteryChargingIcon,
		ClipboardIcon,
		DollarSignIcon,
		MapPinIcon,
		SmartphoneIcon
	} from 'vue-feather-icons'

	import DownloadOurApp from '@/components/DownloadOurApp.vue'
	import TitleHeader from '@/components/UI/TitleHeader'
	import companyInfo from '@/defaults/companyInfo'

	export default {
		data() {
			return {
				companyInfo,
			}
		},

		components: {
			BatteryChargingIcon,
			ClipboardIcon,
			DollarSignIcon,
			DownloadOurApp,
			MapPinIcon,
			SmartphoneIcon,
			TitleHeader
		},
	}
</script>

<style lang="scss" scoped>
	@import '../assets/styles/index.scss';

	// CONTENT //
	.content {
		-webkit-transform: translateY(-80px);
		transform: translateY(-80px);
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
			}
		}
	}
</style>