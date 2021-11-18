const cors = require('cors')
const express = require('express')


const router = express.Router().use(cors())


const services = require('../../s-defaults/services')


router.get(
	'/',
	async (req, res) => {
		res.send({
			executed: true,
			status: true,
			services: services
		})
	}
)


module.exports = router