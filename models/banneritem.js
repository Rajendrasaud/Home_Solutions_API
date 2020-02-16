const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
    bannerName:{
        type:String
    },
    images:{
        type:String
    },
    descriptions:{
        type:String
    }

});
module.exports = mongoose.model('banneritem',bannerSchema);