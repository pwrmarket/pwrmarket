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
			await transporter.sendMail({
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
}