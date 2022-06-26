const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointments');

router.get('/appointments/:id', appointmentController.getAppointment);
router.get('/appointments/doctor/:doctorId', appointmentController.getAppointmentsByDoctor);
router.get('/appointments/date/:date', appointmentController.getAppointmentsByDate);
router.get('/appointments/doctor/:doctorId/date/:date', appointmentController.getAppointmentsByDoctorDate);
router.get('/appointments', appointmentController.getAllAppointments);
router.put('/appointments/:id', appointmentController.putAppointment);
router.post('/appointments', appointmentController.postAppointment);
router.delete('/appointments/:id', appointmentController.deleteAppointment);

module.exports = router; 