import requestValidator from '../../../helper/request.validator.js'
import UpdateDTO from '../dto/appointment.create.dto.js'

export default async function _UpdatePost(req, res) {
  try {
    const { errors, value } = await requestValidator(UpdateDTO, req.body)
    if (errors) {
      return res.unprocessableEntity({ errors })
    }

    const postId = req.params.id

    // Update Appointment Document
    const appointment = await App.Models.Appointment.findOneAndUpdate(
      { _id: postId },
      value,
      { new: true }
    )

    return res.success({
      message: App.Messages.Appointment.Success.Updated,
      items: appointment,
    })
  } catch (err) {
    Logger.error(err)
  }
}
