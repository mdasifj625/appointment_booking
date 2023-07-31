import { Schema, model as Model } from 'mongoose'
import { hash } from 'bcrypt'

const schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: {
      type: String,
      enum: ['male', 'female'],
      required: true,
    },
    password: { type: String, select: false, required: true },
  },
  {
    autoIndex: true,
    versionKey: false,
    timestamps: true,
  },
)

// Encrypt user password before save
schema.pre('save', async function () {
  // Check if the 'password' field has been modified (or is new)
  if (this.isModified('password')) {
    try {
      // Hash the password using bcrypt with a salt of 10 rounds
      const hashedPassword = await hash(this.password, App.Config.SALT_ROUNDS)

      // Update the document with the hashed password
      this.password = hashedPassword
    } catch (error) {
      console.error('Error hashing password:', error)
    }
  }
})

const UserModel = Model('User', schema)

export { UserModel }
