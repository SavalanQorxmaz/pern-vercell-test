var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

const { Pool } = require('pg');

const pool = new Pool({
  user: 'gpbwkhjw',
  password: 'Rn9apFx0yItewZi2FoDOUXZHus50C7sH',
  host: 'berry.db.elephantsql.com',
  database: 'gpbwkhjw',
  
  
  
});

// var conString = "postgres://gpbwkhjw:Rn9apFx0yItewZi2FoDOUXZHus50C7sH@berry.db.elephantsql.com/gpbwkhjw" //Can be found in the Details page
// var client = new pg.Client(conString);
// client.connect(function(err) {
//   if(err) {
//     return console.error('could not connect to postgres', err);
//   }
//   client.query('SELECT NOW() AS "theTime"', function(err, result) {
//     if(err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0].theTime);
//     // >> output: 2018-08-23T14:02:57.117Z
//     client.end();
//   });
// });

module.exports =  {
 pool
}