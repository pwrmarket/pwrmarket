const cors = require('cors')
const express = require('express')


const router = express.Router().use(cors())


const menuItems = require('../../s-defaults/menuItems')


router.get(
	'/',
	async (req, res) => {
		res.send({
			executed: true,
			status: true,
			menuItems: menuItems
		})
	}
)


module.exports = router