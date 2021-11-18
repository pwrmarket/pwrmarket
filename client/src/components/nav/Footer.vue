<template>
	<div class="w-100 bg-dark text-secondary">
		<BContainer>
			<BRow class="pt-4">
				<BCol cols="12" class="text-center" data-aos="fade">
					<RouterLink to="/" class="text-decoration-none">
						<h4 class="m-0 text-primary">
							{{ companyInfo.companyName }}
						</h4>
						<h6 v-html="companyInfo.companyCaption1" class="text-light small">
						</h6>
						<hr>
					</RouterLink>
				</BCol>

				<BCol cols="12" sm="4" class="text-center text-sm-left" data-aos="fade-up">
					<h4 class="text-primary">Location</h4>
					<a :href="companyInfo.googleMapsLink" class="mb-3 text-white">
						<h5 class="mb-4">{{ companyInfo.address }}</h5>
					</a>

					<h4 class="text-primary">Hours</h4>
					<ul class="list-unstyled text-small text-white">
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

				<BCol cols="12" sm="4" class="text-center" data-aos="fade-up">
					<h4 class="text-primary">Check Us Out</h4>
					<ul class="list-unstyled text-small">
						<li v-for="(link, i) in pageLinks" :key="i">
							<RouterLink to="/services" class="text-white">
								<span v-if="link.text">{{ link.text }}</span>
								<span v-else v-html="link.navIcon"></span>
							</RouterLink>
						</li>
					</ul>
					<hr>
				</BCol>

				<BCol cols="12" sm="4" class="text-center" data-aos="fade-up">
					<h4 class="text-primary">Follow Us</h4>
					<SocialMediaPlug variant="light" />
				</BCol>

				<BCol cols="12" class="my-3 text-center">
					<h6 class="">
						<a href="https://www.w3st.io" target="_blank" class="text-secondary">
						© w3st.io {{ new Date().getFullYear() }}
						</a>
					</h6>
					<br><br><br><br><br>
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
	import SocialMediaPlug from '../../components/SocialMediaPlug'
	import companyInfo from '../../defaults/companyInfo'
	import pageLinks from '../../defaults/pageLinks'

	export default {
		components: {
			SocialMediaPlug
		},

		data() {
			return {
				companyInfo: companyInfo,
				pageLinks: pageLinks,
			}
		},
	}
</script>