<template>
	<BContainer
		fluid
		class="fixed-top m-0 p-0 w-100 bg-light-frost border-bottom"
	>
		<!-- [MENU][1] -->
		<div class="d-none d-xl-flex py-2 bg-gradient">
			<BContainer>
				<BRow>
					<BCol cols="6" class="text-right">
						<div v-for="(r, i) in routes" :key="i" class="d-inline">
							<RouterLink
								v-if="r.meta.menu == 1 && r.meta.altLink == ''"
								:to="r.path"
								class="
									h6
									mx-3
									text-light
									menu-item-link
									text-uppercase
								"
								style="height: 24px;"
							>
								{{ r.meta.title }}
							</RouterLink>

							<a
								v-if="r.meta.menu == 1 && r.meta.altLink !== ''"
								:href="r.meta.altLink"
								target="_blank"
								class="
									h6
									mx-3
									text-light
									menu-item-link
									text-uppercase
								"
								style="height: 24px;"
							>
								{{ r.meta.title }}
							</a>
						</div>
					</BCol>

					<BCol cols="6">
						<SocialMediaPlug align="right" />
					</BCol>
				</BRow>
			</BContainer>
		</div>
		
		<!-- [MENU][2] -->
		<BContainer class="d-none d-xl-flex">
			<!-- [LOGO] Logo Holder -->
			<div class="d-flex justify-content-center py-4">
				<!-- Logo -->
				<RouterLink to="/" class="text-decoration-none">
					<div class="logo-container">
						<img :src="companyInfo.logo" class="w-100" style="max-width: 60px;">
					
						<div class="text-holder">
							<img :src="companyInfo.fullLogo" class="w-100 full-logo">
						</div>
					</div>
				</RouterLink>
			</div>

			<!-- [MENU-LINKS] -->
			<div class="d-none d-xl-flex ml-auto h5 font-weight-bold">
				<div v-for="(r, i) in routes" :key="i" class="menu-item">
					<RouterLink
						v-if="r.meta.menu == 2 && r.meta.altLink == ''"
						:to="r.path"
						class="
							h6
							my-5
							mx-3
							menu-item-link
							text-gradient
							text-uppercase
						"
						style="height: 24px;"
					>
						{{ r.meta.title }}
					</RouterLink>

					<a
						v-if="r.meta.menu == 2 && r.meta.altLink !== ''"
						:href="r.meta.altLink"
						target="_blank"
						class="
							h6
							my-5
							mx-3
							menu-item-link
							text-gradient
							text-uppercase
						"
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
			:class="[navClass, { 'bg-light': !$store.state.isHomePage }]"
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
					class="px-4 px-sm-5 py-4 border-0 text-gradient"
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
	import SocialMediaPlug from '../../components/SocialMediaPlug'
	import companyInfo from '@/defaults/companyInfo'
	import router, { routes } from '@/router'

	export default {
		components: {
			MenuIcon,
			SideMenu,
			SocialMediaPlug,
		},

		data() {
			return {
				navClass: '',
				companyInfo: companyInfo,
				routes: routes,
				loggedIn: false,
				decoded: {},
				sideMenuOpen: false,router:router
			}
		},

		methods: {
			toggle() { this.$store.state.showMenu = !this.$store.state.showMenu },
		},

		created() {
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

	.full-logo {
		max-width: 380px;

		@media (max-width: 1600px) {
			max-width: 300px;
		}
	}
		
</style>