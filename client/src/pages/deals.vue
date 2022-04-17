<template>
	<BContainer fluid class="m-0 p-0 pb-5 bg-white">
		<TitleHeader
			:imageURL="require('../assets/images/slider/slide1.jpg')"
			:text="`Everyday Deals!`"
		/>

		<!-- Caraousel -->
		<BContainer fluid class="p-0 offset-content">
		<DealsSlider
			:slides="caraousel"
			:maxHeight="700"
			data-aos="fade"
			class=""
		/>
		</BContainer>

		<BContainer class="offset-content">
			<BRow class="m-0 p-0 pb-5">
				<BCol
					v-for="(d, i) in deals"
					:key="i"
					cols="12" lg="6" :xl="d.size"
					class="d-flex align-items-stretch"
				>
					<BCard no-body border-variant="secondary" class="w-100 mb-4 border-0 shadow">
						<BCardHeader class="bg-secondary center-content" style="height: 150px;">
							<div class="">
									<h1 v-if="d.size >= 6" class="m-0 text-center text-light" style="font-size: 3em;">
									{{ d.title }}
								</h1>

								<h1 v-else class="m-0 text-center text-light" style="font-size: 2em;">
									{{ d.title }}
								</h1>
							</div>
						</BCardHeader>
						
						<BCardFooter class="bg-primary center-content" style="height: 140px;">
							<div class="">
								<h1 v-if="d.size >= 6" class="m-0 text-center text-light" style="font-size: 4em;">
									{{ d.price }}
									<span class="font-weight-bold small" style="font-size: .5em;">{{ d.priceTag }}</span>
								</h1>

								<h1 v-else class="m-0 text-center text-light bg-primary" style="font-size: 2.2em;">
									{{ d.price }}
									<span class="font-weight-bold small" style="font-size: .5em;">{{ d.priceTag }}</span>
								</h1>
							</div>
						</BCardFooter>

						<BCardBody class="img-container bg-secondary p-0 text-center">
							<img
								:src="d.img"
								v-lazy="d.img"
								alt="Image"
								class="w-100 deal-img"
								style="max-width: 300px;"
							/>
						</BCardBody>
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
	import DealsSlider from '../components/deals/DealsSlider.vue'
	import DownloadOurApp from '../components/DownloadOurApp.vue'
	import TitleHeader from '@/components/UI/TitleHeader'

	export default {
		data() {
			return {
				caraousel: [
					{
						title: 'Pizza 7" + Fountain Drink 32oz',
						price: '$4.99',
						priceTag: '+ tax',
						img: 'https://images2.imgbox.com/7d/04/iUIXhrj2_o.png',
						size: '4',
					},
					{
						title: 'Combo Deli Family Deal: "Chicken 8pc & Pepsi 2L"',
						price: '$9.99',
						priceTag: '+ crv + tax',
						img: 'https://images2.imgbox.com/d9/ee/xTEa4zoE_o.png',
						size: '4',
					},
					{
						title: 'Fountain Drink (Any Size)',
						price: '$0.99',
						priceTag: '+ crv + tax',
						img: 'https://images2.imgbox.com/43/3c/DUVfYXUO_o.png',
						size: '4',
					},
				],

				deals: [
					{
						title: 'Aquafina & Dasani 1L',
						price: '2 for $2.49',
						priceTag: '+ crv',
						img: 'https://images2.imgbox.com/64/70/dtcay3H8_o.png',
						size: '4',
					},
					{
						title: 'Rockstar 16oz',
						price: '2 for $3.49',
						priceTag: '+ crv + tax',
						img: 'https://images2.imgbox.com/19/6b/vyu5xmOu_o.png',
						size: '4',
					},
					{
						title: 'PM Water 1L',
						price: '2 for $2.99',
						priceTag: '+ crv',
						img: 'https://images2.imgbox.com/cd/2b/aXQn529g_o.png',
						size: '4',
					},
					{
						title: 'Nestle 24 Pack',
						price: '$4.99',
						priceTag: '+ crv',
						img: 'https://images2.imgbox.com/4b/8c/Rsy7RdJv_o.png',
						size: '4',
					},
					{
						title: 'Pepsi 12 Pack',
						price: '2/$9.49',
						priceTag: '+ crv + tax',
						img: 'https://images2.imgbox.com/ec/0b/wxz63Xnx_o.png',
						size: '4',
					},
					{
						title: 'Bang, Monster & Reign 16oz',
						price: '2 for $4.49 or 3 for $5.99',
						priceTag: '+ crv + tax',
						img: 'https://images2.imgbox.com/1e/d9/TisDOatY_o.png',
						size: '4',
					},
					{
						title: 'Candy Bars',
						price: 'King Size 2/$3.99 & Regular Size 2/$2.99',
						priceTag: '',
						img: 'https://images2.imgbox.com/85/2a/b1VNHJko_o.png',
						size: '4',
					},
					{
						title: 'Papa Sal\'s Beef Jerky 10oz',
						price: '$15.99 each',
						priceTag: '',
						img: 'https://images2.imgbox.com/68/76/pZjrhJPN_o.png',
						size: '4',
					},
					{
						title: 'Papa Sal\'s Snacks 4-7oz',
						price: '$3.99 each',
						priceTag: '',
						img: 'https://images2.imgbox.com/ec/7b/gEe1pCnh_o.png',
						size: '4',
					},
					{
						title: 'Red Bull 12oz',
						price: '2 for $5.33',
						priceTag: '+ crv + tax',
						img: 'https://images2.imgbox.com/03/81/JLuWUDA2_o.png',
						size: '4',
					},
				],
			}
		},

		components: { DealsSlider, DownloadOurApp, TitleHeader, },
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


	.img-container {
		min-height: 320px;
		/* Setup */
		position: relative;
	}

	.deal-img {
		/* Center vertically and horizontally */
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>