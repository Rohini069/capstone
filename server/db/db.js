const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/eventmanagement')
.then(()=>console.log('Database connected'))
.catch(()=>console.log('Database not connected'))