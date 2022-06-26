## GET '/appointments'


### Example Request:

    http://localhost:3000/appointments


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
            "uniqueAptId2": {
                "doctorId": "uniqueDocId3",
                "patientFirst": "pF",
                "patientLast": "pL",
                "date": "08-15-2022",
                "time": "10:45AM",
                "type": "follow-up"
            },
            "uniqueAptId3": {
                "doctorId": "uniqueDocId3",
                "patientFirst": "pF",
                "patientLast": "pL",
                "date": "08-15-2022",
                "time": "2:00PM",
                "type": "follow-up"
            },
            "uniqueAptId4": {
                "doctorId": "uniqueDocId1",
                "patientFirst": "pF",
                "patientLast": "pL",
                "date": "05-30-2022",
                "time": "10:45AM",
                "type": "follow-up"
            },
            "dwiert9acl4vuu8xt": {
                "doctorId": "FirstLast",
                "patientFirst": "first",
                "patientLast": "last",
                "date": "08-15-2022",
                "time": "9:45AM",
                "type": "new-patient"
            }
        }


### Example Error:

    404
        {
            "message": "No appointments found."
        }






