## DELETE '/doctors/:id'


Example Request:

    http://localhost:3000/doctors/randomdoctorId

Example Response:

    200
        {
            "uniqueDocId1": {
                "first": "FirstName1",
                "last": "LastName1"
            },
            "uniqueDocId3": {
                "first": "FirstName2",
                "last": "LastName2"
            },
            "uniqueDocId2": {
                "first": "FirstName3",
                "last": "LastName3"
            }
        }    

Example Error:

    404
        {
        "error": "Unable to delete doctor. Doctor not found."
        }