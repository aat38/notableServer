## GET '/appointments/date/:date'


Example Request:

    http://localhost:3000/appointments/date/08-15-2022


Example Response:

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



Example Error:

    404
        {
            "message": "No appointments found for chosen Doctor on this date."
        }

