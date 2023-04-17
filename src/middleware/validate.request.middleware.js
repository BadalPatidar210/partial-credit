const Joi = require('joi');
const pick = require('../commons/utils/pick');

const validate = (schema) => (req, res, next) => {
    const validSchema = pick(schema, ['params', 'query', 'body']);
    const object = pick(req, Object.keys(validSchema));
    const { value, error } = Joi.compile(validSchema)
        .prefs({ errors: { label: 'key' }, abortEarly: false })
        .validate(object);
    if (error) {
        const errorMessage = error.details.map((details) => details.message).join(', ');
        // return next(new ApiError(errorMessage, httpStatus.BAD_REQUEST));
        // res.sendBadRequestResponse(errorMessage);
        console.error(errorMessage);
        return;
    }
    Object.assign(req, value);
    next();
};

module.exports = validate;
