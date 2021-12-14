// [REQUIRE] //
const cors = require('cors')
const express = require('express')


// [USE] //
const router = express.Router().use(cors())


router.get(
	'/',
	async (req, res) => {
		try {
			res.send({
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