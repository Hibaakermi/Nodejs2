const express = require('express');
const router = require('./Router/router')
const app = express()

app.use('/voiture',router)

app.listen(9000,()=>{
    console.log('app listen at port 9000');
})
