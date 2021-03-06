const Appointment = require('../models/Appointments.model');
const database = require('../database.json');
const uniqid = require("uniqid");
const { findDoctor, getDocDateList, getDocDateTimeList, timeCheck, timeStandardize } = require('../utils.js');

const getAppointment = (req, res) => {
    const id = req.params.id;
    if (database.appointments[id]) {
        const appointment = database.appointments[id];
        return res.status(200).json(appointment);
    }
    res.status(404).send({ error: 'Appointment not found.' });
};

const getAppointmentsByDoctor = (req, res) => {
    let appointments = {};
    const doctor = findDoctor(req.params.doctorId);
    if (!doctor) {
        return res.status(404).send({ error: 'Doctor not found.' });
    }
    for (var key in database.appointments) {
        if (database.appointments[key].doctorId == req.params.doctorId) {
            appointments[key] = database.appointments[key];
        }
    }
    if (Object.keys(appointments).length < 1) {
        return res.status(404).send({
            message: 'No appointments found for chosen Doctor.'
        });
    }
    res.json(appointments);
};

const getAppointmentsByDate = (req, res) => {
    let appointments = {};
    for (var key in database.appointments) {
        if (database.appointments[key].date == req.params.date) {
            appointments[key] = database.appointments[key];
        }
    }
    if (Object.keys(appointments).length < 1) {
        return res.status(404).send({
            message: 'No appointments found on this date.'
        });
    }
    res.json(appointments);
};

const getAppointmentsByDoctorDate = (req, res) => {
    const appointments = getDocDateList(req);
    const doctor = findDoctor(req.params.doctorId);
    if (!doctor) {
        return res.status(404).send({ error: 'Doctor not found.' });
    }
    if (Object.keys(appointments).length < 1) {
        return res.status(404).send({
            message: 'No appointments found for chosen Doctor on this date.'
        });
    }
    res.status(200).json(appointments);
};

const getAllAppointments = (req, res) => {
    if (Object.keys(database.appointments).length < 1) {
        return res.status(404).send({
            message: 'No appointments found.'
        });
    }
    res.status(200).json(database.appointments);
};

const postAppointment = (req, res) => {
    const list = getDocDateTimeList(req);
    const doctor = findDoctor(req.body.doctorId);
    const id = uniqid();
    let newAppointment = new Appointment();

    if (Object.keys(list).length >= 3) {
        return res.status(400).send({ error: 'Doctor cannot accept any more appointments at this date/time.' })
    }
    if ((timeCheck(req.body.time)) == false) {
        return res.status(400).send({ error: 'Unable to make appointment. New appointments can only start at 15 minute intervals.' });
    }
    if (!doctor) {
        return res.status(404).send({ error: 'Doctor not found. Cannot create an appointment for a doctor before creating doctor.' });
    }

    newAppointment.doctorId = req.body.doctorId;
    newAppointment.patientFirst = req.body.patientFirst;
    newAppointment.patientLast = req.body.patientLast;
    newAppointment.date = req.body.date;
    newAppointment.time = timeStandardize(req.body.time);
    newAppointment.type = req.body.type;
    database.appointments[id] = newAppointment;

    res.status(200).json(newAppointment);
};

const putAppointment = (req, res) => {
    if (req.params.id) {
        if (!database.appointments[req.params.id]) {
            return res.status(404).send({ error: 'Appointment not found. Cannot edit unknown appointment' });
        }
    }
    let appointment = database.appointments[req.params.id];
    if (req.body.doctorId) {
        if (!(findDoctor(req.body.doctorId))) {
            return res.status(404).send({ error: 'Doctor not found. Cannot update appointment for a doctor before creating that doctor.' });
        }
        appointment.doctorId = req.body.doctorId;
    }
    if (req.body.time & req.body.date) {
        const list = getDocDateTimeList(req);
        if (Object.keys(list).length >= 3) {
            return res.status(400).send({ error: 'Doctor cannot accept any more appointments at this date/time.' });
        }
        if ((timeCheck(req.body.time)) == false) {
            return res.status(400).send({ error: 'Unable to make appointment. New appointments can only start at 15 minute intervals.' });
        }
        appointment.date = req.body.date;
        appointment.time = timeStandardize(req.body.time);
    }
    if (req.body.type) {
        appointment.type = req.body.type;
    }
    if (req.body.patientFirst) {
        appointment.patientFirst = req.body.patientFirst;
    }
    if (req.body.patientLast) {
        appointment.patientLast = req.body.patientLast;
    }
    database.appointments[req.params.id] = appointment;

    res.status(200).json(database.appointments[req.params.id]);
};

const deleteAppointment = (req, res) => {
    let id = req.params.id;
    if (database.appointments[id]) {
        delete database.appointments[id];
        return res.status(200).json(database.appointments);
    }
    res.status(404).send({ error: 'Unable to delete appointment. Appointment not found.' });
};

module.exports = { getAppointment, getAppointmentsByDoctor, getAppointmentsByDate, getAppointmentsByDoctorDate, getAllAppointments, postAppointment, putAppointment, deleteAppointment };