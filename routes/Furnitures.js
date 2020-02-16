const express = require('express');
const router =express.Router();
const Furnitures = require('../models/Furniture')
const auth = require('../auth');

router.post('/furniture',(req,res,next)=>{
    Furnitures.create({
        itemname:req.body.itemname,
        price:req.body.price,
        detail:req.body.detail,
        image:req.body.image
    }).then((callbacks)=>{
        res.json( {status:"Furniture Added successfully",callback:callbacks});
        console.log(callbacks);
    }).catch(next);

});

router.get('/all',(req,res,next)=>{
   Furnitures.find({})
   .then((callbacks)=>{
       res.json(callbacks),
       console.log(callbacks)
   }).catch(next)
});
module.exports=router;