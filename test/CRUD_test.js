const mocha = require('mocha');
const assert = require('assert');
const Student = require('../models/student.js');


describe('CRUD Tests',function(done){

  it('Create Record',async function(){

    var s = new Student({

      name: "Yash",
      age: 21,
      contact: "8050002949"


    });

    
    s.save().then(function(){

      assert(s.isNew === false);
      done();

    });

  });

});
