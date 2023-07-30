import { Router } from 'express';
import { AppointmentController } from '../controller/index.js';
const appointmentController = new AppointmentController();
const router = Router();

router.get('/ping', (_req, res) => {
	return res.success({ message: 'Hello from appointment route 🚀' });
});

router.post('/', appointmentController.Create);

router.get('/', appointmentController.GetAll);

router.get('/:id', appointmentController.Get);

router.put('/:id', appointmentController.Update);

router.delete('/:id', appointmentController.Delete);

export { router as appointmentRouter };
