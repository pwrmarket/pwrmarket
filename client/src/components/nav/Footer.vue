<template>
	<div class="w-100 text-light">
		<!-- WAVE -->
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
					<BCol cols="12" sm="6" md="4" class="text-center">
						<h4 class="mb-3 font-weight-bold text-light">
							Info
						</h4>

						<h5 class="mb-3 font-weight-bold text-light">
							Address
						</h5>
						<a :href="googleMapsLink" target="_blank">
							<h6 class="mb-3">
								{{ companyInfo.location.mainAddress.full }}
							</h6>
						</a>

						<h5 class="mb-3 font-weight-bold text-light">
							Call Us 24/7
						</h5>
						<a :href="companyInfo.phone.link" target="_blank">
							<h6 class="mb-3">
								{{ companyInfo.phone.number }}
							</h6>
						</a>

						<h5 class="mb-3 font-weight-bold text-light">
							Email
						</h5>
						<a :href="companyInfo.email.link" target="_blank">
							<h6 class="mb-3">
								{{ companyInfo.email.address }}
							</h6>
						</a>
					</BCol>

					<BCol cols="12" sm="6" md="4" class="text-center">
						<h4 class="mb-3 font-weight-bold text-light">
							Download Our App
						</h4>
						<DownloadOurAppSmall />

						<h4>Legal</h4>
						<ul class="list-unstyled text-small">
							<li>
								<RouterLink to="/terms-and-conditions">
									Terms & Conditions
								</RouterLink>
							</li>
							<li>
								<RouterLink to="/privacy-policy">
									Privacy & Policy Statement
								</RouterLink>
							</li>
							<li>
								<RouterLink to="/financial-incentive">
									Financial Incentive
								</RouterLink>
							</li>
						</ul>
					</BCol>

					<BCol cols="12" sm="6" md="4" class="text-center">
						<h4 class="mb-3 font-weight-bold text-light">
							Follow Us</h4>
						<SocialMediaPlug variant="primary" class="mb-3" />

						<h4 class="mb-3 font-weight-bold text-light">
							Check Us Out
						</h4>
						<ul class="list-unstyled text-small">
							<li v-for="(link, i) in routes" :key="i">
								<RouterLink v-if="link.meta.show" :to="link.path">
									<span>{{ link.meta.title }}</span>
								</RouterLink>
							</li>
						</ul>
					</BCol>

					<BCol cols="12" class="mb-3 text-center">
						<h6 class="">
							<a href="https://www.w3st.io" target="_blank">
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
	import DownloadOurAppSmall from '../../components/DownloadOurAppSmall'
	import SocialMediaPlug from '../../components/SocialMediaPlug'
	import companyInfo from '../../defaults/companyInfo'
	import { routes } from '@/router'

	export default {
		components: {
			DownloadOurAppSmall,
			SocialMediaPlug,
		},

		data() {
			return {
				companyInfo: companyInfo,
				routes: routes,
				location: '',
				googleMapsLink: '',
			}
		},

		created() {
			this.location = this.companyInfo.location.mainAddress

			this.googleMapsLink = `https://maps.google.com/?q=${this.location.street} ${this.location.city} ${this.location.state} ${this.location.zip}`
		},
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/styles/index.scss';

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