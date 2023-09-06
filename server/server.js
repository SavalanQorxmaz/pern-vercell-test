const express =require('express')
require('dotenv').config()
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require('path')
var pg = require('pg');
const db= require('./db-config')
const pgp = require('pg-promise')()
const app = express()



app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(express.static(path.join(__dirname,'public')))

const ClientClass = pg.Client

const pgUrl = "postgres://test_jp4h_user:pH9ILgSC4BrVUXkrLmootQ8NhXa4R9KR@dpg-cjs7et8jbais73d8o280-a/test_jp4h"
const client  = new ClientClass(pgUrl)

app.get('/getdata',async (request,response)=>{

    //   dbp.query('SELECT * FROM users ordered by user_id asc ', [], (error, results) => {
    //     if (error) {
    //       throw error;
    //     }
    // console.log(results.rows)
    //      response.status(200).json(results.rows);
    // })


   try{
    await client.connect()
    console.log('connected')
   }
   catch(error){
    console.log('error')
   }
   
   

  

})


   





app.listen(9000)