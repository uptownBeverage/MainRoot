const mongoose = require('mongoose');
const {
  Schema
} = mongoose;


var delivery = {distributor:"Decresente", day:"Monday"};


const storeSchema = new Schema({
  employeeList: Array,
  deliveryList: Array,
  pin: String,  
});

mongoose.model('store', storeSchema);
