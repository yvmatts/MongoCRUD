const mocha = require('mocha');
const assert = require('assert');
const Student = require('../models/student.js');


describe('Save Tests',function(){

  it('Create Record',function(done){

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
