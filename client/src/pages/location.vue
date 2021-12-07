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
							no-body
							class="mb-3"
						>
							<BCardHeader>
								<h5 v-if="a.type == 'energy-station'" class="m-0">
									{{ a.name }} Energy Station
								</h5>

								<h5 v-if="a.type == 'store'" class="m-0">
									{{ a.name }} Store
								</h5>

								<h5 v-if="a.type == 'car-wash'" class="m-0">
									{{ a.name }} Car Wash 
								</h5>

								<h5 v-if="a.type == 'service-shop'" class="m-0">
									{{ a.name }} Service Shop
								</h5>

								<h5 v-if="a.type == 'amazon-locker'" class="m-0">
									{{ a.name }} Amazon Locker
								</h5>
							</BCardHeader>

							<BCardBody>
								<!-- Services -->
								<BRow>
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
								<BRow>
									<BCol
										v-for="(p, ii) in a.products"
										:key="ii"
										cols="6" sm="3"
										class="m-0 p-0 text-center"
									>
										{{ p }}
									</BCol>
								</BRow>

								<!-- Services -->
								<BRow>
									<BCol
										v-for="(d, ii) in a.deliveryMethods"
										:key="ii"
										cols="6" sm="3"
										class="m-0 p-0 text-center"
									>
										{{ d }}
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
			}
		},

		created() {
			this.locations.forEach(l => {
				console.log(l);
				if (l.id == parseInt(this.$route.params.location_id)) {
					console.log('RAN');
					this.location = l
				}	
			})
		},
	}
</script>