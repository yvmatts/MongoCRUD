const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//MongoDB Connection
//before(function(done){

  mongoose.connect('mongodb://localhost/CRUD');
  mongoose.connection.once('open',function(){

    console.log('Mongo Connected');
    //done();
  }).on('error',function(error){

    console.log(error);

  });


//});
