import Joi from 'joi';

const userValidation = Joi.object({
  username: Joi.string().required().trim(),
  email: Joi.string().email().required().trim().lowercase(),
  mobile_no: Joi.string().required().trim(),
  password: Joi.string().required(),
  firstName: Joi.string().trim(),
  lastName: Joi.string().trim(),
});

export default userValidation;
