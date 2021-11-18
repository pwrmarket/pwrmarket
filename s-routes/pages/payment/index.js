// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const validator = require('validator')


// [REQUIRE] Personal //
const productsCollection = require('../../../s-collections/productsCollection')


const router = express.Router().use(cors())


router.get(
    '/:product_id',
    async (req, res) => {
		try {
			if (validator.isAscii(req.params.product_id)) {
				const { product } = await productsCollection.c_getProduct(
					req.params.product_id
				)
				
				res.send({
					executed: true,
					status: true,
					product: product,
				})
			}
			else {
				res.send({
					executed: true,
					status: false,
					message: 'Invalid Params',
				})
			}
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				location: '/pages/payments',
				message: `Error --> ${err}`,
			})
		}
    }
)


module.exports = router