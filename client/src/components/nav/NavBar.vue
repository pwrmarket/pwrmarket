<template>
	<div class="w-100 fixed-top">
		<!-- Desktop Menu -->
		<div
			class="d-none d-xl-flex w-100 transition"
			:class="[navClass, { 'bg-secondary': !$store.state.isHomePage }]"
		>
			<div class="ml-auto">
				<RouterLink to="/">
					<BButton
						variant="none"
						class="mx-1 mx-md-2 mx-lg-2 mx-xl-3 py-5 text-white font-weight-bold text-uppercase menu-link"
						:class="titleClass"
					><h4 class="m-0">Home</h4></BButton>
				</RouterLink>

				<RouterLink to="/menu">
					<BButton
						variant="none"
						class="mx-1 mx-md-2 mx-lg-2 mx-xl-3 py-5 text-white font-weight-bold text-uppercase menu-link"
						:class="titleClass"
					><h4 class="m-0">Menu</h4></BButton>
				</RouterLink>

				<RouterLink to="/contact" class="">
					<BButton
						variant="none"
						class="mx-1 mx-md-2 mx-lg-2 mx-xl-3 py-5 text-white font-weight-bold text-uppercase menu-link"
						:class="titleClass"
					><h4 class="m-0">Contact</h4></BButton>
				</RouterLink>
			</div>

			<div class="w-100 px-5 py-3" style="max-width: 250px;">
				<RouterLink to="/">
					<img
						:src="''"
						alt="Logo Here"
						class="w-100"
					>
				</RouterLink>
			</div>

			<div class="mr-auto">
				<RouterLink to="/about" class="">
					<BButton
						variant="none"
						class="mx-1 mx-md-2 mx-lg-2 mx-xl-3 py-5 text-white font-weight-bold text-uppercase menu-link"
						:class="titleClass"
					><h4 class="m-0">About</h4></BButton>
				</RouterLink>

				<RouterLink to="/gallery" class="">
					<BButton
						variant="none"
						class="mx-1 mx-md-2 mx-lg-2 mx-xl-3 py-5 text-white font-weight-bold text-uppercase menu-link"
						:class="titleClass"
					><h4 class="m-0">Gallery</h4></BButton>
				</RouterLink>

				<RouterLink to="/follow-us" class="">
					<BButton
						variant="none"
						class="mx-1 mx-md-2 mx-lg-2 mx-xl-3 py-5 text-white font-weight-bold text-uppercase menu-link"
						:class="titleClass"
					><h4 class="m-0">Follow Us</h4></BButton>
				</RouterLink>
			</div>
		</div>

		<!-- Mobile Menu -->
		<div
			class="d-flex d-xl-none m-0 p-0 text-right bg-shade-darker transition"
			:class="[navClass, { 'bg-dark': !$store.state.isHomePage }]"
		>
			<div class="text-center w-100 px-3 py-3" style="max-width: 130px;">
				<RouterLink to="/">
				<img
					:src="''"
					alt="Logo Here"
					class="w-100"
				>
				</RouterLink>
			</div>

			<div class="ml-auto">
				<!-- [HIDDEN] Google Maps Icon -->
				<a :href="companyInfo.googleMapsLink" target="_blank">
				<BButton
					variant="primary"
					class="ml-auto h-100 px-3 text-light"
				><MapPinIcon size="2x" /></BButton>
				</a>

				<!-- [HIDDEN] Menu Button -->
				<BButton
					variant="none"
					class="px-4 px-sm-5 text-light"
					@click="toggle()"
				><MenuIcon size="3x" /></BButton>
			</div>
		</div>

		<!-- Hidden Side Menu -->
		<SideMenu />
	</div>
</template>

<script>
	// [IMPORT] //
	import { MenuIcon, MapPinIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import SideMenu from '@/components/nav/SideMenu'
	import companyInfo from '@/defaults/companyInfo'
	import buttons from '@/defaults/pageLinks'
	import router from '@/router'

	export default {
		components: {
			MenuIcon,
			MapPinIcon,
			SideMenu,
		},

		data() {
			return {
				titleClass: '',
				navClass: '',
				companyInfo: companyInfo,
				buttons: buttons,
				loggedIn: false,
				decoded: {},
				sideMenuOpen: false,router:router
			}
		},

		methods: {
			toggle() { this.$store.state.showMenu = !this.$store.state.showMenu },

			handleScroll() {
				if (window.scrollY > 0) {
					this.navClass = 'bg-shade-darker'
					this.titleClass = 'text-white'
				}
				else {
					this.navClass = ''
					this.titleClass = ''
				}
			},
		},

		created() {
			window.addEventListener('scroll', this.handleScroll)
		},
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/styles/bootstrap-override.scss';

	.transition {
		transition: .5s;
	}

	.nav {
		z-index: 100;
	}

	.menu-link {
		:hover {
			@extend .text-primary;
		}
	}

	.router-link-exact-active {
		.menu-link {
			@extend .border-primary;
			@extend .border-top-0;
			@extend .border-left-0;
			@extend .border-right-0;

			box-shadow: 0 !important;
		}
	}
</style>