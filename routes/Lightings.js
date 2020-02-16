const express = require('express');
const router =express.Router();
const Lightings = require('../models/Lighting')
const auth = require('../auth');

router.post('/lighting',(req,res,next)=>{
    Lightings.create({
        itemname:req.body.itemname,
        price:req.body.price,
        detail:req.body.detail,
        image:req.body.image
    }).then((callbacks)=>{
        res.json( {status:"Lighting Added successfully",callback:callbacks});
        console.log(callbacks);
    }).catch(next);

});

router.get('/all',(req,res,next)=>{
   Lightings.find({})
   .then((callbacks)=>{
       res.json(callbacks),
       console.log(callbacks)
   }).catch(next)
});
module.exports=router;