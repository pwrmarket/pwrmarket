<template>
	<BContainer class="mb-5 py-5">
		<BRow>
			<BCol cols="12" xl="9">
				<LocationAmenities :location="location" />
			</BCol>

			<BCol cols="12" xl="3">
				<LocationDetails :location="location" />
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	import LocationAmenities from '../components/location/LocationAmenities'
	import LocationDetails from '../components/location/LocationDetails'
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