const database = require('./database.json');

module.exports = {
    camelCase: function (first, last) {
        const firstName = first[0].toUpperCase() + first.substring(1);
        const lastName = last[0].toUpperCase() + last.substring(1);
        return firstName + lastName;
    },
    findDoctor: function (id) {
        if (database.doctors[id]) {
            let doctor = database.doctors[id];
            return doctor;
        }
        return false;
    },
    getDocDateList: function (req) {
        let appointments = {};
        for (var key in database.appointments) {
            if ((database.appointments[key].doctorId == req.params.doctorId) & (database.appointments[key].date == req.params.date)) {
                appointments[key] = database.appointments[key];
            }
        }
        return appointments;
    },
    getDocDateTimeList: function (req) {
        let sameTimeAppts = {};
        for (var key in database.appointments) {
            if (database.appointments[key].doctorId == req.body.doctorId) {
                if ((database.appointments[key].time == req.body.time) & (database.appointments[key].date == req.body.date)) {
                    sameTimeAppts[key] = database.appointments[key];
                }
            }
        }
        return sameTimeAppts;
    },
    timeCheck: function (rawTime) {
        // ensures the time is in 15 minute increments
        const numericalTime = rawTime.replace(/\D/g, '');
        const minutes = numericalTime.substring(numericalTime.length, numericalTime.length - 2);
        if (minutes % 15 == 0) {
            return true;
        }
        return false;
    },
    timeStandardize: function (rawTime) {
        // removes any spaces and capitalizes AM and PM
        let time = rawTime.replace(/\s+/g, '');
        time = time.toUpperCase();
        return time;
    }
};



