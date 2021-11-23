<template>
	<div class="text-center">
		<a
			v-if="defaultData.socialMedia.facebook.link != ''"
			:href="defaultData.socialMedia.facebook.link"
			target="_blank"
			:class="`text-${variant}`"
		>
			<FacebookIcon :stroke-width="strokeWidth" :size="size" class="mx-2" />
		</a>

		<a
			v-if="defaultData.socialMedia.instagram.link != ''"
			:href="defaultData.socialMedia.instagram.link"
			target="_blank"
			:class="`text-${variant}`"
		>
			<InstagramIcon :stroke-width="strokeWidth" :size="size" class="mx-2" />
		</a>

		<a
			v-if="defaultData.socialMedia.youtube.link != ''"
			:href="defaultData.socialMedia.youtube.link"
			target="_blank"
			:class="`text-${variant}`"
		>
			<YoutubeIcon :stroke-width="strokeWidth" :size="size" class="mx-2" />
		</a>
	</div>
</template>

<script>
	// [IMPORT] //
	import { FacebookIcon, InstagramIcon, YoutubeIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import defaultData from '@/defaults/companyInfo'

	export default {
		props: {
			size: {
				type: String,
				default: "24",
			},

			variant: {
				type: String,
				default: 'light'
			},

			strokeWidth: {
				type: String,
				default: '1.5'
			},
		},

		components: {
			FacebookIcon,
			InstagramIcon,
			YoutubeIcon
		},
		
		data() {
			return {
				defaultData: defaultData,
			}
		},
	}
</script>