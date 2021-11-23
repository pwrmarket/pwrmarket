<template>
	<BContainer
		fluid
		class="fixed-top m-0 p-0 w-100 transition"
		:class="[
			navClass,
			{ 'bg-shine-lighter border-bottom ': !$store.state.isHomePage }
		]"
	>
		<BContainer class="d-none d-xl-flex">
			<!-- Logo Holder -->
			<div
				class="d-flex justify-content-center px-5 py-4"
				style="max-width: 400px;"
			>
				<!-- Logo -->
				<RouterLink to="/">
					<img
						:src="companyInfo.fullLogo"
						alt="Logo Here"
						class="w-100"
					>
				</RouterLink>
			</div>

			<!-- Menu Links -->
			<div class="d-none d-xl-flex ml-auto h5 font-weight-bold">
				<div v-for="(r, i) in routes" :key="i" class="menu-item">
					<RouterLink
						v-if="r.meta.show"
						:to="r.path"
						class="
							h4
							my-5
							mx-3
							menu-link
						"
						:class="[
							$store.state.isHomePage ? linkClass : 'text-gradient'
						]"
						style="height: 24px;"
					>
						{{ r.meta.title }}
					</RouterLink>
				</div>
			</div>
		</BContainer>

		<!-- Mobile Menu -->
		<BContainer
			fluid
			class="d-flex d-xl-none m-0 p-0 ml-auto text-right transition"
			:class="[navClass, { 'bg-shine-lighter': !$store.state.isHomePage }]"
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
					this.navClass = 'bg-shine-lighter border-bottom'
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
	@import '../../assets/styles/override.scss';

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

	.menu-item {
		margin-top: 36px;
	}
		
	.menu-link {
		position: relative;
		
		text-decoration: none !important;
		
		transition: .3s;

		&::before {
			content: "";
			position: absolute;
			width: 100%;
			height: 2px;
			bottom: -3px;
			left: 0;
			background-color: $primary;
			visibility: hidden;
			transform: scaleX(0);
			transition: all 0.3s ease-in-out 0s;
		}

		&:hover::before {
			visibility: visible;
			transform: scaleX(1);
		}
	}

	.router-link-exact-active {
		&.menu-link {
			&::before {
				visibility: visible;
				transform: scaleX(1);
			}
		}
	}
</style>