const mongoose = require('mongoose');
const express = require('express');
const app = express();

const counters=require('./routes/counters');
const vehicles=require('./routes/vehicles');
const drivers=require('./routes/drivers');
const department=require('./routes/department');
const faculty=require('./routes/faculty');
const student=require('./routes/student');
const studentLogin=require('./routes/studentLogin');
const user=require('./routes/user');
const userLogin=require('./routes/userLogin');
const reservations=require('./routes/reservations');
const email=require('./routes/email');


mongoose.connect('mongodb://localhost/UOK',{ useNewUrlParser: true })
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
app.use('/api/counters',counters);
app.use('/api/vehicles',vehicles);
app.use('/api/drivers',drivers);
app.use('/api/department',department);
app.use('/api/faculty',faculty);
app.use('/api/student',student);
app.use('/api/studentLogin',studentLogin);
app.use('/api/user',user);
app.use('/api/userLogin',userLogin);
app.use('/api/reservations',reservations);
app.use('/api/email',email);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));