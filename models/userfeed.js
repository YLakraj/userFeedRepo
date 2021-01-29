//import mongoose
const mongoose = require('mongoose');
//create database schema
const postschema = mongoose.Schema({

  userid :{type:Number, default:0},
  firstname:{type: String, default:''},
  lastname:{type: String, default:''},
  tags:{type: String, default:''},
  frequency:{type: String, default:''},
  source:{type: String, default:''},



})
//export schema
module.exports = mongoose.model('userfeed',postschema );
