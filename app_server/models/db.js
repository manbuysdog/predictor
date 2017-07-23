var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/predictor';


if (process.env.NODE_ENV === 'production') {
    console.log(process.env.MONGODB_URI);
    dbURI = process.env.MONGODB_URI;
};
mongoose.connect(dbURI);

mongoose.connection.on('connected', function (){
    console.log('mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function (err){
    console.log('mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function (){
    console.log('mongoose disconnected from ' + dbURI);
});

var gracefulShutdown = function(msg, callback){
    mongoose.connection.close(function () {
        console.log('mongoose disconnected through ' + msg);
        callback();
    });
};

process.once('SIGUSR2', function () {
   gracefulShutdown('nodemon restart', function(){
       process.kill(process.pid, 'SIGUSR2');
   })
});

process.on('SIGINT', function () {
   gracefulShutdown('app termination', function(){
       process.exit(0);
   })
});

process.on('SIGTERM', function () {
   gracefulShutdown('heroku app shutdown', function(){
       process.exit(0);
   })
});



require('./teams');