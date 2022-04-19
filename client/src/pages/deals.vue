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
	import deals from '@/defaults/deals'

	export default {
		data() {
			return {
				caraousel: deals.featured,

				deals: deals.main,
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