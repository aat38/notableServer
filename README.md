Thank you for taking the time to evaluate my application.
<br/>

To begin, install all dependencies with:
```
$ npm install
```

Then run the server with:
```
$ node server.js
```

<br/>
Consult the API documentation in notableHealth/documentation before testing in Postman.

#### Appointments 
|  Route | Method       | Endpoint |
| :------------- | :------------- | -----:|
| /appointments/:id | ```DELETE```      | [deleteAppointment](documentation/appointments/deleteAppointment.md) |
| /appointments | ```GET```      | [getAllAppointments](documentation/appointments/getAllAppointments.md) |
| /appointments/:id | ```GET```      | [getAppointment](documentation/appointments/getAppointment.md) |
| /appointments/date/:date | ```GET```      | [getAppointmentsByDate](documentation/appointments/getAppointmentsByDate.md) |
| /appointments/doctor/:doctorId | ```GET```      | [getAppointmentsByDoctor](documentation/appointments/getAppointmentsByDoctor.md) |
| /appointments/doctor/:doctorId/date/:date | ```GET```      | [getAppointmentsByDoctorDate](documentation/appointments/getAppointmentsByDoctorDate.md) |
| /appointments | ```POST```      | [postAppointment](documentation/appointments/postAppointment.md) |
| /appointments/:id | ```PUT```      | [putAppointment](documentation/appointments/putAppointment.md) |

<br/>

#### Doctors 
|  Route | Method       | Endpoint |
| :------------- | :------------- | -----:|
| /doctors/:id | ```DELETE```      | [deleteDoctor](documentation/doctors/deleteDoctor.md) |
| /doctors | ```GET```      | [getAllDoctors](documentation/doctors/getAllDoctors.md) |
| /doctors/:id | ```GET```      | [getDoctor](documentation/doctors/getDoctor.md) |
| /doctors | ```POST```      | [getDoctor](documentation/doctors/postDoctor.md) |
