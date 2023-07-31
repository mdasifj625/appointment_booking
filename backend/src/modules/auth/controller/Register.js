import requestValidator from '../../../helper/request.validator.js'
import RegisterDTO from '../dto/register.dto.js'

export default async function _Register(req, res) {
  try {
    const { errors, value } = await requestValidator(RegisterDTO, req.body)
    if (errors) {
      return res.unprocessableEntity({ errors })
    }

    // Check if user Exist
    const user = await App.Models.User.findOne({ email: value.email })

    if (user)
      return res.conflict({
        message: 'User already exist',
      })

    // Create appointment Document
    await App.Models.User.create(value)

    return res.created({
      message: App.Messages.User.Success.Created,
    })
  } catch (err) {
    Logger.error(err)
  }
}
