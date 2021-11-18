<template>
	<viewer
		:options="{ title: false, transition: false, }"
		class="text-center"
	>
		<BRow v-if="isHomePage" class="m-0 p-0">
			<BCol
				v-for="(img, i) in images"
				:key="i"
				cols="6" sm="4" md="3"
				class="m-0 p-0"
			>
				<img :src="img" class="w-100" :class="{ 'd-none': i >= 4 && isHomePage }">
			</BCol>
		</BRow>

		<BRow v-if="!isHomePage" class="m-0 p-0">
			<BCol
				v-for="(img, i) in images"
				:key="i"
				cols="12" sm="6" md="6" lg="4" xl="3"
				class="m-0 p-0"
			>
				<div class="img-holder mx-3 my-4 shadow" data-aos="fade-up">
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

		isHomePage: {
			type: Boolean,
			default: false
		}
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