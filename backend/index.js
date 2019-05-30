const mongoose = require('mongoose');
const express = require('express');
const app = express();
const vehicles=require('./routes/vehicles');

mongoose.connect('mongodb://localhost/UOKVehicleReservation',{ useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));
 
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,PUT, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});
   
app.use(express.json());
app.use('api/vehicles',vehicles);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));