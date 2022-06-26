function Appointment(doctorId, patientFirst, patientLast, date, time, type) {
    this.doctorId = doctorId;
    this.patientFirst = patientFirst;
    this.patientLast = patientLast;
    this.date = date;
    this.time = time;
    this.type = type;
}


module.exports = Appointment;