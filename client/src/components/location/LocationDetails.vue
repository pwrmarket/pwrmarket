<template>
	<BCard bg-variant="gradient " text-variant="light" class="rounded-lg mb-3 ">
		<BRow class="text-center">
			<!-- Hours of Operations -->
			<BCol cols="6" lg="12" class="pb-xl-4">
				<h6 class="mb-3">
					Hours
				</h6>

				<h5 class="font-weight-bold">{{ location.hoursOfOperation }}</h5>
			</BCol>

			<!-- Phone Number -->
			<BCol cols="6" xl="12" class="pb-xl-4">
				<h6 class="mb-3">
					Phone Number
				</h6>

				<a :href="location.contact.phone.link" class="text-light">
					<BButton variant="outline-light" class="w-100 mb-3">
						{{ location.contact.phone.string }}
					</BButton>
				</a>
			</BCol>

			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20000!2d-73.990738!3d40.9033556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1486486434098"
				width="600"
				height="450"
				style="border:0;"
				allowfullscreen=""
				loading="lazy"
			></iframe>

			<!-- Email -->
			<BCol cols="12" class="pb-xl-4">
				<h6 class="mb-3">
					Email
				</h6>
			
				<a :href="location.contact.email.link" class="text-light">
					<BButton variant="outline-light" class="w-100 mb-3">
						{{ location.contact.email.string }}
					</BButton>
				</a>
			</BCol>

			<BCol cols="12" class="pt-0">
				<h6 class="mb-3">
					Visit Location
				</h6>

				<a :href="googleMapsLink">
					<BButton variant="outline-light" class="w-100">
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