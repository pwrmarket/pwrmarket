// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const fs = require('fs')
const { google } = require('googleapis')
const nodemailer = require('nodemailer')
const multer = require('multer')


// [REQUIRE] Personal //
const config = require('../../s-config/index')


// [USE] //
const router = express.Router().use(cors())


// [MULTER] //
const upload = multer({
	storage: multer.diskStorage({
		destination: function (req, file, callBack) { callBack(null, './s-uploads') },
	
		filename: function (req, file, callBack) {
			callBack(null, `${new Date().toISOString()}-${file.originalname}`)
		}
	})
})


// [INIT] //
const USER = config.api.google.user
const CLIENT_ID = config.api.google.client_id
const CLIENT_SECRET = config.api.google.client_secret
const REDIRECT_URI = config.api.google.redirectURI
const REFRESH_TOKEN = config.api.google.refreshToken


router.post(
	'/careers',
	upload.single('file'),
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
					user: USER,
					clientId: CLIENT_ID,
					clientSecret: CLIENT_SECRET,
					refreshToken: REFRESH_TOKEN,
					accessToken: accessToken
				}
			})
	
			// [SEND-MAIL] //
			const sentEmail = await transporter.sendMail({
				to: config.emails.career,
				subject: 'Careers Request - PwrMarket.com',
				html: `
					<h5>From Email: ${req.params.to}</h5>

					<h6>== Message ==</h6>
					<p>${req.params.message}</p>
				`
			})

			res.send(sentEmail)
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				location: '/api/careers',
				message: `Error --> ${err}`,
			})
		}
	}
)


module.exports = router