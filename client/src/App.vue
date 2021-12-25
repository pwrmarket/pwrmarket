<template>
	<div id="app">
		<!-- UI -->
		<NavBar />

		<!-- Desktop Spacer -->
		<div class="d-none d-xl-block" style="height: 149px;" />

		<!-- Mobile Spacer -->
		<div class="d-block d-xl-none" style="height: 96px;" />

		<!-- RouterView -->
		<RouterView />

		<!-- Footer -->
		<Footer />
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import NavBar from "@/components/nav/NavBar"
	import Footer from "@/components/nav/Footer"

	export default {
		data() {
			return {
				resData: {},
			}
		},

		components: {
			NavBar,
			Footer,
		},

		methods: {
			onResize() {
				this.$store.state.window.innerWidth = window.innerWidth
			},

			setLocation() {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						this.$store.state.app.location.latitude = position.coords.latitude
						this.$store.state.app.location.longitude = position.coords.longitude
					},
					(err) => { console.log('APP ERROR:', err.message) },
				)
			}
		},

		mounted() {
			this.$nextTick(() => {
				window.addEventListener('resize', this.onResize)
			})
		},

		beforeDestroy() { 
			window.removeEventListener('resize', this.onResize)
		},

		async created() { this.setLocation() },
	}
</script>