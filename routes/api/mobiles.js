const express = require('express');
const router = express.Router();
// const keys = require('../../config/keys');

// // Load Input Validations
const validateMobileRegisterInput = require('../../validators/mobileRegister');

// Load Mobile model
const Mobile = require('../../models/Mobile');

// @route 	GET api/mobiles/test
// @desc 	Tests mobiles route
// @access 	Public
router.get('/test', (req, res) => res.json({msg: 'Mobiles test api Works'}));

// @route 	GET api/mobiles/register
// @desc 	register new user
// @access 	Public
router.post('/register', (req, res) => {
	const {errors, isValid} = validateMobileRegisterInput(req.body);

	// check validations
	if (!isValid) {
		return res.status(400).json(errors);
	}

	Mobile.findOne({ brand: req.body.brand, model: req.body.model }).then(mobile => {
		if (mobile) {
			// console.log(mobile);
			errors.model = 'Mobile of this model already exists';
			return res.status(400).json(errors);
		} else {
			const newMobile = new Mobile({
				brand: req.body.brand,
				model: req.body.model,
				year: req.body.year,
			});
		}
	});
});

module.exports = router;