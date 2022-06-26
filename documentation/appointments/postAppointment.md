## POST '/appointments'

### Params:

| Param  | Type |
| ------------- | ------------- |
| "doctorId" | String |
| "patientFirst"  | String  |
| "patientLast"  | String  |
| "date"  | String: <em>MM-DD-YYYY<em/> |
| "time"  | String: <em>ie "10:00AM", "2:15PM"<em/> |
| "type"  | String: <em>"new-patient" OR "follow-up" ONLY<em/> |

<br/>

### Example Request:

    http://localhost:3000/appointments

    Body: 
        {        
            "doctorId": "Doctor",
            "patientFirst": "first",
            "patientLast": "last",
            "date": "08-15-2022",
            "time": "9:45AM",
            "type": "new-patient"
        }

### Example Response:

    200
        {        
            "doctorId": "Doctor",
            "patientFirst": "first",
            "patientLast": "last",
            "date": "08-15-2022",
            "time": "9:45AM",
            "type": "new-patient"
        }

Example Error:

    404
        {
        "error": "Doctor not found. Cannot create an appointment for a doctor before creating doctor."
        }


    400
        {
        "error": "Unable to make appointment. New appointments can only start at 15 minute intervals."
        }


    404
        {
        "error": "Doctor cannot accept any more appointments at this date/time."
        }