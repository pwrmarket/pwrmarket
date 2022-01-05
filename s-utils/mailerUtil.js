// ORDER: to, subject, type, user_id, clientEmail, name, message, html, attachments
// [REQUIRE] //
const { google } = require('googleapis')
const nodemailer = require('nodemailer')
const validator = require('validator')


// [REQUIRE] Personal //
const config = require('../s-config') 


// [INIT] //
const USER = config.api.google.user
const CLIENT_ID = config.api.google.client_id
const CLIENT_SECRET = config.api.google.client_secret
const REDIRECT_URI = config.api.google.redirectURI
const REFRESH_TOKEN = config.api.google.refreshToken


module.exports = {
	sendCareersEmail: async function ({ subject, clientEmail, name, message, attachments }) {
		try {
			// [VALIDATE] subject //
			if (!validator.isAscii(subject)) {
				return {
					executed: true,
					status: false,
					message: 'mailerUtil: Invalid subject',
				}
			}
	
			// [VALIDATE] clientEmail //
			if (!validator.isEmail(clientEmail)) {
				return {
					executed: true,
					status: false,
					message: 'mailerUtil: clientEmail not an email',
				}
			}
	
			// [VALIDATE] name //
			if (!validator.isAscii(name)) {
				return {
					executed: true,
					status: false,
					message: 'mailerUtil: Invalid name',
				}
			}
	
			// [VALIDATE] message //
			if (!validator.isAscii(message)) {
				return {
					executed: true,
					status: false,
					message: 'mailerUtil: Invalid message',
				}
			}
	
			// [VALIDATE] html xss //
			if (attachments) {
				if (!Array.isArray(attachments)) {
					return {
						executed: true,
						status: false,
						message: 'mailerUtil: Attachments must be an array',
					}
				}
			}
	
			// [GOOGLE] OAuth2 //
			const OAuth2Client = new google.auth.OAuth2(
				CLIENT_ID,
				CLIENT_SECRET,
				REDIRECT_URI
			)
	
			// [GOOGLE] getCredentials //
			OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })
	
			// [GOOGLE] getAccessToken //
			const accessToken = await OAuth2Client.getAccessToken()
	
			// [NODE-MAILER] //
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
			await transporter.sendMail({
				to: config.email.careers,
				subject: `PM Careers: ${subject}`,
				html: `
					<h3 style="margin: 0;">Email: ${clientEmail}</h3>
					<h3 style="margin: 0;">Name: ${name}</h3>
					<h3 style="margin: 0; margin-top: 20px;">Message:</h3>
					<p>${message}</p>
				`,
				attachments: attachments,
			})
	
			return {
				executed: true,
				status: true,
				send: true,
				message: 'Email Sent',
			}
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `mailerUtil: Error --> ${err}`,
			}
		}
	},


	sendCCPAEmail: async function ({ email, phone, firstName, lastName, typeOfRequest, californiaResident, address, behalfOf, agent }) {
		try {
			// [VALIDATE] email //
			if (!validator.isEmail(email)) {
				return {
					executed: true,
					status: false,
					message: 'mailerUtil: email not an email',
				}
			}

			// [VALIDATE] phone //
			if (!validator.isAscii(phone)) {
				return {
					executed: true,
					status: false,
					message: 'mailerUtil: phone not an number',
				}
			}
	
			// [VALIDATE] firstName //
			if (!validator.isAscii(firstName)) {
				return {
					executed: true,
					status: false,
					message: 'mailerUtil: Invalid firstName',
				}
			}

			// [VALIDATE] lastName //
			if (!validator.isAscii(lastName)) {
				return {
					executed: true,
					status: false,
					message: 'mailerUtil: Invalid lastName',
				}
			}
	
			// [VALIDATE] typeOfRequest //
			if (!validator.isAscii(typeOfRequest)) {
				return {
					executed: true,
					status: false,
					message: 'mailerUtil: Invalid typeOfRequest',
				}
			}

			if (
				californiaResident != 'true' &&
				californiaResident != 'false' &&
				californiaResident != true &&
				californiaResident != false
			) {
				return {
					executed: true,
					status: false,
					message: 'mailerUtil: Invalid californiaResident',
				}
			}

			if (address.street) {
				if (!validator.isAscii(address.street)) {
					return {
						executed: true,
						status: false,
						message: 'mailerUtil: Invalid address.street',
					}
				}
			}

			if (address.city) {
				if (!validator.isAscii(address.city)) {
					return {
						executed: true,
						status: false,
						message: 'mailerUtil: Invalid address.city',
					}
				}
			}

			if (address.state) {

				if (!validator.isAscii(address.state)) {
					return {
						executed: true,
						status: false,
						message: 'mailerUtil: Invalid address.state',
					}
				}
			}

			if (address.zip) {
				if (!validator.isAscii(address.zip)) {
					return {
						executed: true,
						status: false,
						message: 'mailerUtil: Invalid address.zip',
					}
				}
			}

			if (agent.firstName) {
				if (!validator.isAscii(agent.firstName)) {
					return {
						executed: true,
						status: false,
						message: 'mailerUtil: Invalid agent.firstName',
					}
				}
			}

			if (agent.lastName) {
				if (!validator.isAscii(agent.lastName)) {
					return {
						executed: true,
						status: false,
						message: 'mailerUtil: Invalid agent.lastName',
					}
				}
			}
	
			// [GOOGLE] OAuth2 //
			const OAuth2Client = new google.auth.OAuth2(
				CLIENT_ID,
				CLIENT_SECRET,
				REDIRECT_URI
			)
	
			// [GOOGLE] getCredentials //
			OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })
	
			// [GOOGLE] getAccessToken //
			const accessToken = await OAuth2Client.getAccessToken()
	
			// [NODE-MAILER] //
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
				to: config.email.ccpa,
				subject: 'CCPA Request',
				html: `
					<h3 style="margin: 0;">Email: ${email}</h3>
					<h3 style="margin: 0;">Phone: ${phone}</h3>
					<h3 style="margin: 0;">First Name: ${firstName}</h3>
					<h3 style="margin: 0;">Last Name: ${lastName}</h3>
					<h3 style="color: red; margin: 0;">Type Of Request: ${typeOfRequest}</h3>

					<h3 style="margin: 0;">
						California Resident: ${californiaResident}
					</h3>

					<h3 style="margin: 0;">
						Address: ${address.street} ${address.city} ${address.state} ${address.zip}
					</h3>

					<h3 style="margin: 0;">
						Represented: ${behalfOf}
					</h3>

					<h3 style="margin: 0;">
						Representative: ${agent.firstName} ${agent.lastName}
					</h3>

					<h1 style="color: red;">PLEASE REPLY TO EMAIL ABOVE</h1>
				`,
			})
	
			// [LOG] //
			console.log('[mailerUtil] Sent Email:', sentEmail)

			return {
				executed: true,
				status: true,
				send: true,
				message: 'Email Sent',
			}
		}
		catch (err) {
			// [LOG] //
			console.log('[mailerUtil] Caught Error:', err)

			return {
				executed: false,
				status: false,
				message: `mailerUtil: Error --> ${err}`,
			}
		}
	},


	sendContactEmail: async function ({ subject, clientEmail, name, message, attachments }) {
		try {
			// [VALIDATE] subject //
			if (!validator.isAscii(subject)) {
				return {
					executed: true,
					status: false,
					message: 'mailerUtil: Invalid subject',
				}
			}
	
			// [VALIDATE] clientEmail //
			if (!validator.isEmail(clientEmail)) {
				return {
					executed: true,
					status: false,
					message: 'mailerUtil: clientEmail not an email',
				}
			}
	
			// [VALIDATE] name //
			if (!validator.isAscii(name)) {
				return {
					executed: true,
					status: false,
					message: 'mailerUtil: Invalid name',
				}
			}
	
			// [VALIDATE] message //
			if (!validator.isAscii(message)) {
				return {
					executed: true,
					status: false,
					message: 'mailerUtil: Invalid message',
				}
			}
	
			// [VALIDATE] html xss //
			if (attachments) {
				if (!Array.isArray(attachments)) {
					return {
						executed: true,
						status: false,
						message: 'mailerUtil: Attachments must be an array',
					}
				}
			}
	
			// [GOOGLE] OAuth2 //
			const OAuth2Client = new google.auth.OAuth2(
				CLIENT_ID,
				CLIENT_SECRET,
				REDIRECT_URI
			)
	
			// [GOOGLE] getCredentials //
			OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })
	
			// [GOOGLE] getAccessToken //
			const accessToken = await OAuth2Client.getAccessToken()
	
			// [NODE-MAILER] //
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
				to: config.email.careers,
				subject: `PM Contact: ${subject}`,
				html: `
					<h3 style="margin: 0;">Email: ${clientEmail}</h3>
					<h3 style="margin: 0;">Name: ${name}</h3>
					<h3 style="margin: 0; margin-top: 20px;">Message:</h3>
					<p>${message}</p>
				`,
				attachments: attachments,
			})
	
			// [LOG] //
			console.log('[mailerUtil] Sent Email:', sentEmail)

			return {
				executed: true,
				status: true,
				send: true,
				message: 'Email Sent',
			}
		}
		catch (err) {
			// [LOG] //
			console.log('[mailerUtil] Caught Error:', err)

			return {
				executed: false,
				status: false,
				message: `mailerUtil: Error --> ${err}`,
			}
		}
	},
}