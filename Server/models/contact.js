const mongoose = require('mongoose');
const ContactSchema = mongoose.Schema({
    student:{type:mongoose.SchemaTypes.ObjectId,ref:'users'},
    address: String,
    phone: String,
    email: String,
});
mongoose.model('contact', ContactSchema);
module.exports = mongoose.model('contact');