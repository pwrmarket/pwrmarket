<template>
	<BContainer
		fluid
		class="m-0 p-0 w-100 fixed-top transition"
		:class="[navClass, { 'bg-light': !$store.state.isHomePage }]"
	>
		<BContainer class="d-none d-xl-flex">
			<!-- Logo Holder -->
			<div
				class="d-flex justify-content-center px-5 py-3"
				style="max-width: 202px;"
			>
				<!-- Logo -->
				<RouterLink to="/">
					<img
						:src="companyInfo.logo"
						alt="Logo Here"
						class="w-100"
					>
				</RouterLink>
			</div>

			<!-- Menu Links -->
			<div class="d-none d-xl-flex ml-auto">
				<RouterLink
					v-for="(r, i) in routes"
					:key="i"
					:to="r.path"
				>
					<BButton
						v-if="r.meta.show"
						variant="none"
						class="
							mx-1 mx-md-2 mx-lg-2 mx-xl-3 my-5
							font-weight-bold
							h4
							menu-link
						"
						:class="[
							$store.state.isHomePage ? linkClass : 'text-gradient'
						]"
					>{{ r.meta.title }}</BButton>
				</RouterLink>
			</div>
		</BContainer>

		<!-- Mobile Menu -->
		<BContainer
			fluid
			class="d-flex d-xl-none m-0 p-0 ml-auto text-right transition"
			:class="[navClass, { 'bg-white': !$store.state.isHomePage }]"
		>
			<!-- Logo Holder -->
			<div
				class="d-flex justify-content-center px-5 py-3"
				style="max-width: 160px;"
			>
				<!-- Logo -->
				<RouterLink to="/">
					<div class="rounded-lg">
						<img
							:src="companyInfo.logo"
							alt="Logo Here"
							class="w-100"
						>
					</div>
				</RouterLink>
			</div>
			
			<div class="ml-auto">
				<!-- [HIDDEN] Menu Button -->
				<BButton
					variant="none"
					class="px-4 px-sm-5 py-4"
					:class="[
						$store.state.isHomePage ? linkClass : 'text-gradient'
					]"
					@click="toggle()"
				><MenuIcon size="3x" /></BButton>
			</div>
		</BContainer>

		<!-- Hidden Side Menu -->
		<SideMenu />
	</BContainer>
</template>

<script>
	// [IMPORT] //
	import { MenuIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import SideMenu from '@/components/nav/SideMenu'
	import companyInfo from '@/defaults/companyInfo'
	import router, { routes } from '@/router'

	export default {
		components: {
			MenuIcon,
			SideMenu,
		},

		data() {
			return {
				linkClass: 'text-light',
				navClass: '',
				companyInfo: companyInfo,
				routes: routes,
				loggedIn: false,
				decoded: {},
				sideMenuOpen: false,router:router
			}
		},

		methods: {
			handleScroll() {
				// Not Scrolled //
				if (window.scrollY > 0) {
					this.navClass = 'bg-light'
					this.linkClass = 'text-gradient'
				}
				else {
					this.navClass = ''
					this.linkClass = 'text-light'
				}
			},

			toggle() { this.$store.state.showMenu = !this.$store.state.showMenu },
		},

		created() {
			window.addEventListener('scroll', this.handleScroll)
		},
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/styles/bootstrap-override.scss';

	.transition {
		-webkit-transition: 0.5s;
		transition: 0.5s;
	}

	.nav {
		z-index: 100;
	}

	.text-gradient {
		background: $secondary;
		background: -webkit-linear-gradient($primary, $secondary);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-text-fill-color: transparent;
	}

	.menu-link {
		:hover {
			@extend .text-primary;
		}
	}

	.router-link-exact-active {
		.menu-link {
			@extend .border-primary;
			@extend .border-bottom;
			@extend .border-top-0;
			@extend .border-left-0;
			@extend .border-right-0;

			border-width: 40px;
			box-shadow: 0 !important;
		}
	}
</style>