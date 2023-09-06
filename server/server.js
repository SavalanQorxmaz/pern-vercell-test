const express =require('express')
require('dotenv').config()
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require('path')

const db= require('./db-config')

const app = express()



app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(express.static(path.join(__dirname,'public')))



app.get('/getdata',async (request,response)=>{

    console.log(request.body)

    db.pool.query('SELECT * FROM users  WHERE user_name LIKE $1', [request.body.user], (error, results) => {
    if (error) {
      throw error;
    }

     response.status(200).json(results.rows);
})

    //  response.status(200).json(data);

})


   





app.listen(9000)