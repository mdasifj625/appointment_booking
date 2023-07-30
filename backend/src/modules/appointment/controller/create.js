import requestValidator from '../../../helper/request.validator.js'
import CreateDTO from '../dto/appointment.create.dto.js'

export default async function _Create(req, res) {
  try {
    const { errors, value } = await requestValidator(CreateDTO, req.body)
    if (errors) {
      return res.unprocessableEntity({ errors })
    }

    // Create appointment Document
    await App.Models.Appointment.create(value)

    return res.created({
      message: App.Messages.Appointment.Success.Created,
    })
  } catch (err) {
    Logger.error(err)
  }
}
