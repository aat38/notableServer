## GET '/appointments/doctor/:doctorId/date/:date'


### Params: 

| Param  | Type |
| ------------- | ------------- |
| "doctorId" | String |
| "date"  | String: <em>MM-DD-YYYY<em/> |

<br/>

### Example Request:

    http://localhost:3000/appointments/doctor/FirstLast/date/08-15-2022


### Example Response:

    200
        {
            "appointmentIdwiert9acl4vuu8xt": {
                "doctorId": "FirstLast",
                "patientFirst": "first",
                "patientLast": "last",
                "date": "08-15-2022",
                "time": "9:45AM",
                "type": "follow-up"
            }
        }


### Example Error:

    404
        {
            "error": "Doctor not found."
        }

    
    404
        {
            "error": "No appointments found for chosen Doctor on this date."
        }

