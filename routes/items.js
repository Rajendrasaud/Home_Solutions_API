const express = require('express');
const router =express.Router();
const items = require('../models/item')
const auth = require('../auth');

router.post('/create',(req,res,next)=>{
    items.create({
        itemname:req.body.itemname,
        price:req.body.price,
        detail:req.body.detail,
        image:req.body.image
    }).then((callbacks)=>{
        res.json( {status:"item created successfully",callback:callbacks});
        console.log(callbacks);
    }).catch(next);

});

router.get('/all',(req,res,next)=>{
   items.find({})
   .then((callbacks)=>{
       res.json(callbacks);
   }).catch(next)
});
module.exports=router;