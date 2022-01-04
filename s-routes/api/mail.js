// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const fs = require('fs')
const multer = require('multer')
const validator = require('validator')


// [REQUIRE] Personal //
const mailerUtil = require('../../s-utils/mailerUtil')


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


// [INIT] Const //
const location = '/api/mail/careers'


router.post(
	'/contact',
	upload.single('file'),
	async (req, res) => {
		try {
			if (
				validator.isAscii(req.body.subject) &&
				validator.isAscii(req.body.clientEmail) &&
				validator.isAscii(req.body.name) &&
				req.body.message
			) {
				// [MAIL-UTIL] WITH ATTACHMENT //
				if (req.file) {
					const mObj = await mailerUtil.sendContactEmail({
						subject: req.body.subject,
						clientEmail: req.body.clientEmail,
						name: req.body.name,
						message: req.body.message,
						attachments: [ { path: req.file.path } ],
					})

					// [DELETE] attachment //
					fs.unlink(req.file.path, async (err) => {
						if (!err) {
							switch (mObj.status) {
								case true:
									res.send({
										executed: true,
										status: true,
										message: mObj.message,
									})
								break
							
								default:
									res.send(mObj)
								break
							}
						}
						else {
							res.send({
								executed: true,
								status: false,
								location: location,
								message: `${location}: Error --> ${err}`,
							})
						}
					})
				}
				// [MAIL-UTIL] WITHOUT ATTACHMENT //
				else {
					const mObj = await mailerUtil.sendContactEmail({
						subject: req.body.subject,
						clientEmail: req.body.clientEmail,
						name: req.body.name,
						message: req.body.message,
						position: req.body.position,
					})

					res.send({
						executed: true,
						status: true,
						message: mObj.message,
					})
				}
			}
			else {
				res.send({
					executed: true,
					status: false,
					location: location,
					message: `${location}: Invalid params`,
				})
			}
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				location: location,
				message: `${location}: Error --> ${err}`,
			})
		}
	}
)


router.post(
	'/ccpa',
	async (req, res) => {
		try {
			if (
				validator.isAscii(req.body.subject) &&
				validator.isAscii(req.body.clientEmail) &&
				validator.isAscii(req.body.name) &&
				req.body.message
			) {
				const mObj = await mailerUtil.sendCCPAEmail({
					subject: req.body.subject,
					clientEmail: req.body.clientEmail,
					name: req.body.name,
					message: req.body.message,
					position: req.body.position,
				})

				res.send({
					executed: true,
					status: true,
					message: mObj.message,
				})
				
			}
			else {
				res.send({
					executed: true,
					status: false,
					location: location,
					message: `${location}: Invalid params`,
				})
			}
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				location: location,
				message: `${location}: Error --> ${err}`,
			})
		}
	}
)


module.exports = router