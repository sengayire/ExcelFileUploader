import Joi from 'joi';

export default Joi.object({
  names: Joi.string().min(3).required(),
  phone: Joi.string().trim().min(3).required(),
  NID: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }),
  gender: Joi.string().valid('Male', 'Female').required(),
});
