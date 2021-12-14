// [REQUIRE] //
require('dotenv').config()


// [EXPORT] //
module.exports = {
	// [APP] //
	NODE_ENV: process.env.NODE_ENV || 'development',

	// [FUNCTIONALITY] //
	ADMIN_USER_SYSTEM: process.env.ADMIN_USER_SYSTEM || false,
	PAYMENT_SYSTEM: process.env.PAYMENT_SYSTEM || false,

	// [URL] //
	BASE_URL: process.env.BASE_URL || 'http://localhost:8080',
	SOCKET_BASE_URL: process.env.BASE_URL || 'http://localhost:5000',

	// [PORT] //
	PORT: process.env.PORT || 5000,
	
	// [MONGODB] //
	MONG_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/balance-within',
	
	// [SECRET] //
	SECRET_KEY: process.env.SECRET_KEY || 'secret',

	// [STRIPE] //
	STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || '',

	// [API] //
	api: {
		google: {
			user: process.env.API__GOOGLE__USER || '',
			client_id: process.env.API__GOOGLE__CLIENT_ID || '',
			client_secret: process.env.API__GOOGLE__CLIENT_SECRET || '',
			redirectURI: process.env.API__GOOGLE__REDIRECT_URI || '',
			refreshToken: process.env.API__GOOGLE__REFRESH_TOKEN || '',
		}
	},
}