const cors = require('cors')
const express = require('express')


const router = express.Router().use(cors())


router.get(
	'/',
	async (req, res) => {
		const lit = {
			executed: true,
			status: true,
			directory: __dirname,
		}
		res.send(lit)
	}
)


module.exports = router