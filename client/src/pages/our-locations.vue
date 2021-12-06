<template>
	<BContainer class="mb-5 py-5">
		<BRow>
			<BCol cols="12">
				<h1 class="mb-5 text-center text-primary">Our Locations</h1>
			</BCol>

			<BCol v-for="(l, i) in locations" :key="i" cols="12" md="6" lg="4">
				<RouterLink :to="`/location/${l.id}`">
					<BCard border-variant="secondary" class="mb-3">
						<h6 class="text-secondary">
							{{ l.address.street }}<br>
							{{ l.address.city }} {{ l.address.state }}<br>
							{{ l.address.zip }}<br>
						</h6>
						<h6 class="m-0 text-primary">
							{{ l.hoursOfOperation }}
						</h6>
					</BCard>
				</RouterLink>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	import locations from '../defaults/locations'

	export default {
		data() {
			return {
				locations: locations,
			}
		},
	}
</script>