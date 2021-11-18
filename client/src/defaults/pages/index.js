const companyInfo = require('../companyInfo')


module.exports = {
	companyInfo: companyInfo,

	// [HERO] Caraousel Slider //
	caraousel: [
		{
			caption:'',
			text: 'DINO\'S BAR & GRILL',
			img: require('../../assets/images/pages/index/hero/hero1.jpg'),
		},
		{
			caption:'',
			text: 'GREAT FOOD',
			img: require('../../assets/images/pages/index/hero/hero2.jpg'),
		},
		{
			caption: '',
			text: 'SPORTS & MUSIC',
			img: require('../../assets/images/pages/index/hero/hero3.jpg'),
		},
		{
			caption: '',
			text: 'WATCH SPORTS',
			img: require('../../assets/images/pages/index/hero/hero4.png'),
		},
	],

	// Star Details //
	headerDetails: {
		caption1: companyInfo.companyCaption1,
		address: companyInfo.address,
		googleMapsLink: companyInfo.googleMapsLink,
		hoursOfOperation: companyInfo.hoursOfOperation,
		text: 'By Appointments',
	},
}