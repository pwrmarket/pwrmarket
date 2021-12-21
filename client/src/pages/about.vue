<template>
	<BContainer fluid class="mb-6 p-0 pb-5">
		<div class="py-5 bg-gradient">
			<h2 class="m-0 text-center text-light" data-aos="fade">
				About Power Market
			</h2>
		</div>

		<BContainer class="py-5">
			<BRow>
				<BCol cols="12" md="7">
					<p v-html="defaultData.aboutHTML" data-aos="fade"></p>
				</BCol>

				<BCol cols="12" md="5">
					<div
						class="rounded shadow"
						style="height: 350px; overflow: hidden;"
						data-aos="fade-up"
					>
						<img
							:src="`https://images2.imgbox.com/6b/87/5scWpmyb_o.jpg`"
							class="w-100"
							
						>
					</div>
				</BCol>
			</BRow>
		</BContainer>
	</BContainer>
</template>

<script>
import defaultData from '../defaults/companyInfo'

export default {
	data() {
		return {
			defaultData: defaultData,
			image: require('../assets/images/about.jpg')
		}
	},
}
</script>