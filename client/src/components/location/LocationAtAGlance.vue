<template>
	<div class="text-light bg-gradient">
		<BContainer class="py-3">
			<BRow class="m-0 p-0 contact-info">
				<BCol cols="12">	
					<h6 class="m-0 text-center text-light font-weight-bold">
						At a Glance
					</h6>
					<hr class="bg-light">
				</BCol>

				<!-- EMAIL -->
				<BCol
					v-for="(a, i) in location.amenities" :key="i"
					cols="12" md="4" lg="4" xl="3" class="py-2"
				>
					<!-- Store -->
					<div v-if="a.type == 'store'">
						<i class="py-1">
							<ShoppingCartIcon  size="1.1x" />
						</i>
					
						<h6 class="small font-weight-bold">
							Store
						</h6>
						<h6 class="m-0 font-weight-bold">
							<a :href="companyInfo.emailLink" class="text-light">
								{{ a.name }}
							</a>
						</h6>
					</div>
					
					<!-- Energy Station -->
					<div v-if="a.type == 'energy-station'">
						<i class="py-1">
							<BatteryChargingIcon  size="1.1x" />
						</i>
					
						<h6 class="small font-weight-bold">
							Energy Station
						</h6>
						<h6 class="m-0 font-weight-bold">
							<a :href="companyInfo.emailLink" class="text-light">
								{{ a.name }}
							</a>
						</h6>
					</div>

					<!-- Carwash -->
					<div v-if="a.type == 'car-wash'">
						<i class="py-1">
							<DropletIcon  size="1.1x" />
						</i>
					
						<h6 class="small font-weight-bold">
							Car Wash
						</h6>
						<h6 class="m-0 font-weight-bold">
							<a :href="companyInfo.emailLink" class="text-light">
								Drive-Thru
							</a>
						</h6>
					</div>

					<!-- Carwash -->
					<div v-if="a.type == 'service-shop'">
						<i class="py-1">
							<ToolIcon  size="1.1x" />
						</i>
					
						<h6 class="small font-weight-bold">
							Service Shop
						</h6>
						<h6 class="m-0 font-weight-bold">
							<a :href="companyInfo.emailLink" class="text-light">
								Car Servicing
							</a>
						</h6>
					</div>
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
import { BatteryChargingIcon, DropletIcon, ShoppingCartIcon, ToolIcon } from 'vue-feather-icons'

import companyInfo from '@/defaults/companyInfo'

export default {
	props: {
		location: {
			type: Object,
			required: true,
		}
	},

	data() {
		return {
			companyInfo
		}
	},

	components: {
		BatteryChargingIcon,
		ShoppingCartIcon,
		DropletIcon,
		ToolIcon,
	},
}
</script>

<style lang="scss" scoped>
	.contact-info i {
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