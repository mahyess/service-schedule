const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
    let errors = {};

    data.mobile = !isEmpty(data.mobile) ? data.mobile : '';
    // data.handle = !isEmpty(data.handle) ? data.handle : '';
    data.title = !isEmpty(data.title) ? data.title : '';
    data.type = !isEmpty(data.type) ? data.type : '';

    // if (!Validator.isLength(data.handle, {min:2, max:40})){
    //     errors.handle = 'Handle needs to be between 2 to 40 characters';
    // };

    // if (Validator.isEmpty(data.handle)){
    //     errors.handle = 'Profile Handle is required';
    // };
    
    if (Validator.isEmpty(data.mobile)){
        errors.mobile = 'Mobile Field is required';
    };

    if (Validator.isEmpty(data.title)){
        errors.title = 'Repair Title Field is required';
    };

    if (Validator.isEmpty(data.type)){
        errors.type = 'Repair Type Field is required';
    };

    return{
        errors,
        isValid: isEmpty(errors)
    };
};