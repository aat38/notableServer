## GET '/appointments/doctor/:doctorId'


### Params: 

| Param  | Type |
| ------------- | ------------- |
| "doctorId" | String |

<br/>

### Example Request:

    http://localhost:3000/appointments/doctor/FirstLast


### Example Response:

    200
        {
            "dwiert9acl4vuu8xt": {
                "doctorId": "FirstLast",
                "patientFirst": "first",
                "patientLast": "last",
                "date": "08-15-2022",
                "time": "9:45AM",
                "type": "follow-up"
            }
        }


    
    200
        {
            "message": "No appointments found for chosen Doctor."
        }

### Example Error:

    404
        {
            "error": "Doctor not found."
        }
