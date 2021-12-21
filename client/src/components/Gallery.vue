<template>
	<viewer
		:options="{ title: false, transition: false, }"
		class="text-center"
	>
		<BRow class="m-0 p-0">
			<BCol
				v-for="(img, i) in images"
				:key="i"
				cols="12" sm="6" md="6" lg="4" xl="3"
				class="m-0 p-0"
			>
				<div
					class="img-holder shadow"
					data-aos="fade-up"
					data-aos-once="true"
				>
					<img
						:src="img"
						v-lazy="img"
						alt="No Photo"
					>
				</div>
			</BCol>
		</BRow>
	</viewer>
</template>

<script>
export default {
	props: {
		images: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
	.img-holder {
		height: 200px;
		overflow: hidden;

		img {
			float: left;
			width:  100%;
			height: 200px;
			object-fit: cover;
		}
	}
</style>