<template>
<BContainer class="mb-6">
	<BContainer class="py-5">
		<BRow>
			<BCol cols="12" md="6">
				<label for="">First Name</label>
				<input type="text" class="form-control">
			</BCol>
			
			<BCol cols="12" md="6">
				<label for="">Last Name</label>
				<input type="text" class="form-control">
			</BCol>
			
			<BCol cols="12">
				<h6 class="my-3">I am a california resident</h6>
				<input
					v-model="californiaResident"
					type="radio"
					value="true"
					@click="showAddress = true"
					class="mr-2"
				>
				<label for="one">Yes</label>
				<br>
				<input
					v-model="californiaResident"
					type="radio"
					value="false"
					@click="showAddress = false"
					class="mr-2"
				>
				<label for="two">No</label>
				<br>
			</BCol>
			
			<BCol v-if="showAddress" cols="12">
				<BRow>
					<BCol cols="12">
						<h6 class="my-3">Address</h6>
						<label for="">Street</label>
						<input type="text" class="form-control">
					</BCol>
				</BRow>
			</BCol>
		</BRow>
	</BContainer>
</BContainer>
</template>

<script>
export default {
	data() {
		return {
			californiaResident: false,
			showAddress: false,
		}
	},
}
</script>

<style lang="scss" scoped>
	@import '../assets/styles/index.scss';

	label {
		@extend .text-primary;
		@extend .font-weight-bold;
	}	
</style>