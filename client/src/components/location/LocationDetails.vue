<template>
	<BCard bg-variant="primary" text-variant="light" class="rounded-lg shadow">
		<BRow>
			<!-- Hours of Operations -->
			<BCol cols="6" lg="12" class="pb-xl-5">
				<h6 class="text-uppercase">
					Hours
				</h6>

				<h5 class="font-weight-bold">{{ location.hoursOfOperation }}</h5>
			</BCol>

			<!-- Phone Number -->
			<BCol cols="6" xl="12" class="pb-xl-5">
				<h6 class="text-uppercase">
					Phone Number
				</h6>

				<a :href="location.contact.phone.link" class="text-light">
					<BButton variant="light" class="w-100 mb-3">
						{{ location.contact.phone.string }}
					</BButton>
				</a>
			</BCol>

			<!-- Email -->
			<BCol cols="12" class="pb-xl-5">
				<h6 class="text-uppercase">
					Email
				</h6>
			
				<a :href="location.contact.email.link" class="text-light">
					<BButton variant="light" class="w-100 mb-3">
						{{ location.contact.email.string }}
					</BButton>
				</a>
			</BCol>

			<BCol cols="12" class="pt-0">
				<h6 class="text-uppercase">
					Visit Location
				</h6>

				<a :href="googleMapsLink">
					<BButton variant="light" class="w-100">
						Open Google Maps
					</BButton>
				</a>
			</BCol>
		</BRow>
	</BCard>
</template>


<script>
	export default {
		props: {
			location: {
				type: Object,
				require: true,
			},
		},

		data() {
			return {
				googleMapsLink: 'https://maps.google.com/',
			}
		},

		created() {
			this.googleMapsLink = `https://maps.google.com/?q=${this.location.address.street} ${this.location.address.city} ${this.location.address.state} ${this.location.address.zip}`
		},
	}
</script>