<template>
	<BContainer fluid class="m-0 p-0 pb-5 bg-primary">
		<TitleHeader
			:imageURL="require('../assets/images/slider/slide1.jpg')"
			:text="`Save More With These Everyday Deals!`"
		/>

		<BContainer class="p-0 content">
			<BRow class="w-100 m-0">
				<BCol cols="12" sm="6" md="6" lg="4" xl="4" class="mx-auto p-0">
					<img src="https://images2.imgbox.com/fa/72/boL8ZhCd_o.png" class="w-100">
				</BCol>

				<BCol cols="12" sm="6" md="6" lg="4" xl="4" class="mx-auto p-0">
					<img src="https://images2.imgbox.com/0f/f2/hgfOYHou_o.png" class="w-100">
				</BCol>

				<BCol cols="12" sm="6" md="6" lg="4" xl="4" class="mx-auto p-0">
					<img src="https://images2.imgbox.com/a3/91/dQH5F6Mu_o.png" class="w-100">
				</BCol>

				<BCol cols="12" sm="6" md="6" lg="4" xl="4" class="mx-auto p-0">
					<img src="https://images2.imgbox.com/6d/1e/7cVd2rU5_o.png" class="w-100">
				</BCol>

				<BCol cols="12" sm="6" md="6" lg="4" xl="4" class="mx-auto p-0">
					<img src="https://images2.imgbox.com/97/9a/4TSWOET5_o.png" class="w-100">
				</BCol>
			</BRow>

		</BContainer>
	</BContainer>
</template>

<script>
import TitleHeader from '@/components/UI/TitleHeader'

export default {
	data() {
		return {
			image: require('../assets/images/about.jpg')
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