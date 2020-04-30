const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before(function(done){
    mongoose.connect('mongodb://localhost/testaroo', {useNewUrlParser:true, useUnifiedTopology:true});

    mongoose.connection.once('open',function() {
        console.log('Connection has been made...');
        done();
    }).on('error',function(error){
        console.log('Connection error:', error);
    })
})


beforeEach(function(done){
    mongoose.connection.collections.mariochars.drop(function(){
       done();
    })
})


