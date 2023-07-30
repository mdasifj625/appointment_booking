import Joi from 'joi'

export default Joi.object({
  patientName: Joi.string()
    .regex(/^[a-zA-Z\s]+$/)
    .required()
    .trim(),
  phoneNumber: Joi.string()
    .regex(/^[6789]\d{9}$/)
    .required(),
  doctorName: Joi.string()
    .regex(/^[a-zA-Z\s]+$/)
    .required()
    .trim(),
  gender: Joi.string().valid('male', 'female').required(),
  appointmentDate: Joi.date().required(),
  appointmentTime: Joi.string()
    .regex(/^([01]?\d|2[0-3]):[0-5]\d$/)
    .required(),
  status: Joi.string().valid('consult', 'revisit').required(),
  patientAge: Joi.number().min(1).max(100).required(),
})
