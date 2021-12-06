<template>
	<div class="w-100 text-light">
		<section class="main-section">
			<div class="wave">
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path
						d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
						class="shape-fill"
					></path>
				</svg>
			</div>
		</section>

		<BContainer fluid class="bg-secondary-light">
			<BContainer class="">
				<BRow class="pt-4">
					<BCol cols="12" class="text-center" data-aos="fade">
						<RouterLink to="/" class="text-decoration-none">
							<h4 class="m-0 text-primary">
								{{ companyInfo.companyName }}
							</h4>
							<h6 v-html="companyInfo.companyCaption1" class="text-primary small">
							</h6>
							<hr>
						</RouterLink>
					</BCol>

					<BCol cols="12" sm="4" class="text-center text-sm-left">
						<h4 class="text-primary">Location</h4>
						<a :href="companyInfo.googleMapsLink" class="mb-3 text-white">
							<h5 class="mb-4">{{ companyInfo.address }}</h5>
						</a>

						<h4 class="text-primary">Hours</h4>
						<ul class="list-unstyled text-small text-light">
							<li
								v-for="(hoo, index) in companyInfo.hoursOfOperation"
								:key="index"
							>
								<span class="text-primary">{{ hoo.days }}:</span>
								{{ hoo.hours }}
							</li>
						</ul>
						<hr>
					</BCol>

					<BCol cols="12" sm="4" class="text-center">
						<h4 class="text-primary">Check Us Out</h4>
						<ul class="list-unstyled text-small">
							<li v-for="(link, i) in routes" :key="i">
								<RouterLink v-if="link.meta.show" to="/services" class="text-light">
									<span>{{ link.meta.title }}</span>
								</RouterLink>
							</li>
						</ul>
						<hr>
					</BCol>

					<BCol cols="12" sm="4" class="text-center">
						<h4 class="text-primary">Follow Us</h4>
						<SocialMediaPlug variant="light" />
					</BCol>

					<BCol cols="12" class="my-3 text-center">
						<h6 class="">
							<a href="https://www.w3st.io" target="_blank" class="text-light">
							© w3st.io {{ new Date().getFullYear() }}
							</a>
						</h6>
						<br><br><br><br><br>
					</BCol>
				</BRow>
			</BContainer>
		</BContainer>
	</div>
</template>

<script>
	import SocialMediaPlug from '../../components/SocialMediaPlug'
	import companyInfo from '../../defaults/companyInfo'
	import { routes } from '@/router'

	export default {
		components: {
			SocialMediaPlug
		},

		data() {
			return {
				companyInfo: companyInfo,
				routes: routes,
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/styles/style.scss';

	.main-section {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 0px;
	}

	.wave {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
		transform: rotate(180deg);

		svg {
			position: relative;
			display: block;
			width: calc(100% + 1.3px);
			height: 100px;
		}

		.shape-fill {
			fill: $secondary-light
		}
	}
</style>