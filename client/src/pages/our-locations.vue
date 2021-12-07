<template>
	<BContainer class="mb-5 py-5">
		<BRow>
			<BCol cols="12">
				<h1 class="mb-5 text-center text-primary">Our Locations</h1>
			</BCol>

			<BCol
				v-for="(l, i) in locations"
				:key="i"
				cols="12" md="6" lg="4"
				class="d-flex align-items-stretch"
			>
				<BCard
					bg-variant="secondary"
					border-variant=""
					text-variant="light"
					class="w-100 mb-4"
				>
					<RouterLink :to="`/location/${l.id}`" class="w-100">
						<h5 class="text-light">
							{{ l.address.street }}
							{{ l.address.city }} {{ l.address.state }}
							{{ l.address.zip }}
						</h5>
						<h6 class="m-0">
							{{ l.hoursOfOperation }}
						</h6>
					</RouterLink>
				</BCard>
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