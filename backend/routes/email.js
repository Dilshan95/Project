var email = require('emailjs/email');
const express = require('express');
const router= express.Router();

router.post('/', async (req,res) =>{

    let emailAddress=req.body.emailAddress;
    let url=req.body.url;

    console.log(emailAddress);
    console.log(url);

var server = email.server.connect({
    user: "weerakkody95dilshan",
    password:"dilshan12345",
    host:"smtp.gmail.com",
    ssl:true
});
// let url='https://www.google.com/';

    server.send({
        text: "For the confirmation click- "+url,
        from: "weerakkody95dilshan <weerakkody95dilshan@gmail.com>",
        to: emailAddress,
        subject:"confirmation"
    }, function(err,message){
        if(err)
        console.log(err);
        else
        return res.json({success:true, msg: 'sent'});
    });
});

module.exports = router;