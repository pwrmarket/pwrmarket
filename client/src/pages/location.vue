<template>
	<BContainer class="mb-5 py-5">
		<BRow>
			<BCol cols="12">
				<h1 class="mb-5 text-secondary">Location Features</h1>
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
							</BCardBody>
						</BCard>
					</BCol>
				</BRow>
			</BCol>

			<BCol cols="12" md="3">
				<BCard bg-variant="primary" text-variant="light">
					<h5 class="text-center">{{ this.$route.params.location_id }}</h5>
					
					<h5 class="text-uppercase text-underline"><u>Address</u></h5>
					
					<h4 class="">
						{{ location.address.street }}<br>
						{{ location.address.city }} {{ location.address.state }}<br>
						{{ location.address.zip }}
					</h4>

					<h5 class="text-uppercase text-underline"><u>Hours of Operation</u></h5>

					<h4 class="">{{ location.hoursOfOperation }}</h4>
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