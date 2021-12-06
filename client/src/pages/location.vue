<template>
	<BContainer class="mb-5 py-5">
		{{ location }}
		{{ this.$route.params.location_id }}
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