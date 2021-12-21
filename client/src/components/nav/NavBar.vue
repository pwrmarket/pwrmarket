<template>
	<BContainer
		fluid
		class="fixed-top m-0 p-0 w-100 border-secondary transition"
		:class="[
			navClass,
			// Remove fade effect by having it on always
			{ 'bg-frost-lighter border-bottom': !$store.state.isHomePage }
		]"
		style="border-width: 4px !important;"
	>
		<BContainer class="d-none d-xl-flex">
			<!-- Logo Holder -->
			<div class="d-flex justify-content-center py-4">
				<!-- Logo -->
				<RouterLink to="/" class="text-decoration-none">
					<div class="logo-container">
						<img :src="companyInfo.logo" class="w-100" style="max-width: 60px;">
					
						<div class="text-holder">
							<img :src="companyInfo.fullLogo" class="w-100" style="max-width: 350px;">
						</div>
					</div>
				</RouterLink>
			</div>

			<!-- Menu Links -->
			<div class="d-none d-xl-flex ml-auto h5 font-weight-bold">
				<div v-for="(r, i) in routes" :key="i" class="menu-item">
					<RouterLink
						v-if="r.meta.show && r.meta.altLink == ''"
						:to="r.path"
						class="
							h5
							my-5
							mx-3
							menu-item-link
						"
						:class="[
							$store.state.isHomePage ? linkClass : 'text-gradient'
						]"
						style="height: 24px;"
					>
						{{ r.meta.title }}
					</RouterLink>

					<a
						v-if="r.meta.show && r.meta.altLink !== ''"
						:href="r.meta.altLink"
						target="_blank"
						class="
							h5
							my-5
							mx-3
							menu-item-link
						"
						:class="[
							$store.state.isHomePage ? linkClass : 'text-gradient'
						]"
						style="height: 24px;"
					>
						{{ r.meta.title }}
					</a>
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
					variant="outline-secondary"
					class="px-4 px-sm-5 py-4 border-0"
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
					this.navClass = 'bg-frost-lighter border-bottom'
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
	@import '../../assets/styles/index.scss';

	.transition {
		-webkit-transition: 0.5s;
		transition: 0.5s;
	}

	.nav {
		z-index: 100;
	}

	.logo-container {
		display: flex;
		align-items: center;
		justify-content: center;

		.text-holder  {
			padding-left: 15px;
			font-size: 20px;
		}
	}

	.menu-item {
		margin-top: 36px;
	
		.menu-item-link {
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
			&.menu-item-link {
				&::before {
					visibility: visible;
					transform: scaleX(1);
				}
			}
		}
	}
		
</style>