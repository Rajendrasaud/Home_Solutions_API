const express = require('express');
const router =express.Router();
const Kitchenwares = require('../models/Kitchenware')
const auth = require('../auth');

router.post('/kitchenware',(req,res,next)=>{
    Kitchenwares.create({
        itemname:req.body.itemname,
        price:req.body.price,
        detail:req.body.detail,
        image:req.body.image
    }).then((callbacks)=>{
        res.json( {status:"Kitchenware Added successfully",callback:callbacks});
        console.log(callbacks);
    }).catch(next);

});

router.get('/all',(req,res,next)=>{
   Kitchenwares.find({})
   .then((callbacks)=>{
       res.json(callbacks);
   }).catch(next)
});
module.exports=router;