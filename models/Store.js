const mongoose = require('mongoose');
const {
  Schema
} = mongoose;


var delivery = {distributor:"Decresente", day:"Monday"};
var location = {street_address:"123 Connor Ct", zip_code: "12309", city: "albany", state: "New York"}


const storeSchema = new Schema({
  employeeList: Array,                  //the employee list
  deliveryList: Array,                  //the deliveries that the store has every week
  pin: String,                          //the pin for the store to login
  address: location,                    //to have exact location of each store
  contact_info: String,                 //the contact info for the store
});

mongoose.model('store', storeSchema);
