// [IMPORT] //
import Vue from 'vue'
import VueRouter from 'vue-router'


// [IMPORT] Personal (Ordered by path) //
import companyInfo from '@/defaults/companyInfo'
import index from '@/pages'
import about from '@/pages/about'
import location from '@/pages/location'
import ourLocations from '@/pages/our-locations'
import pml from '@/pages/pml'
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
		path: '/location/:location_id',
		name: 'location',
		component: location,
		meta: {
			title: 'Location',
			show: false,
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
		path: '/pml',
		name: 'pml',
		component: pml,
		meta: {
			title: 'Power Market Loyalty',
			show: true,
		},
	},
	// Not-Found //
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
