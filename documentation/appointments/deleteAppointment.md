## DELETE '/appointments/:id'

### Params: 

| Param  | Type |
| ------------- | ------------- |
| "id" | String |

<br/>

### Example Request:

    http://localhost:3000/appointments/AppointmentId


### Example Response:

    200
        {
            "uniqueAptId1": {
                "doctorId": "uniqueDocId1",
                "patientFirst": "first",
                "patientLast": "last",
                "date": "05-30-2022",
                "time": "9:45AM",
                "type": "new-patient"
            },
            "uniqueAptId3": {
                "doctorId": "uniqueDocId2",
                "patientFirst": "pF",
                "patientLast": "pL",
                "date": "08-15-2022",
                "time": "2:00PM",
                "type": "follow-up"
            }
        } 

### Example Error:

    404
        {
        "error": "Unable to delete appointment. Appointment not found."
        }