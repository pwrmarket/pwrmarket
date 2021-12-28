<template>
	<BContainer fluid class="mb-6 p-0 pb-5">
		<TitleHeader
			:imageURL="require('../assets/images/hero/slide4.jpg')"
			:text="`Power Market Rewards`"
		/>

		<BContainer class="offset-content px-3 py-4">
			<BRow>
				<BCol cols="12">
					<BCard no-body border-variant="white" class="border-0">
						<BCardHeader class="bg-gradient">
							<div >

							<h1 class="my-2 text-center text-light">How It Works</h1>
							</div>
						</BCardHeader>

						<BCardBody>
							<BRow>
								<BCol cols="12">
								</BCol>

								<BCol cols="6" sm="6" lg="4" xl="3">
									<div class="text-center" data-aos="fade-right" data-aos-delay="200" data-aos-offset="-400">
										<SmartphoneIcon size="5x" class="mb-3 text-secondary" />

										<h5 class="mb-3 text-primary">
											1. Download our app & Sign up for your free Power Market membership
										</h5>
									</div>
								</BCol>

								<BCol cols="6" sm="6" lg="4" xl="3">
									<div class="text-center" data-aos="fade-right" data-aos-delay="400" data-aos-offset="-400">
										<MapPinIcon size="5x" class="mb-3 text-secondary" />

										<h5 class="mb-3 text-primary">
											2. Find a participating location or select an offer that you like
										</h5>
									</div>
								</BCol>

								<BCol cols="6" sm="6" lg="4" xl="3">
									<div class="text-center" data-aos="fade-right" data-aos-delay="600" data-aos-offset="-400">
										<DollarSignIcon size="5x" class="mb-3 text-secondary" />

										<h5 class="mb-3 text-primary">
											3. Scan your barcode before you pay inside to earn and redeem rewards
										</h5>
									</div>
								</BCol>

								<BCol cols="6" sm="6" lg="4" xl="3">
									<div class="text-center"  data-aos="fade-right" data-aos-delay="800" data-aos-offset="-400">
										<BatteryChargingIcon size="5x" class="mb-3 text-secondary" />

										<h5 class="mb-3 text-primary">
											4. Just getting gas? Enter your Alt ID at the pump to apply your reward balance and pay less for fuel
										</h5>
									</div>
								</BCol>
							</BRow>
						</BCardBody>
					</BCard>
				</BCol>

				<BCol cols="12" xl="4">
					<BCard border-variant="white">
						<BRow>
							<BCol cols="12">
								<BCard class="mb-4 shadow bg-gradient rounded-0">
									<BCardBody class="p-1 h-100 title-col">
										<DownloadOurApp small />
									</BCardBody>
								</BCard>
							</BCol>
						</BRow>
					</BCard>
				</BCol>

				<BCol cols="12" xl="8">
					<viewer
						:options="{ title: false, transition: false, }"
						class="text-center"
					>
						<BRow class="w-100 m-0">
							<BCol
								v-for="(img, i) in images"
								:key="i"
								cols="12" xl="6"
								class="p-0"
							>
								<img :src="img" v-lazy="img" class="w-100">
							</BCol>
						</BRow>
					</viewer>
				</BCol>
			</BRow>
		</BContainer>
	</BContainer>
</template>

<script>
	import {
		BatteryChargingIcon,
		//ClipboardIcon,
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
				images: [
					"https://images2.imgbox.com/f1/c8/XKrDps69_o.png",
					"https://images2.imgbox.com/43/bc/yIzF2Mg1_o.png",
					"https://images2.imgbox.com/3a/99/e5Gs7gVp_o.png",
					"https://images2.imgbox.com/a1/90/0DTXvT4E_o.png",
					"https://images2.imgbox.com/8a/40/g5aozA7m_o.png",
				],
			}
		},

		components: {
			BatteryChargingIcon,
			//ClipboardIcon,
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