const mocha = require('mocha');
const assert = require('assert');
const Student = require('../models/student.js');


describe('Find Test',function(){

beforeEach(function(done){

  var s = new Student({

    name: "Yash",
    age: 21,
    contact: "8050002948"

  });

  s.save().then(function(){

    console.log('Saved');
    done();

  });

});


  it('Find Record', function(done){

      Student.findOne({name:"Yash",age:21,contact:"8050002948"}).then(function(result){

          assert(result.name === "Yash");
          done();

      });

  });

});
