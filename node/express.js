const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send('chandu ke chacha')
})
app.listen(3000)