const express = require('express');
const app = express();
const config = require('./config/config');
const mongoose = require('mongoose');
const routerUser = require('./routes/user');
const routerCheck = require('./routes/checkin')
const cors = require('cors');


mongoose.connect(config.uri, { useNewUrlParser: true,useCreateIndex:true, useFindAndModify:false});
app.use(cors());
app.options('*', cors());
app.use('/user', routerUser);
app.use('/check', routerCheck);
app.get('/', (req, res) => {
    res.send({ 'welcome': 'API is running at port 80 now!' })
})

module.exports = app;