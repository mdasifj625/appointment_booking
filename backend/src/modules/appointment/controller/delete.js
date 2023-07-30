export default async function _Delete(req, res) {
  try {
    const postId = req.params.id

    // Delete Appointment Document
    await App.Models.Appointment.deleteOne({ _id: postId })

    return res.success({
      message: App.Messages.Appointment.Success.Deleted,
    })
  } catch (err) {
    Logger.error(err)
  }
}
