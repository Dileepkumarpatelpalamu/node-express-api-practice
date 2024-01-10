import Joi from 'joi';

// Joi validation schema for the student model
const studentSchemaValidation = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  age: Joi.number().integer().min(0).required(),
  mobile_no: Joi.number().integer().min(1000000000).max(9999999999).required(),
  email: Joi.string().email().required(),
  marks: Joi.number().integer().min(0).max(100).required(),
  grade: Joi.string().required(),
});

const studentSchemaValidationPartial = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    age: Joi.number().integer().min(0).required(),
    marks: Joi.number().integer().min(0).max(100).required(),
    grade: Joi.string().required(),
  });
export {studentSchemaValidation,studentSchemaValidationPartial};
