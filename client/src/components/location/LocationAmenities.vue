<template>
	<BRow>
		<BCol cols="12">
			<h1 class="mb-4 text-center text-secondary">Location Features</h1>
		</BCol>

		<BCol
			v-for="(a, i) in location.amenities"
			:key="i"
			cols="12" lg="6"
		>
			<BCard
				bg-variant="white"
				border-variant=""
				no-body
				class="mb-3 shadow"
			>
				<BCardHeader class="text-center text-light bg-secondary">
					<h4 class="m-0 font-weight-bold">
						{{ a.name }}
						<span v-if="a.type == 'energy-station'">Energy Station</span>
						<span v-if="a.type == 'store'">Store</span>
						<span v-if="a.type == 'car-wash'">Car Wash</span>
						<span v-if="a.type == 'service-shop'">Service Shop</span>
						<span v-if="a.type == 'amazon-locker'">Amazon Locker</span>
					</h4>
				</BCardHeader>

				<BCardBody>
					<!-- Services -->
					<BRow class="mb-4">
						<BCol cols="12">
							<h5 class="mb-3 text-secondary">Services</h5>
						</BCol>

						<BCol
							v-for="(s, ii) in a.services"
							:key="ii"
							cols="6" sm="3"
							class="text-center"
						>
							<img
								v-if="s == 'ebt'"
								src="https://images2.imgbox.com/ef/b9/tveUfCgE_o.png"
								:alt="s"
								class="w-100 px-2"
							>

							<img
								v-else-if="s == 'deli'"
								src="https://images2.imgbox.com/ac/57/XR0wjIz6_o.png"
								:alt="s"
								class="w-100 px-2"
							>

							<img
								v-else-if="s == 'Grubhub'"
								src=""
								:alt="s"
								class="w-100 px-2"
							>

							<img
								v-else-if="s == 'Vroom'"
								src=""
								:alt="s"
								class="w-100 px-2"
							>

							<h6 v-else class="m-0">{{ s }}</h6>
						</BCol>
					</BRow>

					<!-- Products -->
					<BRow v-if="a.products.length > 0" class="mb-4">
						<BCol cols="12">
							<h5 class="mb-3 text-secondary">Sold Here</h5>
						</BCol>

						<BCol
							v-for="(p, ii) in a.products"
							:key="ii"
							cols="6" sm="3"
							class="text-center"
						>
							<img
								v-if="p == 'alcohol'"
								src="https://images2.imgbox.com/c1/3c/KCZyAY9K_o.png"
								:alt="p"
								class="w-100 px-2"
							>

							<h6 v-else class="m-0">{{ d }}</h6>
						</BCol>
					</BRow>

					<!-- Delivery Methods -->
					<BRow v-if="a.deliveryMethods.length > 0" class="mb-4">
						<BCol cols="12">
							<h5 class="mb-3 text-secondary">Accepted Delivery Methods</h5>
						</BCol>

						<BCol
							v-for="(d, ii) in a.deliveryMethods"
							:key="ii"
							cols="6" sm="3"
							class="text-center"
						>
							<img
								v-if="d == 'Uber'"
								src="https://images2.imgbox.com/7a/46/Pe1nUcq8_o.png"
								:alt="d"
								class="w-100 px-2"
							>

							<img
								v-else-if="d == 'DoorDash'"
								src="https://images2.imgbox.com/fe/6d/dUuN1QUy_o.png"
								:alt="d"
								class="w-100 px-2"
							>

							<img
								v-else-if="d == 'Grubhub'"
								src="https://images2.imgbox.com/60/66/5U1IWu5m_o.jpg"
								:alt="d"
								class="w-100 px-2"
							>

							<img
								v-else-if="d == 'Vroom'"
								src="https://images2.imgbox.com/89/78/YBlsONvf_o.png"
								:alt="d"
								class="w-100 px-2"
							>

							<h6 v-else class="m-0">{{ d }}</h6>
						</BCol>
					</BRow>
				</BCardBody>
			</BCard>
		</BCol>
	</BRow>
</template>


<script>
	export default {
		props: {
			location: {
				type: Object,
				require: true,
			},
		},
	}
</script>