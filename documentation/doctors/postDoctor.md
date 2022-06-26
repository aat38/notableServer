## POST '/doctors'

### Params:

| Param  | Type |
| ------------- | ------------- |
| "first" | String |
| "last"  | String  |

<br/>

### Example Request:

    http://localhost:3000/doctors

    Body:
        {
            "first": "New",
            "last": "Doctor"
        }

### Example Response:

    200
        {
            "NewDoctor": {
                "first": "New",
                "last": "Doctor"
            }
        }    
