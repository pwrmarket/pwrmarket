<template>
	<BContainer class="mb-5 py-5">
		<BCard no-body bg-variant="white" class="shadow">
			<BCardHeader class="bg-gradient">
				<h1 class="my-3 text-center text-light">Our Locations</h1>
			</BCardHeader>
			
			<BCardBody>
				<BRow>
					<BCol
						v-for="(l, i) in locations"
						:key="i"
						cols="12" md="6" lg="4" xl="3"
						class="d-flex align-items-stretch"
					>
						<RouterLink :to="`/location/${l.id}`" class="w-100 py-3 text-decoration-none">
							<BCard
								bg-variant="bg-img"
								text-variant="dark"
								class="w-100 h-100 mb-4 location-card"
							>
									<h5 class="text-primary">
										{{ l.address.street }}
										{{ l.address.city }} {{ l.address.state }}
										{{ l.address.zip }}
									</h5>
									<h6 class="text-secondary m-0">
										{{ l.hoursOfOperation }}
									</h6>
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
				locations: locations,
			}
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