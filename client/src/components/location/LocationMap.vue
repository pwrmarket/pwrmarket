<template>
	<div>
		<h4 class="text-primary">{{ Math.round(distance * 100) / 100 }} Miles</h4>
		
		<iframe
			width="100%"
			height="450"
			style="border:0"
			loading="lazy"
			allowfullscreen
			:src="`https://www.google.com/maps/embed/v1/place?key=AIzaSyATCfUixd68NmJufZwJv4yp_GY_a3IUF_s&q=${location.address.street}+${location.address.city}+${location.address.state}+${location.address.state}`"
		>
		</iframe>
	</div>
</template>

<script>
	export default {
		props: {
			location: {
				type: Object,
				required: true,
			},

			distance: {
				type: Number,
				required: true,
			},
		},
	}
</script>