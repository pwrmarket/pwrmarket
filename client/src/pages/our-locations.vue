<template>
	<BContainer fluid class="mb-6 p-0 pb-5">
		<div class="py-5 bg-gradient">
			<h2 class="m-0 text-center text-light">Our Locations</h2>
		</div>

		<BContainer class="py-4">
			<BRow>
				<BCol cols="12">
					<h5 class="text-primary">
						Filter
					</h5>
				</BCol>
			</BRow>

			<BRow class="py-3">
				<BCol cols="12" class="">
					<h6 class="text-secondary">Amenities</h6>
					<input
						v-model="filters_amenities"
						type="checkbox"
						id="energy-station"
						value="energy-station"
						class="mr-1"
					>
					<label for="powermarket" class="mr-3">Energy Station</label>

					<input
						v-model="filters_amenities"
						type="checkbox"
						id="store"
						value="store"
						class="mr-1"
					>
					<label for="powermarket" class="mr-3">Store</label>

					<input
						v-model="filters_amenities"
						type="checkbox"
						id="service-shop"
						value="service-shop"
						class="mr-1"
					>
					<label for="service-shop" class="mr-3">Service Shop</label>
					
					<input
						v-model="filters_amenities"
						type="checkbox"
						id="car-wash"
						value="car-wash"
						class="mr-1"
					>
					<label for="car-wash" class="mr-3">Car Wash</label>

					<input
						v-model="filters_amenities"
						type="checkbox"
						id="amazon-locker"
						value="amazon-locker"
						class="mr-1"
					>
					<label for="amazon-locker" class="mr-3">Amazon Locker</label>
				</BCol>
					
				<BCol cols="12">
					<BButton @click="setLocations_display()" size="lg" class="mt-1">
						Filter
					</BButton>
				</BCol>
			</BRow>
			
			<hr>
			<BRow v-if="!loading">
				<BCol cols="12">
					<h6 class="text-secondary">
						Results Count: {{ locations_display.length }}
					</h6>
				</BCol>

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
								<h6 class="m-0 text-secondary">
									<span>
										<ClockIcon /> {{ l.hoursOfOperation }}
									</span>
									<span class="float-right">
										<MapPinIcon />
										{{ Math.round(l.distance * 100) / 100 }}
										mi.
									</span>
								</h6>
							</BCardHeader>

							<BCardBody>
								<h5 class="text-primary">
									{{ l.address.street }}
									{{ l.address.city }} {{ l.address.state }}
									{{ l.address.zip }}
								</h5>
							</BCardBody>

							<BCardFooter class="bg-transparent">
								<BButton variant="secondary" class="w-100">
									View More Details
								</BButton>
							</BCardFooter>
						</BCard>
					</RouterLink>
				</BCol>
			</BRow>
		</BContainer>
	</BContainer>
</template>

<script>
	import { ClockIcon, MapPinIcon, } from 'vue-feather-icons'

	import locations from '../defaults/locations'
	import tools_distance from '../tools/distance'

	export default {
		data() {
			return {
				loading: true,
				showFilters: false,
				flag: false,

				locations: locations,

				locations_display: [],

				filters_amenities: [],
				filters_productsAndServices: [],
			}
		},

		methods: {
			setLocations_display() {
				this.loading = true
				this.locations_display = locations

				// For each filter
				for (let i = 0; i < this.filters_amenities.length; i++) {
					const fa = this.filters_amenities[i]

					// [INIT] //
					let updatedLocation_display = []
					
					// For each location
					for (let ii = 0; ii < this.locations_display.length; ii++) {
						const ld = this.locations_display[ii]

						this.flag = false

						// For each location amenity
						for (let iii = 0; iii < ld.amenities.length; iii++) {
							const ld_a = ld.amenities[iii]

							// Location is safe
							if (ld_a.type == fa) { this.flag = true }
						}

						if (this.flag == true) {
							// Remove unsafe location
							updatedLocation_display.push(ld)
						}
					}

					this.locations_display = updatedLocation_display
				}

				// Reorder by distance
				for (let iiiii = 0; iiiii < this.locations_display.length; iiiii++) {
					const ld = this.locations_display[iiiii]

					ld.distance = tools_distance.caculateBetweenCoordinates(
						ld.location.latitude,
						ld.location.longitude,
						this.$store.state.app.location.latitude,
						this.$store.state.app.location.longitude,
					)
				}

				// Sort closest first
				this.locations_display.sort((a, b) => {
					return a.distance - b.distance;
				})

				this.loading = false
			},
		},

		components: {
			ClockIcon,
			MapPinIcon,
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