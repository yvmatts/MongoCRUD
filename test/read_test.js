const mocha = require('mocha');
const assert = require('assert');
const Student = require('../models/student.js');


describe('Find Test',function(){

var s;

beforeEach(function(done){

   s = new Student({

    name: "Yash",
    age: 21,
    contact: "8050002948"

  });

  s.save().then(function(){

    console.log('Saved');
    done();

  });

});


  it('Find Record using attributes', function(done){

      Student.findOne({name:"Yash",age:21,contact:"8050002948"}).then(function(result){

          assert(result.name === "Yash");
          done();

      });

  });

  it('Find Record using ID',function(done){

    Student.findOne({_id : s._id}).then(function(result){

      assert(result._id.toString() === s._id.toString());
      console.log(result._id);
      done();
    });

  });

});
