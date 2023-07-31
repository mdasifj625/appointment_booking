import requestValidator from '../../../helper/request.validator.js'
import LoginDTO from '../dto/login.dto.js'
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'

export default async function _Login(req, res) {
  try {
    const { errors, value } = await requestValidator(LoginDTO, req.body)
    if (errors) {
      return res.unprocessableEntity({ errors })
    }

    const user = await App.Models.User.findOne(
      { email: value.email },
      'password',
    )

    if (user && (await compare(value.password, user.password))) {
      const token = jwt.sign({ id: user._id }, App.Config.JWT_SECRET)

      return res.success({
        message: App.Messages.User.Success.Login,
        token,
      })
    }

    return res.unauthorized({ error: 'Invalid email or password' })
  } catch (err) {
    Logger.error(err)
  }
}
