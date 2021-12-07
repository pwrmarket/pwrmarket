<template>
	<BCard bg-variant="primary" text-variant="light" no-body>
		<!-- Address -->
		<BCardHeader class="border-0">
			<h6 class="m-0 text-uppercase">
				Address
			</h6>
		</BCardHeader>

		<BCardBody>
			<h5 class="">
				{{ location.address.street }}<br>
				{{ location.address.city }} {{ location.address.state }}<br>
				{{ location.address.zip }}
			</h5>
		</BCardBody>

		<!-- Hours of Operations -->
		<BCardHeader class="border-0">
			<h6 class="m-0 text-uppercase">
				Hours
			</h6>
		</BCardHeader>

		<BCardBody>
			<h5 class="">{{ location.hoursOfOperation }}</h5>
		</BCardBody>

		<!-- Phone Number -->
		<BCardHeader class="border-0">
			<h6 class="m-0 text-uppercase">
				Phone Number
			</h6>
		</BCardHeader>

		<BCardBody>
			<h5 class="">{{ location.contact.phone.string }}</h5>
		</BCardBody>

		<!-- Email -->
		<BCardHeader class="border-0">
			<h6 class="m-0 text-uppercase">
				Email
			</h6>
		</BCardHeader>

		<BCardBody>
			<h5 class="">{{ location.contact.email.string }}</h5>
		</BCardBody>

		<BCardBody class="pt-0">
			<BButton variant="light" class="w-100">
				Visit Location
			</BButton>
		</BCardBody>
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
	}
</script>