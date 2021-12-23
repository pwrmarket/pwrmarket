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
			altLink: '',
			title: 'Home',
			menu: 2,
			show: true,
		},
	},
	{
		path: '/our-locations',
		name: 'ourLocations',
		component: ourLocations,
		meta: {
			altLink: '',
			title: 'Our Locations',
			menu: 2,
			show: true,
		},
	},
	{
		path: '/about',
		name: 'about',
		component: about,
		meta: {
			altLink: '',
			title: 'About',
			menu: 2,
			show: true,
		},
	},
	{
		path: '/deals',
		name: 'deals',
		component: deals,
		meta: {
			altLink: '',
			title: 'Deals',
			menu: 2,
			show: true,
		},
	},
	{
		path: '/rewards',
		name: 'rewards',
		component: loyalty,
		meta: {
			altLink: '',
			title: 'Rewards',
			menu: 2,
			show: true,
		},
	},
	// Careers //
	{
		path: '/careers',
		name: 'careers',
		component: careers,
		meta: {
			altLink: 'https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=fe247937-30ea-42e9-897c-7e49746c78f8&ccId=9200028200615_2&lang=en_US',
			title: 'Careers',
			menu: 1,
			show: true,
		},
	},
	// email-sent //
	{
		path: '/email-sent',
		name: 'email-sent',
		component: emailSent,
		meta: {
			altLink: '',
			title: 'Email Sent',
			menu: 0,
			show: false,
		},
	},
	// Not-Found //
	{
		path: '/location/:location_id',
		name: 'location',
		component: location,
		meta: {
			altLink: '',
			title: 'Location',
			menu: 0,
			show: false,
		},
	},
	{
		path: '/**',
		name: 'not_found',
		component: notFound,
		meta: {
			altLink: '',
			title: 'Not Found',
			menu: 0,
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
