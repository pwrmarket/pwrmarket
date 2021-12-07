<template>
	<BCard bg-variant="primary" text-variant="light" class="rounded-lg shadow">
		<BRow>
			<!-- Hours of Operations -->
			<BCol cols="6" xl="12" class="pb-xl-5">
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

				<h5 class="font-weight-bold">{{ location.contact.phone.string }}</h5>
			</BCol>

			<!-- Email -->
			<BCol cols="12" class="pb-xl-5">
				<h6 class="text-uppercase">
					Email
				</h6>
			
				<h5 class="font-weight-bold">{{ location.contact.email.string }}</h5>
			</BCol>

			<BCol cols="12" class="pt-0">
				<a :href="googleMapsLink">
					<BButton variant="light" class="w-100">
						Visit Location
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
				googleMapsLink: ``,
			}
		},

		created() {
			this.googleMapsLink = `https://maps.google.com/?q=${this.location.address.street} ${this.location.address.city} ${this.location.address.state} ${this.location.address.zip}`
		},
	}
</script>