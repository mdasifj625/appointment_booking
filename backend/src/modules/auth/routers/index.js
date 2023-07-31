import { Router } from 'express'
import { AuthController } from '../controller/index.js'
const authController = new AuthController()
const router = Router()

router.get('/ping', (_req, res) => {
  return res.success({ message: 'Hello from auth route 🚀' })
})

router.post('/register', authController.Register)
router.post('/login', authController.Login)

export { router as authRouter }
