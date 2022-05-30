const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/IssaWeb',{
//useCreateIndex: true,
useNewUrlParser: true,
//useFindAndModify: false


}) .then(db=> console.log('DB esta conectada'))
    .catch(err=>console.error(err));


