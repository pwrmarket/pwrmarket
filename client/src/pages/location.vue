<template>
	<BContainer class="mb-6 py-5">
		<BCard no-body bg-variant="white" class="shadow">
			<BCardHeader class="text-light bg-gradient">
				<h3 class="my-3 text-center font-weight-bold">
					{{ location.address.street }}
					{{ location.address.city }} {{ location.address.state }}
					{{ location.address.zip }}
				</h3>
			</BCardHeader>

			<BCardBody>
				<BRow>
					<BCol cols="12" xl="9">
						<LocationAtAGlance :location="location" class="mb-4" />
						<hr>
						<LocationMap :location="location" class="d-none d-xl-block mb-4" />
					</BCol>

					<BCol cols="12" xl="3">
						<LocationDetails :location="location" class="mb-4" />
						<hr>
					</BCol>

					<BCol cols="12">
						<LocationAmenities :location="location" />
					</BCol>
				</BRow>
			</BCardBody>
		</BCard>
	</BContainer>
</template>

<script>
	import LocationAmenities from '../components/location/LocationAmenities'
	import LocationAtAGlance from '../components/location/LocationAtAGlance'
	import LocationDetails from '../components/location/LocationDetails'
	import LocationMap from '../components/location/LocationMap'
	import locations from '../defaults/locations'

	export default {
		data() {
			return {
				locations: locations,
				location: {},
			}
		},

		components: {
			LocationAmenities,
			LocationAtAGlance,
			LocationDetails,
			LocationMap,
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