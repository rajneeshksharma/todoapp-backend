var mongoose = require('mongoose');
var mongoose = require('mongoose');
var uri =  process.env.MONGODB_URI || "mongodb://root:root1234@ds133630.mlab.com:33630/todoapprk";
var options = {
    user: '',
    pass: '',
    // server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
    reconnectTries: 10,
    useNewUrlParser: true 
};

 mongoose.Promise =global.Promise

 mongoose.connect(uri, options).then(
 () => {console.log('Databse is connected')},
 () => {console.log('Connection not connected')}
 )