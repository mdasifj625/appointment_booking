export default async function _Get(req, res) {
  try {
    const postId = req.params.id

    // Get Appointment details Document
    const appointment = await App.Models.Appointment.findOne({
      _id: postId,
    })
    return res.success({
      message: App.Messages.Appointment.Success.Get,
      items: appointment,
    })
  } catch (err) {
    Logger.error(err)
  }
}
