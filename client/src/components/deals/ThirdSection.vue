<template>
<BContainer class="offset-content">
	<BRow class="m-0 p-0">
		<BCol
			v-for="(d, i) in deals"
			:key="i"
			cols="12" xl="6"
			class="d-flex pb-5 align-items-stretch"
		>
			<BCard no-body border-variant="secondary" class="w-100 border-0 shadow">
				<BCardBody class="img-container p-0 text-center">
					<img
						:src="d.img"
						v-lazy="d.img"
						alt="Image"
						class="w-100 deal-img"
					/>
				</BCardBody>
			</BCard>
		</BCol>

		<BCol cols="12" xl="4" class="mx-auto">
			<BCard class="mb-4 shadow bg-gradient rounded-0">
				<BCardBody class="p-1 h-100 title-col">
					<DownloadOurApp small />
				</BCardBody>
			</BCard>
		</BCol>
	</BRow>
</BContainer>	
</template>

<script>
	import DownloadOurApp from '@/components/DownloadOurApp.vue'

	export default {
		props: {
			deals: {
				type: Array,
			}
		},

		components: { DownloadOurApp, },
	}
</script>


<style lang="scss" scoped>

</style>