<template>
	<BContainer fluid class="mb-6 p-0 pb-5">
		<TitleHeader
			:imageURL="require('../assets/images/hero/slide6.jpg')"
			:text="`Contact Us`"
			:frost="false"
		/>

		<BContainer class="py-5">
			<BRow>
				<BCol cols="12" md="8" order="1" order-md="0" class="mx-auto">
					<!-- Subject -->
					<h3 class="w-100 mb-3 text-center text-primary">
						Email Us
					</h3>

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
							Attachments
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
							pill
							type="submit"
							variant="primary"
							size="lg"
							class="w-100 mb-3"
						>submit</BButton>
					</form>

					<!-- Error -->
					<h6 v-if="error" class="mt-3 text-danger">{{ error }}</h6>
				</BCol>

				<BCol cols="12" md="4" order="0" order-md="1">
					<!-- Subject -->
					<h3 class="w-100 mb-3 text-center text-primary">
						Call Us (24/7)
					</h3>

					<a :href="companyInfo.phone.link" target="_blank">
						<BButton size="lg" pill class="w-100 mb-3">
							{{ companyInfo.phone.number }}
						</BButton>
					</a>
				</BCol>
			</BRow>
		</BContainer>
	</BContainer>
</template>

<script>

	import router from '@/router'
	import TitleHeader from '../components/UI/TitleHeader.vue'
	import companyInfo from '../defaults/companyInfo'
	import MailService from '@/services/MailService'

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
					
					this.reqData = await MailService.s_contact(formData)

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
			TitleHeader,
		}
	}
</script>