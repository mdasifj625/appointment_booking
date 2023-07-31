import Joi from 'joi'

export default Joi.object({
  name: Joi.string()
    .regex(/^[a-zA-Z\s]+$/)
    .required()
    .trim(),
  email: Joi.string().email({ tlds: true }).required(),
  password: Joi.string()
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!#$%&*()+,\-./:;<=>?@[\\\]^_`{|}~])(?=.{6,})/,
    )
    .required()
    .trim(),
  gender: Joi.string().valid('male', 'female').required(),
})
