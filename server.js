const express = require('express')
const appointments = require('./routes/appointments');
const doctors = require('./routes/doctors');
const app = express();
const port = 3000;

app.use(express.json());
app.use('/', appointments);
app.use('/', doctors);

app.get('/', (req, res) => {
    res.send('Notable Server');
});

app.listen(port, () => {
    console.log(`Notable Server listening on port ${port}`);
});