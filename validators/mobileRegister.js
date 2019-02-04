const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
	let errors = {};

	data.brand = !isEmpty(data.brand) ? data.brand : '';
	data.model = !isEmpty(data.model) ? data.model : '';
	data.year = !isEmpty(data.year) ? data.year : '';

	if (Validator.isEmpty(data.brand)){errors.brand = 'Mobile Brand Field is Required';}
	if (Validator.isEmpty(data.model)){errors.model = 'Mobile Model Field is Required';}

	if (getFullYear() <= parseInt(data.year) || parseInt(data.year) <= 2000){errors.year = 'Release Year is Invalid';}

	if (Validator.isEmpty(data.year)){errors.year = 'Release Year Field is Required';}

	return{
		errors,
		isValid: isEmpty(errors)
	};
};