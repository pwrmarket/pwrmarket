<template>
	<BContainer class="mb-5 py-5">
		<BRow>
			<BCol cols="12">
				<h3 class="mb-5 text-secondary">Location Features</h3>
			</BCol>

			<BCol cols="12" md="9">
				<BRow>
					<BCol
						v-for="(a, i) in location.amenities"
						:key="i"
						cols="12" md="6"
					>
						<BCard
							bg-variant="white"
							border-variant="secondary"
							no-body
							class="mb-3"
						>
							<BCardHeader class="text-primary border-secondary bg-transparent">
								<h4 v-if="a.type == 'energy-station'" class="m-0">
									{{ a.name }} Energy Station
								</h4>

								<h4 v-if="a.type == 'store'" class="m-0">
									{{ a.name }} Store
								</h4>

								<h4 v-if="a.type == 'car-wash'" class="m-0">
									{{ a.name }} Car Wash 
								</h4>

								<h4 v-if="a.type == 'service-shop'" class="m-0">
									{{ a.name }} Service Shop
								</h4>

								<h4 v-if="a.type == 'amazon-locker'" class="m-0">
									{{ a.name }} Amazon Locker
								</h4>
							</BCardHeader>

							<BCardBody>
								<!-- Services -->
								<BRow class="mb-4">
									<BCol cols="12">
										<h5 class="mb-3 text-secondary">Services</h5>
									</BCol>

									<BCol
										v-for="(s, ii) in a.services"
										:key="ii"
										cols="6" sm="3"
										class="m-0 p-0 text-center"
									>
										{{ s }}
									</BCol>
								</BRow>

								<!-- Products -->
								<BRow v-if="a.products.length > 0" class="mb-4">
									<BCol cols="12">
										<h5 class="mb-3 text-secondary">Sold Here</h5>
									</BCol>

									<BCol
										v-for="(p, ii) in a.products"
										:key="ii"
										cols="6" sm="3"
										class="m-0 p-0 text-center"
									>
										{{ p }}
									</BCol>
								</BRow>

								<!-- Delivery Methods -->
								<BRow v-if="a.deliveryMethods.length > 0" class="mb-4">
									<BCol cols="12">
										<h5 class="mb-3 text-secondary">Accepted Delivery Methods</h5>
									</BCol>

									<BCol
										v-for="(d, ii) in a.deliveryMethods"
										:key="ii"
										cols="6" sm="3"
										class="text-center"
									>
										<img
											v-if="d == 'Uber'"
											:src="uberLogo"
											:alt="d"
											class="w-100 px-2"
										>

										<img
											v-else-if="d == 'DoorDash'"
											:src="doordashLogo"
											:alt="d"
											class="w-100 px-2"
										>

										<img
											v-else-if="d == 'Grubhub'"
											:src="grubhubLogo"
											:alt="d"
											class="w-100 px-2"
										>

										<img
											v-else-if="d == 'Vroom'"
											:src="vroomLogo"
											:alt="d"
											class="w-100 px-2"
										>

										<h6 v-else class="m-0">{{ d }}</h6>
									</BCol>
								</BRow>
							</BCardBody>
						</BCard>
					</BCol>
				</BRow>
			</BCol>

			<BCol cols="12" md="3">
				<BCard bg-variant="primary" text-variant="light" no-body>
					<!-- Address -->
					<BCardHeader class="border-0">
						<h6 class="m-0 text-uppercase">
							Address
						</h6>
					</BCardHeader>

					<BCardBody>
						<h5 class="">
							{{ location.address.street }}<br>
							{{ location.address.city }} {{ location.address.state }}<br>
							{{ location.address.zip }}
						</h5>
					</BCardBody>

					<!-- Hours of Operations -->
					<BCardHeader class="border-0">
						<h6 class="m-0 text-uppercase">
							Hours
						</h6>
					</BCardHeader>

					<BCardBody>
						<h5 class="">{{ location.hoursOfOperation }}</h5>
					</BCardBody>

					<!-- Phone Number -->
					<BCardHeader class="border-0">
						<h6 class="m-0 text-uppercase">
							Phone Number
						</h6>
					</BCardHeader>

					<BCardBody>
						<h5 class="">{{ location.contact.phone.string }}</h5>
					</BCardBody>

					<!-- Email -->
					<BCardHeader class="border-0">
						<h6 class="m-0 text-uppercase">
							Email
						</h6>
					</BCardHeader>

					<BCardBody>
						<h5 class="">{{ location.contact.email.string }}</h5>
					</BCardBody>

					<BCardBody class="pt-0">
						<BButton variant="light" class="w-100">
							Visit Location
						</BButton>
					</BCardBody>

					<!-- id -->
					<BCardBody v-if="0 == 1">
						<h6 class="small">
							{{ this.$route.params.location_id }}
						</h6>
					</BCardBody>

				</BCard>
			</BCol>
		</BRow>
		{{ location }}
	</BContainer>
</template>

<script>
	import locations from '../defaults/locations'

	export default {
		data() {
			return {
				locations: locations,
				location: {},
				uberLogo: 'https://images2.imgbox.com/7a/46/Pe1nUcq8_o.png',
				doordashLogo: 'https://images2.imgbox.com/fe/6d/dUuN1QUy_o.png',
				grubhubLogo: 'https://images2.imgbox.com/60/66/5U1IWu5m_o.jpg',
				vroomLogo: 'https://images2.imgbox.com/89/78/YBlsONvf_o.png',
			}
		},

		created() {
			this.locations.forEach(l => {
				if (l.id == parseInt(this.$route.params.location_id)) {
					this.location = l
				}	
			})
		},
	}
</script>