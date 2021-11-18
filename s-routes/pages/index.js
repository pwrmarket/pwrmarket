// [REQUIRE] //
const cors = require('cors')
const express = require('express')


// [REQUIRE] Personal  //
const services = require('../../s-defaults/services')


const router = express.Router().use(cors())

router.get(
	'/',
	async (req, res) => {
		res.send({
			executed: true,
			status: true,
			directory: __dirname,
			reikiTitle: services[0].title,
			reikiDescription: services[0].description,
			services: services,
		})
	}
)


module.exports = router