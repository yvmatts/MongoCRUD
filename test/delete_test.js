const mocha = require('mocha');
const assert = require('assert');
const Student = require('../models/student.js');


describe('Delete Test',function(){

var s;

beforeEach(function(done){

   s = new Student({

    name: "Yash",
    age: 21,
    contact: "8050002949"

  });

  s.save().then(function(){

    console.log('Saved');
    done();

  });

});


it("Delete - Find one and Remove",function(done){

  Student.findOneAndDelete({name:"Yash",age:21,contact:"8050002949"}).then(function(){

    Student.findOne({name:"Yash",age:21,contact:"8050002949"}).then(function(result){

        assert(result === null);
        done();

    });

  });

});


});
