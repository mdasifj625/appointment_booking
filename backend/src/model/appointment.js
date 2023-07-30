import { Schema, model as Model } from 'mongoose'

const schema = new Schema(
  {
    patientName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    doctorName: { type: String, required: true },
    gender: {
      type: String,
      enum: ['male', 'female'],
      required: true,
    },
    appointmentDate: {
      type: Date,
      required: true,
    },
    appointmentTime: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['consult', 'revisit'],
      required: true,
    },
    patientAge: {
      type: Number,
      required: true,
    },
  },
  {
    autoIndex: true,
    versionKey: false,
    timestamps: true,
  }
)
const AppointmentModel = Model('Appointment', schema)

export { AppointmentModel }
