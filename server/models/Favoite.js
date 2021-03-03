const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const favoiteSchema = mongoose.Schema({
    userFrom:{
      type:Schema.Types.ObjectId,
      ref:'User',
    },
    movieId :{
      type:String,
    },
    movieTitle:{
      type:String,
    },
    moviePost:{
      type:String
    },
    MovieRunTime:{
      type:String
    },
},{timestamps:true})




const Favoite = mongoose.model('Favoite', favoiteSchema);

module.exports = { Favoite }