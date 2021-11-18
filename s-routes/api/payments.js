// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const Stripe = require('stripe')
const validator = require('validator')


// [REQUIRE] Personal //
const config = require('../../s-config/index')
const productsCollection = require('../../s-collections/productsCollection')


// [STRIPE] //
const stripe = Stripe(config.STRIPE_SECRET_KEY)


// [USE] //
const router = express.Router().use(cors())


router.get(
	'/balance',
	async (req, res) => {
		try {
			const balance = await stripe.balance.retrieve()

			res.send({
				executed: true,
				status: true,
				location: '/api/payments/balance',
				message: 'Successfully retrieved balance',
				balance: balance,
			})
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


router.get(
	'/transactions',
	async (req, res) => {
		try {
			const balanceTransactions = await stripe.balanceTransactions.list({
				limit: 3,
			})

			res.send({
				executed: true,
				status: true,
				location: '/api/payments/transactions',
				message: 'Successfully retrieved balance',
				balanceTransactions: balanceTransactions,
			})
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				location: '/api/payments/transactions',
				message: `Error --> ${err}`,
			})
		}
	}
)


router.post(
	'/charge',
	async (req, res) => {
		try {
			// [VALIDATION] //
			if (validator.isAscii(req.body.product_id)) {
				if (validator.isEmail(req.body.email)) {
					// [GET-PRODUCT] //
					const pObj = await productsCollection.c_getProduct(
						req.body.product_id
					)

					if (pObj.product) {
						// [STRIPE] Charge //
						const charge = await stripe.charges.create({
							amount: pObj.product.downPayment * 100,
							currency: 'usd',
							receipt_email: req.body.email,
							description: `
								purchase of ${pObj.product.type} ${pObj.product.name}
							`,
							source: req.body.token.id
						})
			
						// Payment success/fail //
						if (pObj.paid == true) {
							res.send({
								executed: true,
								status: true,
								location: '/api/payments/transactions',
								message: 'Success!',
								paid: true,
							})
						}
						else {
							res.send({
								executed: true,
								status: true,
								location: '/api/payments/transactions',
								message: 'Something went wrong',
								paid: false,
							})
						}
					}
					else {
						res.send({
							executed: true,
							status: false,
							location: '/api/payments/charge',
							message: 'No product found'
						})
					}
				}
				else {
					res.send({
						executed: true,
						status: false,
						location: '/api/payments/charge',
						message: 'Invalid Email'
					})
				}
			}
			else {
				res.send({
					executed: true,
					status: false,
					location: '/api/payments/charge',
					message: `Invalid product_id`
				})
			}
		}
		catch (err) {
			console.log(err);
			res.send({
				executed: false,
				status: false,
				location: '/api/payments/charge',
				message: `Error --> ${err}`
			})
		}
	}
)


module.exports = router