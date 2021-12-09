<template>
	<div class="mb-3 px-3 py-3 text-light bg-gradient-weak">
		<BRow class="text-center">
			<!-- Hours of Operations -->
			<BCol cols="6" lg="12" class="pb-xl-4">
				<h5 class="mb-3 font-weight-bold">
					Hours
				</h5>

				<h5 class="">{{ location.hoursOfOperation }}</h5>
			</BCol>

			<!-- Phone Number -->
			<BCol cols="6" xl="12" class="pb-xl-4">
				<h5 class="mb-3 font-weight-bold">
					Phone Number
				</h5>

				<a :href="location.contact.phone.link" class="text-light">
					<BButton variant="light" size="" class="w-100 mb-3">
						{{ location.contact.phone.string }}
					</BButton>
				</a>
			</BCol>

			<!-- Email -->
			<BCol cols="12" class="pb-xl-4">
				<h5 class="mb-3 font-weight-bold">
					Email
				</h5>
			
				<a :href="location.contact.email.link" class="text-light">
					<BButton variant="light" size="" class="w-100 mb-3">
						{{ location.contact.email.string }}
					</BButton>
				</a>
			</BCol>

			<BCol cols="12" class="pt-0">
				<h5 class="mb-3 font-weight-bold">
					Visit Location
				</h5>

				<a :href="googleMapsLink">
					<BButton variant="light" size="" class="w-100">
						Open Google Maps
					</BButton>
				</a>
			</BCol>
		</BRow>
	</div>
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