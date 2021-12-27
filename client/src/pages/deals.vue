<template>
	<BContainer fluid class="m-0 p-0 pb-5 bg-primary">
		<TitleHeader
			:imageURL="require('../assets/images/slider/slide1.jpg')"
			:text="`Everyday Deals!`"
		/>

		<BContainer class="offset-content">
			<BRow class="m-0 p-0 pb-5">
				<BCol cols="12" xl="8" order="1"  order-xl="0">
					<BRow class="w-100 m-0">
						<BCol
							v-for="(img, i) in images"
							:key="i"
							cols="12"  lg="6"
							class="p-0"
						>
							<img :src="img" v-lazy="img" class="w-100">
						</BCol>
					</BRow>
				</BCol>

				<BCol cols="12" xl="4"  order="0" order-xl="1">
					<BCard class="mb-3 shadow bg-gradient rounded-0" data-aos="fade-up">
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
import DownloadOurApp from '../components/DownloadOurApp.vue'
import TitleHeader from '@/components/UI/TitleHeader'

export default {
	data() {
		return {
			images: [
				"https://images2.imgbox.com/f1/c8/XKrDps69_o.png",
				"https://images2.imgbox.com/43/bc/yIzF2Mg1_o.png",
				"https://images2.imgbox.com/3a/99/e5Gs7gVp_o.png",
				"https://images2.imgbox.com/a1/90/0DTXvT4E_o.png",
				"https://images2.imgbox.com/8a/40/g5aozA7m_o.png",
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