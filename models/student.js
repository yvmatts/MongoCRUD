const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Student Model

const StudentSchema = new Schema({

  name: String,
  age: Number,
  contact: String

});

const Student = mongoose.model('studentmodel',StudentSchema);

//Export Student

module.exports = Student;
