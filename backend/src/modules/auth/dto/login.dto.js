import Joi from 'joi'

export default Joi.object({
  email: Joi.string().email({ tlds: true }).required(),
  password: Joi.string()
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!#$%&*()+,\-./:;<=>?@[\\\]^_`{|}~])(?=.{6,})/,
    )
    .required()
    .trim(),
})
