const express =require('express')
require('dotenv').config()
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require('path')
var pg = require('pg');
const db= require('./db-config')
const app = express()



app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(express.static(path.join(__dirname,'public')))

const ClientClass = pg.Client

const pgUrl = "postgres://test_jp4h_user:pH9ILgSC4BrVUXkrLmootQ8NhXa4R9KR@dpg-cjs7et8jbais73d8o280-a/test_jp4h"
const client  = new ClientClass(pgUrl)

app.get('/getdata', (request,response)=>{

      db.pool.query('SELECT * FROM users order by user_id asc ', async (error, results) => {
        if (error) {
          throw error;
        }
    console.log(results.rows[0])
         response.status(200).json(results.rows[0]);
    })


   // try{
   //  await client.connect()
   //  console.log('connected')
   //     response.status(200).json('connected');
   // }
   // catch(error){
   //  console.log('error')
   //     response.status(200).json('error');
   // }
   
   

  

})


   





app.listen(9000)
