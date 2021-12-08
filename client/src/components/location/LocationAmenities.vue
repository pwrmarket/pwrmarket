<template>
	<BRow>
		<BCol
			v-for="(a, i) in location.amenities"
			:key="i"
			cols="12" xl="6"
			class="mb-3 d-flex align-items-stretch"
		>
			<BCard
				bg-variant="white"
				border-variant=""
				no-body
				class="w-100 mb-3"
			>
				<BCardHeader class="text-center text-light bg-gradient">
					<h4 class="my-3">
						{{ a.name }}
						<span v-if="a.type == 'energy-station'">Energy Station</span>
						<span v-if="a.type == 'store'">Store</span>
						<span v-if="a.type == 'car-wash'">Car Wash</span>
						<span v-if="a.type == 'service-shop'">Service Shop</span>
						<span v-if="a.type == 'amazon-locker'">Amazon Locker</span>
					</h4>
				</BCardHeader>

				<BCardBody>
					<BRow>
						<!-- Services -->
						<BCol cols="12" lg="12" class="mb-3 ">
							<BRow v-if="a.services.length > 0" class="mb-4">
								<BCol cols="12">
									<h5 class="mb-2 text-center text-primary">
										Services
									</h5>
									<hr class="bg-secondary">
								</BCol>

								<BCol
									v-for="(s, ii) in a.services"
									:key="ii"
									cols="6" sm="3"
									class="text-center"
								>
									<div
										v-if="s == 'power-market-loyalty'"
										class="w-100 px-1 py-3 bg-success"
										style="border-radius: .8rem !important"
									>
										<h6 class="m-0 text-uppercase text-light">
											<span class="h3">✓</span><br>
											<span class="h6">PML</span>
										</h6>
									</div>

									<img
										v-else-if="s == 'ebt'"
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

									<div
										v-else
										class="w-100 px-1 py-3 bg-success"
										style="border-radius: .8rem !important"
									>
										<h6 class="m-0 text-uppercase text-light">
											<span class="h3">✓</span><br>
											<span class="h6">{{ s }}</span>
										</h6>
									</div>
								</BCol>
							</BRow>
						</BCol>

						<!-- Products -->
						<BCol cols="12" lg="12" class="mb-3 border-">
							<BRow v-if="a.products.length > 0" class="mb-4">
								<BCol cols="12">
									<h5 class="mb-2 text-center text-primary">
										Sold Here
									</h5>
									<hr class="bg-secondary">
								</BCol>

								<BCol
									v-for="(p, ii) in a.products"
									:key="ii"
									cols="6" sm="3"
									class="text-center"
								>
									<!-- e85 Image -->
									<img
										v-if="p == 'e85'"
										src="https://images2.imgbox.com/32/dd/xfGi2ZYO_o.png"
										:alt="p"
										class="w-100"
									>

									<img
										v-else-if="p == 'alcohol'"
										src="https://images2.imgbox.com/c1/3c/KCZyAY9K_o.png"
										:alt="p"
										class="w-100"
									>
									
									<div
										v-else
										class="w-100 px-1 py-3 bg-success"
										style="border-radius: .8rem !important"
									>
										<h6 class="m-0 text-uppercase text-light">
											<span class="h3">✓</span><br>
											<span class="h6">{{ p }}</span>
										</h6>
									</div>
								</BCol>
							</BRow>
						</BCol>

						<!-- Delivery Methods -->
						<BCol cols="12" lg="12"  class="mb-3 border-">
							<BRow v-if="a.deliveryMethods.length > 0" class="mb-4">
								<BCol cols="12">
									<h5 class="mb-2 text-center text-primary">
										Accepted Delivery Methods
									</h5>
									<hr class="bg-secondary">
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
										class="w-100"
									>

									<img
										v-else-if="d == 'DoorDash'"
										src="https://images2.imgbox.com/fe/6d/dUuN1QUy_o.png"
										:alt="d"
										class="w-100"
									>

									<img
										v-else-if="d == 'Grubhub'"
										src="https://images2.imgbox.com/60/66/5U1IWu5m_o.jpg"
										:alt="d"
										class="w-100"
									>

									<img
										v-else-if="d == 'Vroom'"
										src="https://images2.imgbox.com/89/78/YBlsONvf_o.png"
										:alt="d"
										class="w-100"
									>

									<div
										v-else
										class="w-100 px-1 py-3 bg-success"
										style="border-radius: .8rem !important"
									>
										<h6 class="m-0 text-uppercase text-light">
											<span class="h3">✓</span><br>
											<span class="h6">{{ d }}</span>
										</h6>
									</div>
								</BCol>
							</BRow>
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