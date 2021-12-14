// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const nodemailer = require('nodemailer')
const { google } = require('googleapis')


// [REQUIRE] Personal //
const config = require('../../s-config/index')


// [INIT] //
const CLIENT_ID = config.api.google.client_id
const CLIENT_SECRET = config.api.google.client_secret
const REDIRECT_URI = config.api.google.redirectURI
const REFRESH_TOKEN = config.api.google.refreshToken



// [USE] //
const router = express.Router().use(cors())


router.get(
	'/',
	async (req, res) => {
		try {
			const OAuth2Client = new google.auth.OAuth2(
				CLIENT_ID,
				CLIENT_SECRET,
				REDIRECT_URI
			)

			OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

			const accessToken = await OAuth2Client.getAccessToken()

			const transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					type: 'OAuth2',
					user: 'w3st.io2021@gmail.com',
					clientId: CLIENT_ID,
					clientSecret: CLIENT_SECRET,
					refreshToken: REFRESH_TOKEN,
					accessToken: accessToken
				}
			})
	
			// [SEND-MAIL] //
			const sentEmail = await transporter.sendMail({
				to: 'aleem.ahmed1997@gmail.com',
				subject: 'test',
				html: 'hi'
			})

			res.send(sentEmail)
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				location: '/api/payments/balance',
				message: `Error --> ${err}`,
			})
		}
	}
)


module.exports = router