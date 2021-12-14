// [IMPORT] //
import Vue from 'vue'
import VueRouter from 'vue-router'


// [IMPORT] Personal (Ordered by path) //
import companyInfo from '@/defaults/companyInfo'
import about from '@/pages/about'
import careers from '@/pages/careers'
import deals from '@/pages/deals'
import emailSent from '@/pages/email-sent'
import index from '@/pages'
import location from '@/pages/location'
import loyalty from '@/pages/loyalty'
import ourLocations from '@/pages/our-locations'
import notFound from '@/pages/404'


// [INIT] //
const routes = [
	{
		path: '/',
		name: '/',
		component: index,
		meta: {
			title: 'Home',
			show: true,
		},
	},
	{
		path: '/our-locations',
		name: 'ourLocations',
		component: ourLocations,
		meta: {
			title: 'Our Locations',
			show: true,
		},
	},
	{
		path: '/about',
		name: 'about',
		component: about,
		meta: {
			title: 'About',
			show: true,
		},
	},
	{
		path: '/deals',
		name: 'deals',
		component: deals,
		meta: {
			title: 'Deals',
			show: true,
		},
	},
	{
		path: '/loyalty',
		name: 'loyalty',
		component: loyalty,
		meta: {
			title: 'PML',
			show: true,
		},
	},
	// Careers //
	{
		path: '/careers',
		name: 'careers',
		component: careers,
		meta: {
			title: 'Careers',
			show: true,
		},
	},
	// email-sent //
	{
		path: '/email-sent',
		name: 'email-sent',
		component: emailSent,
		meta: {
			title: 'Email Sent',
			show: false,
		},
	},
	// Not-Found //
	{
		path: '/location/:location_id',
		name: 'location',
		component: location,
		meta: {
			title: 'Location',
			show: false,
		},
	},
	{
		path: '/**',
		name: 'not_found',
		component: notFound,
		meta: {
			title: 'Not Found',
			show: false,
		},
	},
]


Vue.use(VueRouter)


const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: routes,

	// [VUE-ROUTER] Scroll Behavior //
	scrollBehavior () { return { x: 0, y: 0 } }
})

// [VUE-ROUTER-SET-TITLE] //
router.beforeEach((to, from, next) => {
	document.title = to.meta.title + ' — ' + companyInfo.name
	next()
})

export default router

export { routes }
