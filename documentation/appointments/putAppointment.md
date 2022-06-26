## PUT '/appointments/:id'

### Params:

| Param  | Type |
| ------------- | ------------- |
| "id" | String |
| "doctorId" | String |
| "patientFirst"  | String  |
| "patientLast"  | String  |
| "date"  | String: <em>MM-DD-YYYY<em/> |
| "time"  | String: <em>ie "10:00AM", "2:15PM"<em/> |
| "type"  | String: <em>"new-patient" OR "follow-up" ONLY<em/> |

<br/>

### Example Request:

    http://localhost:3000/appointments/appointmentId567

    Body: 
        {        
            "doctorId": "Doctor3",
            "date": "10-20-2022",
        }

### Example Response:

    200
        {        
            "doctorId": "Doctor3",
            "patientFirst": "first",
            "patientLast": "last",
            "date": "10-20-2022",
            "time": "9:45AM",
            "type": "new-patient"
        }

Example Error:

    404
        {
        "error": "Doctor not found. Cannot update appointment for a doctor before creating that doctor."
        }


    404
        {
        "error": "Appointment not found. Cannot edit unknown appointment"
        }


    400
        {
        "error": "Doctor cannot accept any more appointments at this date/time."
        }

    400
        {
        "error": "Unable to change appointment. New appointments can only start at 15 minute intervals."
        }
    
    