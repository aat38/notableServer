## GET '/appointments/:id'

### Params: 

| Param  | Type |
| ------------- | ------------- |
| "id" | String |

<br/>

### Example Request:

    http://localhost:3000/appointments/:id


### Example Response:

    200
        {
            "doctorId": "FirstLast",
            "patientFirst": "first",
            "patientLast": "last",
            "date": "08-15-2022",
            "time": "9:45AM",
            "type": "follow-up"
        }


### Example Error:

    404
        {
            "error": "Appointment not found."
        }
