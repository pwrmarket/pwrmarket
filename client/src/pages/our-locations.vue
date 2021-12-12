<template>
	<BContainer class="mb-5 py-5">
		<BCard no-body bg-variant="white" class="shadow">
			<BCardHeader class="bg-gradient">
				<h1 class="my-3 text-center text-light">Our Locations</h1>
			</BCardHeader>
			
			<BCardBody>
				<BRow>
					<BCol cols="12">
						<h4 class="text-primary">Filter</h4>
					</BCol>

					<BCol cols="12" md="6" lg="4">
						<h6 class="text-secondary">Amenities</h6>
						<input
							v-model="filters_amenities"
							type="checkbox"
							id="powermarket"
							value="powermarket"
							class="mr-2"
						>
						<label for="powermarket" class="mr-4">Power Market</label>
					</BCol>
						
					<BCol cols="12" md="6" lg="4">
						<h6 class="text-secondary">Products</h6>
						<input
							v-model="filters_productsAndServices"
							type="checkbox"
							id="e85"
							value="e85"
							class="mr-2"
						>
						<label for="e85" class="mr-4">E85 Fuel</label>

						<input
							v-model="filters_productsAndServices"
							type="checkbox"
							id="propane"
							value="propane"
							class="mr-2"
						>
						<label for="propane" class="mr-4">Propane</label>

						<input
							v-model="filters_productsAndServices"
							type="checkbox"
							id="ebt"
							value="ebt"
							class="mr-2"
						>
						<label for="ebt" class="mr-4">EBT</label>

						<input
							v-model="filters_productsAndServices"
							type="checkbox"
							id="alcohal"
							value="alcohal"
							class="mr-2"
						>
						<label for="alcohal" class="mr-4">Alcohal</label>
					</BCol>

					<BCol cols="12" md="6" lg="4"></BCol>
					<span>filters_amenities: {{ filters_amenities }}</span>
					<span>filters_productsAndServices: {{ filters_productsAndServices }}</span>
				</BRow>

				<BRow>
					<BCol
						v-for="(l, i) in locations_display"
						:key="i"
						cols="12" md="6" lg="4"
						class="d-flex align-items-stretch"
					>
						<RouterLink :to="`/location/${l.id}`" class="w-100 py-3 text-decoration-none">
							<BCard
								no-body
								bg-variant="bg-img"
								text-variant="dark"
								class="w-100 h-100 location-card"
							>
								<BCardHeader class="bg-transparent">
									<h6 class="m-0 small text-secondary">
										{{ l.hoursOfOperation }}
									</h6>
								</BCardHeader>

								<BCardBody>
									<h5 class="text-primary">
										{{ l.address.street }}
										{{ l.address.city }} {{ l.address.state }}
										{{ l.address.zip }}
									</h5>
								</BCardBody>

								<BCardFooter>
									<BButton variant="secondary" class="w-100">
										View More Details
									</BButton>
								</BCardFooter>
							</BCard>
						</RouterLink>
					</BCol>
				</BRow>
			</BCardBody>
		</BCard>
	</BContainer>
</template>

<script>
	import locations from '../defaults/locations'

	export default {
		data() {
			return {
				locations_hidden: [],
				locations_display: [],
				filters_amenities: [],
				filters_productsAndServices: [],
				checkedAmenities: [],
				locations: locations,
			}
		},

		methods: {
			setLocations_display() {
				this.locations_hidden = locations

				this.locations_display = locations
			},
		},

		created() {
			this.setLocations_display()
		},
	}
</script>

<style lang="scss" scoped>
	@import '../assets/styles/index.scss';

	.location-card {		
		&:hover {
			border-color: $primary;
			border-width: 1px;
		}
	}
</style>