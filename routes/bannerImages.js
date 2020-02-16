const express= require('express');
const router = express.Router();
const banneritem= require('../models/banneritem');
const auth= require('../auth');

router.get('/all',(req,res,next)=>{
    banneritem.find({},(err,callback)=>{
        if(err){
            let err = new Error("Error retrieving Banner images");
            err.status=401;
            return next(err);
        }
        res.json(callback);
        console.log(callback);
    })
});

router.post('/create',(req,res,next)=>{
    banneritem.create({
        bannerName:req.body.bannerName,
        images:req.body.images,
        descriptions:req.body.descriptions
    }).then((callback)=>{
        res.json({status:"banner images saved"})
        console.log(callback);
    }).catch(next);
});

module.exports=router;