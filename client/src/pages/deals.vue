<template>
	<BContainer fluid class="m-0 p-0 pb-5 bg-white">
		<TitleHeader
			:imageURL="require('../assets/images/slider/slide1.jpg')"
			:text="`Everyday Deals!`"
		/>

		<BContainer class="offset-content">
			<BRow class="m-0 p-0 pb-5">
				<BCol
					v-for="(d, i) in deals"
					:key="i"
					cols="12" :xl="d.size"
					class="d-flex-0 align-items-stretch"
				>
					<BCard no-body border-variant="white" class="mb-4 border-0">
						<BCardHeader class="bg-secondary">
							<h1 v-if="d.size >= 6" class="m-0 text-center text-light" style="font-size: 3em;">
								{{ d.title }}
							</h1>

							<h1 v-else class="m-0 text-center text-light" style="font-size: 2em;">
								{{ d.title }}
							</h1>
						</BCardHeader>

						<BCardBody class="p-0">
							<img :src="d.img" alt="Image" class="w-100" />
						</BCardBody>
						
						<BCardFooter class="bg-primary">
							<h1 v-if="d.size >= 6" class="m-0 text-center text-light" style="font-size: 4em;">
								{{ d.price }}
								<span class="font-weight-bold small" style="font-size: .5em;">{{ d.priceTag }}</span>
							</h1>

							<h1 v-else class="m-0 text-center text-light bg-primary" style="font-size: 2.2em;">
								{{ d.price }}
								<span class="font-weight-bold small" style="font-size: .5em;">{{ d.priceTag }}</span>
							</h1>
						</BCardFooter>
					</BCard>
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
			deals: [
				{
					title: 'Pizza 7" + Fountain Drink 32oz',
					price: '$4.99',
					priceTag: '+ tax',
					img: 'https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg',
					size: '6',
				},
				{
					title: 'Family Meal - 8pc Fried Chicken + 2L Pepsi',
					price: '$9.99',
					priceTag: '+ tax',
					img: 'https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg',
					size: '6',
				},
				{
					title: 'Fountain Drink (Any Size)',
					price: '$0.99',
					priceTag: '+ crv + tax',
					img: 'https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg',
					size: '4',
				},
				{
					title: 'Aquafina & Dasani 1L',
					price: '2 for $2.49',
					priceTag: '+ crv',
					img: 'https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg',
					size: '4',
				},
				{
					title: 'Rockerstar 16oz',
					price: '2 for $3.49',
					priceTag: '+ crv + tax',
					img: 'https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg',
					size: '4',
				},
				{
					title: 'PM Water 1L',
					price: '2 for $2.99',
					priceTag: '+ crv',
					img: 'https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg',
					size: '4',
				},
				{
					title: 'Nestle 24 Pack',
					price: '2 for $4.99',
					priceTag: '+ crv',
					img: 'https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg',
					size: '4',
				},
				{
					title: 'Pepsi 12 Pack',
					price: '1 for $6.29 or 2 for $0.49',
					priceTag: '+ crv',
					img: 'https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg',
					size: '4',
				},
				{
					title: 'Bang, Monster & Reign 16oz',
					price: '2 for $4.49 or 3 for $5.99',
					priceTag: '+ crv + tax',
					img: 'https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg',
					size: '4',
				},
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