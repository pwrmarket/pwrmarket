<template>
<BContainer class="mb-6">
	<BContainer class="py-5">
		<!-- Contact Info -->
		<BRow>
			<!-- Email -->
			<BCol cols="12">
				<h5 class="my-3">Contact Info</h5>
			</BCol>

			<BCol cols="12">
				<label for="">Email</label>
				<input v-model="formData.email" type="email" class="form-control">
			</BCol>

			<!-- Phone -->
			<BCol cols="12">
				<label for="">Phone</label>
				<input v-model="formData.phone" type="text" class="form-control">
			</BCol>

			<!-- Name -->
			<BCol cols="12" md="6">
				<label for="firstName">First</label>
				<input v-model="formData.firstName"  type="text" class="form-control">
			</BCol>
			
			<BCol cols="12" md="6">
				<label for="lastName">Last</label>
				<input v-model="formData.lastName"  type="text" class="form-control">
			</BCol>
		</BRow>

		<!-- Type of Request -->
		<BRow>
			<BCol cols="12">
				<br>
				<h5>Type of Request</h5>

				<ul class="list-unstyled">
					<li>
						<input v-model="formData.typeOfRequest" type="radio" value="access-request" class="mr-2">
						<label for="">
							Access Request
						</label>
					</li>
					<li>
						<input v-model="formData.typeOfRequest" type="radio" value="request-to-know" class="mr-2">
						<label for="">
							Request to Know
						</label>
					</li>
					<li>
						<input v-model="formData.typeOfRequest" type="radio" value="request-for-deletion" class="mr-2">
						<label for="">
							Request for Deletion
						</label>
					</li>
					<li>
						<input v-model="formData.typeOfRequest" type="radio" value="request-to-opt-out-of-sale-of-information" class="mr-2">
						<label for="">
							Request to Opt Out of Sale of Information
						</label>
					</li>
					<li>
						<input v-model="formData.typeOfRequest" type="radio" value="request-to-withdraw-from-financial-incentive-program" class="mr-2">
						<label for="">
							Request to Withdraw From Financial Incentive Program 
						</label>
					</li>
				</ul>
			</BCol>
		</BRow>

		<!-- California Resident -->
		<BRow>
			<BCol cols="12">
				<h5 class="my-3">I am a california resident</h5>

				<input
					v-model="formData.californiaResident"
					type="radio"
					value="true"
					@click="showAddress = true"
					class="mr-2"
				>
				<label for="">Yes</label>
				<br>

				<input
					v-model="formData.californiaResident"
					type="radio"
					value="false"
					@click="showAddress = false"
					class="mr-2"
				>
				<label for="">No</label>
				<br>
			</BCol>
		</BRow>
			
		<!-- Address -->
		<BRow v-if="showAddress">
			<BCol cols="12">
				<BRow>
					<BCol cols="12">
						<h5 class="my-3">Address</h5>
					</BCol>

					<!-- Address Street -->
					<BCol cols="12" md="10">
						<label for="street">
							Street
						</label>

						<BFormInput
							v-model="formData.address.street"
							name="street"
							placeholder="123 main st."
						/>
					</BCol>

					<!-- Address Unit -->
					<BCol cols="12" md="2">
						<label for="unit">
							unit
						</label>

						<BFormInput
							v-model="formData.address.unit"
							name="unit"
							placeholder="3b"
						/>
					</BCol>

					<!-- Address City -->
					<BCol cols="12" md="6">
						<label for="city">
							City
						</label>

						<BFormInput
							v-model="formData.address.city"
							name="city"
							placeholder="City"
						/>
					</BCol>

					<!-- Address State -->
					<BCol cols="12" md="3">
						<label for="state">
							State
						</label>

						<select
							v-model="formData.address.state"
							name="street"
							class="
								form-control
								form-select
								w-100
								p-2
							"
						>
							<option disabled value="">Select a state</option>
							<option
								v-for="(s, i) in states"
								:key="i"
							>{{ s }}</option>
						</select>
					</BCol>

					<!-- Address Zip -->
					<BCol cols="12" md="3">
						<label for="zip">Zip</label>
						
						<BFormInput
							v-model="formData.address.zip"
							name="zip"
							placeholder="00000"
						/>
					</BCol>
				</BRow>
			</BCol>
		</BRow>

		<!-- Behalf -->
		<BRow>
			<BCol cols="12">
				<h5 class="my-3">This request has been submitted through an agent on my behalf</h5>

				<input
					v-model="formData.behalfOf"
					type="radio"
					value="true"
					@click="showAgent = true"
					class="mr-2"
				>
				<label for="">Yes</label>
				<br>

				<input
					v-model="formData.behalfOf"
					type="radio"
					value="false"
					@click="showAgent = false"
					class="mr-2"
				>
				<label for="">No</label>
				<br>
			</BCol>
		</BRow>

		<!-- Contact Info -->
		<BRow v-if="showAgent">
			<BCol cols="12">
				<h5 class="my-3">Agent Contact Info</h5>
			</BCol>

			<!-- Name -->
			<BCol cols="12" md="6">
				<label for="firstName">First</label>
				<input v-model="formData.agent.firstName"  type="text" class="form-control">
			</BCol>
			
			<BCol cols="12" md="6">
				<label for="lastName">Last</label>
				<input v-model="formData.agent.lastName" type="text" class="form-control">
			</BCol>
		</BRow>

		<BButton @click="submit()" class="w-100 my-4">Submit</BButton>

		<h6 class="text-danger">{{ error }}</h6>
	</BContainer>
</BContainer>
</template>

<script>
	import states from '../defaults/states'
	import router from '@/router'
	import MailService from '../services/MailService'
	
	export default {
		data() {
			return {
				states,

				showAddress: false,
				showAgent: false,

				formData: {
					email: '',

					phone: '',

					firstName: '',
					lastName: '',
					
					typeOfRequest: '',

					californiaResident: false,

					address: {
						street: '',
						unit: '',
						city: '',
						state: '',
						zip: '',
					},

					behalfOf: false,

					agent: {
						firstName: '',
						lastName: '',
					},
				},

				error: '',
			}
		},

		methods: {
			async submit() {
				if (
					this.formData.email &&
					this.formData.phone &&
					this.formData.firstName &&
					this.formData.typeOfRequest
				) {
					const resData = await MailService.s_ccpa(this.formData)

					if (resData.status) {
						router.push({ name: 'email-sent' })
					}
					else { this.error = this.resData.message }
				}
				else { this.error = 'Please fill out required inputs' }
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import '../assets/styles/index.scss';

	h5 {
		@extend .text-primary;
		@extend .font-weight-bold;
	}	

	label {
		@extend .my-2;
		@extend .text-secondary;
		@extend .font-weight-bold;
	}	
</style>