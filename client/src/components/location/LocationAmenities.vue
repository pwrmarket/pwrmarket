<template>
	<BRow>
		<BCol
			v-for="(a, i) in location.amenities"
			:key="i"
			cols="12" lg="6" xl="4"
			class="mb-3 d-flex align-items-stretch"
		>
			<BCard
				bg-variant="white"
				no-body
				class="w-100 mb-3"
				style="border-style: dashed !important;"
			>
				<BCardHeader class="text-light bg-gradient-weak-2">
					<i v-if="a.type == 'energy-station'" class="py-1">
						<BatteryChargingIcon  size="1.1x" />
					</i>

					<i v-if="a.type == 'car-wash'" class="py-1">
						<DropletIcon  size="1.1x" />
					</i>

					<i v-if="a.type == 'service-shop'" class="py-1">
						<ToolIcon  size="1.1x" />
					</i>

					<i v-if="a.type == 'store'" class="py-1">
						<ShoppingCartIcon  size="1.1x" />
					</i>

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
						<BCol cols="12" lg="12" class="mb-3">
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
									cols="6" sm="4"
									class="text-center"
								>
									<div
										v-if="s == 'power-market-rewards'"
										class="w-100 px-1 py-3 bg-success"
										style="border-radius: .5rem !important"
									>
										<h6 class="m-0 text-uppercase text-light">
											<span class="h3">✓</span><br>
											<span class="small font-weight-bold">
												Rewards
											</span>
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
										style="border-radius: .5rem !important"
									>
										<h6 class="m-0 text-uppercase text-light">
											<span class="h3">✓</span><br>
											<span class="small font-weight-bold">
												{{ s }}
											</span>
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
										style="border-radius: .5rem !important"
									>
										<h6 class="m-0 text-uppercase text-light">
											<span class="h3">✓</span><br>
											<span class="small font-weight-bold">
												{{ p }}
											</span>
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
										style="border-radius: .5rem !important"
									>
										<h6 class="m-0 text-uppercase text-light">
											<span class="h3">✓</span><br>
											<span class="small font-weight-bold">
												{{ d }}
											</span>
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
	import { BatteryChargingIcon, DropletIcon, ShoppingCartIcon, ToolIcon } from 'vue-feather-icons'

	export default {
		props: {
			location: {
				type: Object,
				require: true,
			},
		},

		components: {
			BatteryChargingIcon,
			DropletIcon,
			ShoppingCartIcon,
			ToolIcon
		},
	}
</script>

<style lang="scss" scoped>
	i {
		display: block;
		float: left;
		width: 60px;
		height: 60px;
		line-height: 52px;
		text-align: center;
		background: #fff;
		color: #c0996b;
		font-size: 30px;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		-ms-border-radius: 50%;
		border-radius: 50%;
		margin-right: 20px;
	}
</style>