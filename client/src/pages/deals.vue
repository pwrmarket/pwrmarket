<template>
	<BContainer fluid class="m-0 p-0 pb-5 bg-white">
		<TitleHeader
			:imageURL="require('../assets/images/slider/slide1.jpg')"
			:text="`Everyday Deals!`"
		/>

		<BContainer class="offset-content">
			<BRow class="m-0 p-0 pb-5">
				<BCol cols="12" xl="8" class="m-0 p-0">
					<viewer
						:options="{ title: false, transition: false, }"
						class="text-center"
					>
						<BRow class="w-100 m-0">
							<!-- infoImages -->
							<BCol
								v-for="(img, i) in infoImages"
								:key="i"
								cols="12" lg="6"
								class="p-0"
							>
								<img :src="img" v-lazy="img" class="w-100">
							</BCol>

							<!-- standardImages -->
							<BCol
								v-for="(img, i) in standardImages"
								:key="i"
								cols="12" lg="6"
								class="p-0"
							>
								<img :src="img" v-lazy="img" class="w-100">
							</BCol>						

							<!-- largeImages -->
							<BCol cols="12">
								<BRow>
									<BCol cols="12" xl="5" class="m-0 p-0">
										<!-- WhiteBgImages -->
										<BCol
											v-for="(img, i) in whiteBgImages"
											:key="i"
											cols="12"
											class="p-0"
										>
											<img :src="img" v-lazy="img" class="w-100">
										</BCol>
									</BCol>

									<BCol cols="12" xl="7" class="m-0 p-0">
										<img :src="largeImages[0]" v-lazy="largeImages[0]" class="w-100">
									</BCol>
								</BRow>
							</BCol>
						</BRow>
					</viewer>
				</BCol>

				<BCol cols="12" xl="4" class="m-0 p-0">
					<!-- tallImages -->
					<BRow class="w-100 m-0">
						<BCol
							v-for="(img, i) in tallImages"
							:key="i"
							cols="12"
							class="p-0"
						>
							<img :src="img" v-lazy="img" class="w-100">
						</BCol>
					</BRow>
				</BCol>

				<BCol cols="12" xl="4" class="mx-auto">
					<BCard class="mb-4 shadow bg-gradient rounded-0">
						<BCardBody class="p-1 h-100 title-col">
							<DownloadOurApp small />
						</BCardBody>
					</BCard>
				</BCol>
			</BRow>
		</BContainer>
	</BContainer>
</template>

<script>
import DownloadOurApp from '../components/DownloadOurApp.vue'
import TitleHeader from '@/components/UI/TitleHeader'

export default {
	data() {
		return {
			infoImages: [
				'https://images2.imgbox.com/d3/ea/UatclRrI_o.jpg',
				'https://images2.imgbox.com/ec/e9/AXfVrhol_o.jpg',
			],

			whiteBgImages: [
				'https://images2.imgbox.com/70/b3/bVKv3MdG_o.jpg',
				'https://images2.imgbox.com/13/39/2Bd8LucZ_o.jpg',
			],

			standardImages: [
				'https://images2.imgbox.com/65/43/tZpwWwLb_o.jpg',
				'https://images2.imgbox.com/94/11/wHepw6tO_o.jpg',
				'https://images2.imgbox.com/2e/56/Qawn7RvV_o.jpg',
				'https://images2.imgbox.com/36/11/t3P9KREv_o.jpg',
			],

			largeImages: ['https://images2.imgbox.com/4c/2d/2mSOxuxe_o.jpg',],

			tallImages: [
				'https://images2.imgbox.com/69/bd/yFxXCBud_o.jpg',
				'https://images2.imgbox.com/75/3c/B8qQRIbw_o.jpg',
				'https://images2.imgbox.com/bf/7b/CrbeNeyn_o.jpg',
			],
		}
	},

	components: { DownloadOurApp, TitleHeader },
}
</script>

<style lang="scss" scoped>
	.top-half-circle {
		height: 100%;
		width: 100%;
		border-top-right-radius: 100%;
	}

	.bottom-half-circle {
		height: 100%;
		width: 100%;
		border-bottom-right-radius: 100%;
	}
</style>