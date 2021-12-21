<template>
	<div class="mb-3 px-3 py-3 text-light bg-gradient">
		<BRow class="">
			<!-- Distance -->
			<!-- Hours of Operations -->
			<BCol cols="6" lg="12" class="pb-4">
				<h5 class="mb-3 font-weight-bold">
					<MapPinIcon /> <span class="border-bottom">Distance</span>
				</h5>

				<h5 class="">
					{{ Math.round(distance * 100) / 100 }} mi.
					<br>
					From Your Location
				</h5>
			</BCol>

			<!-- Hours of Operations -->
			<BCol cols="6" lg="12" class="pb-4">
				<h5 class="mb-3 font-weight-bold">
					<MapIcon /> Address
				</h5>

				<h5 class="">
					{{ location.address.street }}
					{{ location.address.city }} {{ location.address.state }}
					{{ location.address.zip }}
				</h5>
			</BCol>

			<!-- Hours of Operations -->
			<BCol cols="6" lg="12" class="pb-4">
				<h5 class="mb-3 font-weight-bold">
					<ClockIcon /> <span class="border-bottom">Hours</span>
				</h5>

				<h5 class="">{{ location.hoursOfOperation }}</h5>
			</BCol>

			<!-- Phone Number -->
			<BCol cols="12" class="pb-4">
				<h5 class="mb-3 font-weight-bold">
					<PhoneCallIcon /> <span class="border-bottom">Phone Number</span>
				</h5>

				<a :href="location.contact.phone.link" class="text-light">
					<BButton variant="outline-light" pill class="w-100 mb-3">
						{{ location.contact.phone.string }}
					</BButton>
				</a>
			</BCol>

			<!-- Email -->
			<BCol cols="12" class="pb-4">
				<h5 class="mb-3 font-weight-bold">
					<MailIcon /> <span class="border-bottom">Email</span>
				</h5>
			
				<a :href="location.contact.email.link" class="text-light">
					<BButton variant="outline-light" pill class="w-100 mb-3">
						{{ location.contact.email.string }}
					</BButton>
				</a>
			</BCol>

			<BCol cols="12" class="">
				<h5 class="mb-3 font-weight-bold">
					<ArrowRightIcon /> <span class="border-bottom">Visit Location</span>
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
	import { ArrowRightIcon, ClockIcon, MapPinIcon, MailIcon, MapIcon, PhoneCallIcon } from 'vue-feather-icons'
	
	export default {
		props: {
			location: {
				type: Object,
				require: true,
			},

			distance: {
				type: Number,
				required: true
			},
		},

		data() {
			return {
				googleMapsLink: 'https://maps.google.com/',
			}
		},

		components: {
			ArrowRightIcon,
			ClockIcon,
			MapPinIcon,
			MailIcon,
			MapIcon,
			PhoneCallIcon,
		},

		created() {
			this.googleMapsLink = `https://maps.google.com/?q=${this.location.address.street} ${this.location.address.city} ${this.location.address.state} ${this.location.address.zip}`
		},
	}
</script>