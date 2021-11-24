<template>
	<div>
		<!-- All Sliders -->
		<div v-for="(slider, i) in sliders" :key="i">
			<VueTinySlider v-bind="slider.options" :class="slider.class">
				<!-- All Images -->
				<div
					v-for="(img, ii) in images"
					:key="ii"
					class="text-center"
					style="min-width: 200px;"
				>
					<div class="image-holder" style="min-height: 100px;">
						<img :src="img" class="" style="max-width: 100%;">
					</div>
				</div>
			</VueTinySlider>
		</div>
	</div>
</template>

<script>
	import VueTinySlider from 'vue-tiny-slider'

	export default {
		props: {
			images: {
				type: Array,
				required: true,
			},

			totalOnLg: {
				type: Number,
				default: 4
			},
		},

		components: {
			VueTinySlider
		},

		data() {
			return {
				sliders: [
					// LG
					{
						class: 'd-none d-lg-block my-3',
						options: {
							items: this.totalOnLg,
							gutter: 20,
							nav: false,
							controls: false,
							loop: true,
							autoplay: true,
							autoplayButtonOutput: false,
							autoplayTimeout: 2000,
						},
					},
					// MD
					{
						class: 'd-none d-md-block d-lg-none my-3',
						options: {
							items: this.totalOnLg - 1,
							gutter: 20,
							nav: false,
							controls: false,
							loop: true,
							autoplay: true,
							autoplayButtonOutput: false,
							autoplayTimeout: 2000,
						},
					},
					// SM
					{
						class: 'd-none d-sm-block d-md-none my-3',
						options: {
							items: this.totalOnLg - 2,
							gutter: 20,
							nav: false,
							controls: false,
							loop: true,
							autoplay: true,
							autoplayButtonOutput: false,
							autoplayTimeout: 2000,
						},
					},
					// XS
					{
						class: 'd-block d-sm-none my-3',
						options: {
							items: this.totalOnLg - 3,
							gutter: 20,
							nav: false,
							controls: false,
							loop: true,
							autoplay: true,
							autoplayButtonOutput: false,
							autoplayTimeout: 2000,
						},
					},
				],
			}
		},
	}
</script>

<style lang="scss">
	.image-holder {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>