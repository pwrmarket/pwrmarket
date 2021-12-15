<template>
	<BContainer fluid class="mb-6 p-0 pb-5">
		<div class="py-5 bg-gradient">
			<h2 class="m-0 text-center text-light" data-aos="fade">
				Our Loyalty System
			</h2>
		</div>

		<BContainer class="py-5">
			<BRow>
				<BCol cols="12" md="7">
					<BRow>
						<BCol cols="12">
							<h1 class="mb-5 text-center text-gradient">How It Works</h1>
						</BCol>

						<BCol cols="12" sm="6" lg="4">
							<div class="text-center" data-aos="fade-right" data-aos-delay="0">
								<SmartphoneIcon size="5x" class="mb-3 text-secondary" />

								<h5 class="mb-3 text-primary">
									1. Download our app
								</h5>
							</div>
						</BCol>

						<BCol cols="12" sm="6" lg="4">
							<div class="text-center" data-aos="fade-right" data-aos-delay="200">
								<ClipboardIcon size="5x" class="mb-3 text-secondary" />

								<h5 class="mb-3 text-primary">
									2. Sign up for your free Power Market membership
								</h5>
							</div>
						</BCol>

						<BCol cols="12" sm="6" lg="4">
							<div class="text-center" data-aos="fade-right" data-aos-delay="400">
								<MapPinIcon size="5x" class="mb-3 text-secondary" />

								<h5 class="mb-3 text-primary">
									3. Find a participating location or select an offer that you like
								</h5>
							</div>
						</BCol>

						<BCol cols="12" sm="6" lg="4">
							<div class="text-center" data-aos="fade-right" data-aos-delay="600">
								<DollarSignIcon size="5x" class="mb-3 text-secondary" />

								<h5 class="mb-3 text-primary">
									4. Scan your barcode before you pay inside to earn and redeem rewards
								</h5>
							</div>
						</BCol>

						<BCol cols="12" sm="6" lg="4">
							<div class="text-center"  data-aos="fade-right" data-aos-delay="800">
								<BatteryChargingIcon size="5x" class="mb-3 text-secondary" />

								<h5 class="mb-3 text-primary">
									5. Just getting gas? Enter your Alt ID at the pump to apply your reward balance and pay less for fuel
								</h5>
							</div>
						</BCol>
					</BRow>
				</BCol>

				<BCol cols="12" md="5">
					<img :src="image" class="w-100 rounded" data-aos="fade-up">
				</BCol>
			</BRow>
		</BContainer>
	</BContainer>
</template>

<script>
	import { BatteryChargingIcon, ClipboardIcon, DollarSignIcon, MapPinIcon, SmartphoneIcon } from 'vue-feather-icons'

	import defaultData from '../defaults/companyInfo'

	export default {
		data() {
			return {
				defaultData: defaultData,
				image: require('../assets/images/shop.jpg')
			}
		},

		components: {
			BatteryChargingIcon,
			ClipboardIcon,
			DollarSignIcon,
			MapPinIcon,
			SmartphoneIcon,
		},
	}
</script>