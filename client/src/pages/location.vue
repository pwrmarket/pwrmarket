<template>
	<BContainer fluid class="mb-6 p-0 pb-5">
		<TitleHeader
			:imageURL="require('../assets/images/slider/slide7.jpg')"
			:text="`${location.amenities[1].name} ${location.id}`"
		/>

		<BContainer class="content py-4">
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
	import TitleHeader from '../components/UI/TitleHeader.vue'
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
			TitleHeader,
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

<style lang="scss" scoped>
	.content {
		-webkit-transform: translateY(-80px);
		transform: translateY(-80px);
	}	
</style>