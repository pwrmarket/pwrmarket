<template>
	<div
		class="center"
		style="height: 360px; overflow: hidden;"
		:style="`
			background-image: url(${imageURL});
			background-size: 100%;
		`"
	>
		<div
			class="py-0 w-100 h-100 center"
			:class="[frost ? 'bg-frost-shade' : 'bg-shade' ]"
		>
			<h1
				class="my-3 text-center text-light"
				style="font-size: 3.5em;"
				data-aos="fade"
			>{{ text }}</h1>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		imageURL: {
			type: String,
			required: true,
		},

		text: {
			type: String,
			required: true,
		},

		frost: {
			type: Boolean,
			default: true,
		},
	}
}
</script>

<style lang="scss" scoped>
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>