<template>
	<BContainer fluid class="mb-6 p-0 pb-5">
		<div class="py-5 bg-gradient">
			<h2 class="m-0 text-center text-light">Our Loyalty System</h2>
		</div>

		<BContainer class="py-4">
			<BRow>
				<BCol cols="12" md="7">
					<BListGroup class="shadow">
						<BListGroupItem variant="light">
							<h4 class="m-0 text-primary">HOW IT WORKS</h4> 
						</BListGroupItem>

						<BListGroupItem variant="light" class="text-secondary">
							– Download our app
						</BListGroupItem>

						<BListGroupItem variant="light" class="text-secondary">
							– Sign up for your free Power Market membership
						</BListGroupItem>

						<BListGroupItem variant="light" class="text-secondary">
							– Find a participating location or select an offer that you like
						</BListGroupItem>

						<BListGroupItem variant="light" class="text-secondary">
							– Scan your barcode before you pay inside to earn and redeem rewards
						</BListGroupItem>

						<BListGroupItem variant="light" class="text-secondary">
							– Just getting gas? Enter your Alt ID at the pump to apply your reward balance and pay less for fuel.
						</BListGroupItem>

					</BListGroup>
				</BCol>

				<BCol cols="12" md="5">
					<img :src="image" class="w-100 rounded">
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