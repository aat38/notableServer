## GET '/doctors/:id'

### Params: 

| Param  | Type |
| ------------- | ------------- |
| "id" | String |

<br/>

### Example Request:

    http://localhost:3000/doctors/SamuelTenor

### Example Response:

    200
        {
            "SamuelTenor": {
                "first": "FirstName1",
                "last": "LastName1"
            }
        }    

### Example Error:

    404
        {
            "message":"Doctor not found"
        }