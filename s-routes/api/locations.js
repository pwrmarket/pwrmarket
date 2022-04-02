// [REQUIRE] //
const cors = require('cors')
const express = require('express')


// [REQUIRE] Personal //
const locations = require('../../s-defaults/locations.json')


// [USE] //
const router = express.Router().use(cors())


router.get(
	'/',
	async (req, res) => {
		try {
			res.send({
				locations: locations,
				executed: true,
				status: true,
			})
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				location: '/api',
				message: `Error --> ${err}`,
			})
		}
	}
)


module.exports = router