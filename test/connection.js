const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//MongoDB Connection
before(function(done){

  mongoose.connect('mongodb://localhost/CRUD',{useNewUrlParser: true});
  mongoose.connection.once('open',function(){

    console.log('Mongo Connected');
    done();
  }).on('error',function(error){

    console.log(error);
    console.log("Not working Properly");

  });


});

//Drop Previous Test Data

beforeEach(function(done){

  mongoose.connection.collections.studentmodels.drop(function(){

    done();

  });

});
