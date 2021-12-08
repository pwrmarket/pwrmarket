<template>
	<BContainer class="mb-5 py-5">
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
					<BCol cols="12" xl="9" order="1" order-xl="0">
						<LocationAmenities :location="location" />
					</BCol>

					<BCol cols="12" xl="3" order="0" order-xl="1">
						<LocationDetails :location="location" class="mb-4" />
					</BCol>
				</BRow>

				<BRow>
					<BCol cols="12">
						<LocationMap :location="location" />
					</BCol>
				</BRow>
			</BCardBody>
		</BCard>
	</BContainer>
</template>

<script>
	import LocationAmenities from '../components/location/LocationAmenities'
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