// const mongoose =require('mongoose');

// const serviceschema=new mongoose.Schema({
//     image:{type:String,required:true},
//     name:{type:String,required:true}
// })
// const Service=mongoose.model("services",serviceschema);
// module.exports=Service;

const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

module.exports = mongoose.model('Service', ServiceSchema);

// Check the connection
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to the database');
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error:', err);
});
