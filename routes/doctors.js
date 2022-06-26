const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctors');

router.get('/doctors/:id', doctorController.getDoctor);
router.get('/doctors', doctorController.getAllDoctors);
router.post('/doctors', doctorController.postDoctor);
router.delete('/doctors/:id', doctorController.deleteDoctor);

module.exports = router; 