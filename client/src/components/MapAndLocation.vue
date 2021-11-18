<template>
	<BRow class="m-0 p-0">
		<BCol cols="12" lg="4" order-lg="1" class="text-light bg-secondary">
			<div class="p-xl-5">
				<div class="px-xl-3 py-xl-5">
					<div class="px-lg-3 py-lg-4 text-center">
						<div class="px-2 py-5 px-lg-0 py-lg-0">
							<h1 class="mb-4">Our Location</h1>
							<h3 class="mb-4">
								{{ companyInfo.address }}
							</h3>

							<a :href="companyInfo.googleMapsLink" target="_blank">
								<BButton variant="light" size="lg" class="my-5">
									<h4 class="m-0">
										<MapPinIcon size="1x" variant="dark" />
										Google Maps
									</h4>
								</BButton>
							</a>
						</div>
					</div>
				</div>
			</div>
		</BCol>

		<BCol cols="12" lg="8" order-lg="0" class="m-0 p-0">
			<iframe
				:src="companyInfo.googleMapsEmbedLink"
				width="100%"
				height="100%"
				style="border: 0; min-height: 400px;"
				loading="lazy"
			></iframe>
		</BCol>			
	</BRow>
</template>

<script>
	// [IMPORT] //
	import { MapPinIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import companyInfo from '@/defaults/companyInfo'

	export default {
		components: {
			MapPinIcon,
		},

		data() {
			return {
				companyInfo,
			}
		},
	}
</script>