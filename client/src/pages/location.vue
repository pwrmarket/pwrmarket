<template>
	<BContainer fluid class="mb-6 p-0 pb-5">
		<div class="py-5 text-light bg-gradient">
			<h2 class="m-0 text-center">
				{{ location.amenities[1].name }} {{ location.id }}
			</h2>
		</div>

		<BContainer class="py-4">
			<BRow>
				<BCol cols="12" xl="9">
					<LocationAtAGlance :location="location" class="mb-4" />
					<LocationMap
						:location="location"
						:distance="distance"
						class="d-none d-xl-block mb-4"
					/>
				</BCol>

				<BCol cols="12" xl="3">
					<LocationDetails
						:location="location"
						:distance="distance"
						class="mb-4"
					/>
					<hr>
				</BCol>

				<BCol cols="12">
					<LocationAmenities :location="location" />
				</BCol>
			</BRow>
		</BContainer>
	</BContainer>
</template>

<script>
	import LocationAmenities from '../components/location/LocationAmenities'
	import LocationAtAGlance from '../components/location/LocationAtAGlance'
	import LocationDetails from '../components/location/LocationDetails'
	import LocationMap from '../components/location/LocationMap'
	import locations from '../defaults/locations'
	import tools_distance from '../tools/distance'

	export default {
		data() {
			return {
				locations: locations,
				location: {},
				distance: 0,
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

			this.distance = tools_distance.caculateBetweenCoordinates(
				this.location.location.latitude,
				this.location.location.longitude,
				this.$store.state.app.location.latitude,
				this.$store.state.app.location.longitude,
			)
		},
	}
</script>