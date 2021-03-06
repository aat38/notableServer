const Doctor = require('../models/doctors.model');
const database = require('../database.json')
const { camelCase, findDoctor } = require('../utils.js');

const getDoctor = (req, res) => {
    const doctor = findDoctor(req.params.id);
    if (doctor) {
        return res.status(200).json(doctor);
    }
    return res.status(404).send({ error: 'Doctor not found.' });
};

const getAllDoctors = (req, res) => {
    if (Object.keys(database.doctors).length < 1) {
        return res.status(404).send({
            message: 'No doctors found.'
        });
    }
    res.status(200).json(database.doctors);
};

const postDoctor = (req, res) => {
    let newDoc = new Doctor();
    const id = camelCase(req.body.first, req.body.last);
    newDoc.first = req.body.first;
    newDoc.last = req.body.last;
    database.doctors[id] = newDoc;
    res.status(200).json(newDoc);
};

const deleteDoctor = (req, res) => {
    const id = req.params.id;
    if (database.doctors[id]) {
        delete database.doctors[id];
        return res.status(200).json(database.doctors);
    }
    return res.status(404).send({ error: 'Unable to delete. Doctor not found.' });
};

module.exports = { getDoctor, getAllDoctors, postDoctor, deleteDoctor };