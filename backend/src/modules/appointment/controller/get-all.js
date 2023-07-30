export default async function _GetAll(req, res) {
  try {
    // Get All Appointment Document
    const appointments = await App.Models.Appointment.find().sort({
      createdAt: -1,
    })

    return res.success({
      message: App.Messages.Appointment.Success.GetAll,
      items: appointments,
    })
  } catch (err) {
    Logger.error(err)
  }
}
