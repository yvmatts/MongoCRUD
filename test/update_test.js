const mocha = require('mocha');
const assert = require('assert');
const Student = require('../models/student.js');


describe('Update Test',function(){

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


it("Update One",function(done){

  Student.findOneAndReplace({name:"Yash",age:21,contact:"8050002949"},{name:"Malvika",age:16,contact:"7022002949"}).then(function(){

    Student.findOne({name:"Malvika",age:16,contact:"7022002949"}).then(function(result){

      assert(result.name === "Malvika");
      done();

    });

  });

});

it("Update operator - Increment",function(done){

  Student.updateOne({},{$inc:{age:1}}).then(function(){

    Student.findOne({name:"Yash"}).then(function(result){

      assert(result.age === 22);
      done();

    });


  });

});


});
