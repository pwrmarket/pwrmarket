<template>
	<div class="">
		<nav
			class="bg-light shadow nav-drawer-menu"
			:class="{ 'is-open': $store.state.showMenu }"
		>
			<!-- Close Button -->
			<BButton
				v-show="$store.state.showMenu"
				variant="secondary"
				class="w-100 mb-2 p-4 text-white"
				@click="closeMenu()"
			><XIcon size="36" /></BButton>

			<!-- Menu Items -->
			<BButton
				v-for="(button, i) in buttons"
				:key="i"
				v-show="$store.state.showMenu"
				variant="outline-seconadry"
				class="w-100 text-primary"
				@click="menuItemClicked(button.path)"
			>{{ button.text }}</BButton>

			<a v-show="$store.state.showMenu" :href="companyInfo.googleMapsLink" class="text-center">
				<h5 class="m-4 text-secondary">{{ companyInfo.address }}</h5>
			</a>

			<SocialMediaPlug
				v-show="$store.state.showMenu"
				size="1.8x"
				variant="secondary"
				class="m-4"
			/>
			<br><br><br><br><br>

		</nav>

		<transition name="fade">
			<div
				v-if="$store.state.showMenu"
				class="backdrop w-100"
				@click="closeMenu()"
			></div>
		</transition>
	</div>
</template>

<script>
	// [IMPORT] //
	import { XIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import SocialMediaPlug from '@/components/SocialMediaPlug'
	import companyInfo from '@/defaults/companyInfo'
	import buttons from '@/defaults/pageLinks'
	import router from '@/router'

	// [EXPORT] //
	export default {
		components: {
			XIcon,
			SocialMediaPlug,
		},

		data() {
			return {
				companyInfo: companyInfo,
				buttons: buttons,
			}
		},

		methods: {
			closeMenu() {
				this.$store.state.showMenu = !this.$store.state.showMenu
			},

			menuItemClicked(path) {	
				router.push(path)
				this.closeMenu()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav-drawer-menu {
		z-index: 2000;

		position: fixed;
		top: 0;
		left: 0;

		height: 100vh;
		width: 0;

		overflow-x: hidden;
		transition: 0.5s;
	}

	.nav-drawer-menu button {
		transition: 0.3s;
		font-size: 2em;

		&:hover { background: hsla(0, 0%, 0%, 0.356); }
	}

	.is-open { width: 75%; }
		
	.backdrop {
		z-index: 1999;

		position: fixed;
		top: 0;
		right: 0;

		height: 100vh;
		width: 0;

		overflow-x: hidden;

		background: rgba(255, 255, 255, 0.1);

		backdrop-filter: blur(6px);
	}
</style>