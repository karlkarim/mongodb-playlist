 const assert = require('assert');
 const MarioChar = require('../models/mariochar')

 describe('Saving records',function(){

    it('Saves a record to the db', function(done){
        var char = new MarioChar({
            name: 'Mario'
        })

        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });
     })
 })
