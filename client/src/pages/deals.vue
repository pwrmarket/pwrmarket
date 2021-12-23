<template>
	<BContainer fluid class="m-0 p-0 pb-5 bg-primary">
		<TitleHeader
			:imageURL="require('../assets/images/slider/slide1.jpg')"
			:text="`Save More With These Everyday Deals!`"
		/>

		<div class="p-0 pb-5 ">
			<BRow class="w-100 m-0">
				<BCol
					v-for="(img, i) in images"
					:key="i"
					cols="12" sm="6" md="6" lg="4" xl="4"
					class="p-0"
				>
					<img :src="img" class="w-100">
				</BCol>
			</BRow>
		</div>
	</BContainer>
</template>

<script>
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

	components: { TitleHeader },
}
</script>

<style lang="scss" scoped>
	// CONTENT //
	.content {
		-webkit-transform: translateY(-80px);
		transform: translateY(-80px);
	}
</style>