<template>
	<BContainer fluid class="mb-6 p-0 pb-5">
		<div class="py-5 bg-gradient">
			<h2 class="m-0 text-center text-light" data-aos="fade">
				Join Our Team & Start your journey
			</h2>
		</div>

		<BContainer class="py-5">
			<BRow>
				<BCol cols="12" md="8" class="mx-auto">
					<form @submit.prevent="sendFile" enctype="multipart/form-data">
						<!-- Client Email -->
						<label for="client-email" class="w-100 h3 form-label text-primary">
							Your Email
						</label>
						<input
							v-model="clientEmail"
							name="client-email"
							type="email"
							class="form-control mb-3"
							placeholder="Your email here"
						>

						<!-- Name -->
						<label for="name" class="w-100 h3 form-label text-primary">
							Your Name
						</label>
						<input
							v-model="name"
							name="name"
							type="text"
							class="form-control mb-3"
							placeholder="Your name here"
						>

						<!-- Subject -->
						<label for="subject" class="w-100 h3 form-label text-primary">
							Subject
						</label>
						<input
							v-model="subject"
							name="subject"
							type="text"
							class="form-control mb-3"
							placeholder="Please type your subject"
						>

						<!-- Message -->
						<label for="message" class="w-100 h3 form-label text-primary">
							Message
						</label>
						<textarea
							v-model="message"
							name="message"
							cols="30" rows="10"
							class="form-control w-100 mb-3"
						></textarea>
						<hr>
						
						<!-- Attachments -->
						<label for="file" class="w-100 h3 form-label text-primary">
							Please Attach Your Resume Here
						</label>
						<input
							name="file"
							type="file"
							ref="file"
							class="mb-3"
							@change="selectFile"
						>
						<hr>

						<!-- Submit -->
						<BButton
							:disabled="loading"
							type="submit"
							variant="primary"
							size="lg"
							class="w-100"
						>submit</BButton>
					</form>

					<!-- Error -->
					<h6 v-if="error" class="mt-3 text-danger">{{ error }}</h6>
				</BCol>

				<BCol cols="12" md="4">
					<h4 class="text-center text-gradient">Find Us on LinkedIn</h4>

					<div class="text-center">
						<a :href="companyInfo.socialMedia.linkedin.link" target="_blank">
							<LinkedinIcon size="4x" class="mb-5" />
						</a>

						<div class="" style="overflow: hidden;">
							<img
								src="https://images2.imgbox.com/2e/4e/e1IUFMLw_o.jpg"
								class="w-100"
								style="object-position: 0px -180px;"
							/>
						</div>
					</div>
				</BCol>
			</BRow>
		</BContainer>
	</BContainer>
</template>

<script>
	import { LinkedinIcon } from 'vue-feather-icons'

	import router from '@/router'
	import MailService from '@/services/MailService'
	import companyInfo from '../defaults/companyInfo'

	export default {
		data() {
			return {
				companyInfo: companyInfo,
				subject: '',
				clientEmail: '',
				name: '',
				message: '',
				file: '',
				loading: false,
				reqData: {},
				error: '',
			}
		},

		methods: {
			selectFile() {
				this.file = this.$refs.file.files[0]
			},

			async sendFile() {
				try {
					if (
						!this.clientEmail ||
						!this.name ||
						!this.subject ||
						!this.message
					) {
						this.error = 'Error: Please fill out all fields'
						return
					}

					const formData = new FormData()

					formData.append('subject', this.subject)
					formData.append('clientEmail', this.clientEmail)
					formData.append('name', this.name)
					formData.append('message', this.message)
					formData.append('file', this.file)

					this.loading = true
					
					this.reqData = await MailService.s_careers(formData)

					// [LOG] //
					console.log('MailService.s_careers:', this.reqData)

					if (this.reqData.status) { router.push({ name: 'email-sent' }) }
					else { this.error = this.reqData.message }

					this.loading = false
				}
				catch (err) { this.error = err }
			},
		},

		components: {
			LinkedinIcon,
		},
	}
</script>