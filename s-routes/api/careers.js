// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const fs = require('fs')
const multer = require('multer')


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


router.post(
	'/careers',
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
					const mObj = await mailerUtil.sendCareersEmail({
						subject: req.body.subject,
						clientEmail: req.body.clientEmail,
						name: req.body.name,
						message: req.body.message,
						attachments: [ { path: req.file.path } ],
					})

					// [DELETE] //
					fs.unlink(req.file.path, async (err) => {
						if (!err) {
							switch (mObj.status) {
								case true:
									res.status(200).send({
										executed: true,
										status: true,
										message: mObj.message,
									})
								break
							
								default:
									res.status(200).send(mObj)
								break
							}
						}
						else {
							res.status(200).send({
								executed: true,
								status: false,
								location: '/api/mail/careers',
								message: `/api/mail/careers: Error --> ${err}`,
							})
						}
					})
				}
				// [MAIL-UTIL] WITHOUT ATTACHMENT //
				else {
					const mObj = await mailerUtil.sendCareersEmail({
						subject: req.body.subject,
						clientEmail: req.body.clientEmail,
						name: req.body.name,
						message: req.body.message,
						position: req.body.position,
					})

					res.status(200).send({
						executed: true,
						status: true,
						message: mObj.message,
					})
				}
			}
			else {
				res.status(200).send({
					executed: true,
					status: false,
					location: `/api/mail/careers`,
					message: `/api/mail/careers: Invalid params`,
				})
			}
		}
		catch (err) {
			res.status(200).send({
				executed: false,
				status: false,
				location: '/api/mail/careers',
				message: `/api/mail/careers: Error --> ${err}`,
			})
		}
	}
)


module.exports = router