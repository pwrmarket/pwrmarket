<template>
	<BContainer fluid class="mb-6 p-0 pb-5 bg-white">
		<TitleHeader
			:imageURL="require('../assets/images/small/about.jpg')"
			:text="`About Power Market`"
		/>

		<BContainer class="offset-content">
				<BRow>
					<BCol cols="12" lg="7">
						<BCard
							class="mx-auto p-3 shadow text-dark bg-light-frost rounded-xxl"
							data-aos="fade-up"
						>
							<h3 class="text-center text-primary">We Are Power Market!</h3>
							<h6 v-html="defaultData.aboutHTML" class="text-secondary"></h6>
						</BCard>
					</BCol>

					<BCol cols="12" lg="5" class="d-none d-lg-block">
						<img src="https://images2.imgbox.com/4d/36/a4ZMk5SC_o.jpg" class="w-100">
					</BCol>
				</BRow>

		</BContainer>
		
		<BContainer>
			<gallery
				:images="[
					'https://images2.imgbox.com/e3/d4/yQYGLiPV_o.jpg',
					'https://images2.imgbox.com/c3/92/7YxNW3TK_o.jpg',
					'https://images2.imgbox.com/b8/0d/8pwpjWnA_o.jpg',
					'https://images2.imgbox.com/8f/3f/tLjvcUjT_o.jpg',
					'https://images2.imgbox.com/8e/be/ogADu2X1_o.jpg',
					'https://images2.imgbox.com/a0/95/p4eLwSbX_o.jpg',
					'https://images2.imgbox.com/b2/cb/jxR5x0RF_o.jpg',
					'https://images2.imgbox.com/e0/b8/RGfVHKwC_o.jpg',
					'https://images2.imgbox.com/ec/b8/5k481GRT_o.jpg',
					'https://images2.imgbox.com/4d/36/a4ZMk5SC_o.jpg',
					'https://images2.imgbox.com/aa/ce/cG0SXO4r_o.jpg',
					'https://images2.imgbox.com/e9/d4/KK05Cxpf_o.jpg',
					'https://images2.imgbox.com/44/d5/3xl6owee_o.jpg',
					'https://images2.imgbox.com/4e/ed/ZubJmjCw_o.jpg',
					'https://images2.imgbox.com/d5/96/mcx14OsI_o.jpg',
					'https://images2.imgbox.com/23/19/Ux09IlJC_o.jpg',
					'https://images2.imgbox.com/cb/a7/KjDa6UII_o.jpg',
					'https://images2.imgbox.com/96/f0/ZyVBNuFJ_o.jpg',
					'https://images2.imgbox.com/2e/4e/e1IUFMLw_o.jpg',
					'https://images2.imgbox.com/69/a3/O3hwphum_o.jpg',
					'https://images2.imgbox.com/ff/6d/xHN0CRqJ_o.jpg',
					'https://images2.imgbox.com/47/37/AFQ2uboi_o.jpg',
					'https://images2.imgbox.com/85/1e/dHu67AlA_o.jpg',
					'https://images2.imgbox.com/2a/d8/TQIYL8Kn_o.jpg',
					'https://images2.imgbox.com/7c/c5/elPYouJW_o.jpg',
					'https://images2.imgbox.com/e2/e1/IIlyCDbZ_o.jpg',
					'https://images2.imgbox.com/40/3a/NsHsSPdB_o.jpg',
					'https://images2.imgbox.com/76/af/iORW81Wi_o.jpg',
				]"
			/>
		</BContainer>
	</BContainer>
</template>

<script>
import defaultData from '../defaults/companyInfo'
import Gallery from '@/components/Gallery'
import TitleHeader from '@/components/UI/TitleHeader'

export default {
	data() {
		return {
			defaultData: defaultData,
			image: require('../assets/images/about.jpg')
		}
	},

	components: { Gallery, TitleHeader },
}
</script>